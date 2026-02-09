import { Env, AuthRequest } from '../types';
import { corsHeaders } from '../middleware';

export const handleGetProducts = async (request: Request, env: Env) => {
    const { results } = await env.DB.prepare('SELECT * FROM products ORDER BY created_at DESC').all();
    const products = results.map((p: any) => ({ ...p, media_url: `/media/${p.media_key}` }));
    return new Response(JSON.stringify(products), { headers: corsHeaders });
};

export const handleGetProduct = async (request: any, env: Env) => {
    const { id } = request.params;
    const product = await env.DB.prepare('SELECT * FROM products WHERE id = ?').bind(id).first();
    if (!product) return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404, headers: corsHeaders });
    return new Response(JSON.stringify({ ...product, media_url: `/media/${(product as any).media_key}` }), { headers: corsHeaders });
};

export const handleCreateProduct = async (request: Request, env: Env) => {
    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const company = formData.get('company') as string;
        const size = formData.get('size') as string;
        const price = parseFloat(formData.get('price') as string);
        const mediaFile = formData.get('media') as File | null;

        if (!name || !company || !size || isNaN(price)) {
            return new Response(JSON.stringify({ error: 'Missing or invalid fields' }), { status: 400, headers: corsHeaders });
        }

        let mediaKey = 'placeholder.jpg';
        let mediaType = 'image';

        if (mediaFile && env.MEDIA_BUCKET) {
            const timestamp = Date.now();
            const originalName = mediaFile.name;
            mediaKey = `products/${timestamp}-${originalName}`;
            mediaType = mediaFile.type.startsWith('video') ? 'video' : 'image';
            await env.MEDIA_BUCKET.put(mediaKey, mediaFile.stream());
        }

        await env.DB.prepare(
            'INSERT INTO products (name, company, size, price, media_key, media_type) VALUES (?, ?, ?, ?, ?, ?)'
        ).bind(name, company, size, price, mediaKey, mediaType).run();

        return new Response(JSON.stringify({ success: true, message: 'Product created' }), { status: 201, headers: corsHeaders });
    } catch (e: any) {
        return new Response(JSON.stringify({ error: 'Failed to create product', details: e.message }), { status: 500, headers: corsHeaders });
    }
};

export const handleUpdateProduct = async (request: any, env: Env) => {
    const { id } = request.params;
    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const company = formData.get('company') as string;
        const size = formData.get('size') as string;
        const price = parseFloat(formData.get('price') as string);
        const mediaFile = formData.get('media') as File | null;

        const existingProduct = await env.DB.prepare('SELECT * FROM products WHERE id = ?').bind(id).first();
        if (!existingProduct) return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404, headers: corsHeaders });

        let mediaKey = (existingProduct as any).media_key;
        let mediaType = (existingProduct as any).media_type;

        if (mediaFile && env.MEDIA_BUCKET) {
            const timestamp = Date.now();
            const originalName = mediaFile.name;
            mediaKey = `products/${timestamp}-${originalName}`;
            mediaType = mediaFile.type.startsWith('video') ? 'video' : 'image';
            await env.MEDIA_BUCKET.put(mediaKey, mediaFile.stream());
        }

        await env.DB.prepare(
            'UPDATE products SET name = ?, company = ?, size = ?, price = ?, media_key = ?, media_type = ? WHERE id = ?'
        ).bind(name, company, size, price, mediaKey, mediaType, id).run();

        return new Response(JSON.stringify({ success: true, message: 'Product updated' }), { headers: corsHeaders });
    } catch (e: any) {
        return new Response(JSON.stringify({ error: 'Failed to update product', details: e.message }), { status: 500, headers: corsHeaders });
    }
};

export const handleDeleteProduct = async (request: any, env: Env) => {
    const { id } = request.params;
    const product = await env.DB.prepare('SELECT * FROM products WHERE id = ?').bind(id).first();
    if (!product) return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404, headers: corsHeaders });

    if (env.MEDIA_BUCKET) {
        await env.MEDIA_BUCKET.delete((product as any).media_key);
    }

    await env.DB.prepare('DELETE FROM products WHERE id = ?').bind(id).run();
    return new Response(JSON.stringify({ success: true, message: 'Product deleted' }), { headers: corsHeaders });
};
