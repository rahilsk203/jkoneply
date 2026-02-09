import { Env, AuthRequest } from '../types';
import { corsHeaders, withAuth } from '../middleware';

export const handleGetSaved = async (request: AuthRequest, env: Env) => {
    const userId = request.user!.user_id;
    const { results } = await env.DB.prepare(`
        SELECT p.*, us.saved_at 
        FROM user_saved us 
        JOIN products p ON us.product_id = p.id 
        WHERE us.user_id = ?
        ORDER BY us.saved_at DESC
    `).bind(userId).all();

    const products = results.map((p: any) => ({
        ...p,
        media_url: `/media/${p.media_key}`
    }));

    return new Response(JSON.stringify(products), { headers: corsHeaders });
};

export const handleSaveProduct = async (request: AuthRequest, env: Env) => {
    const userId = request.user!.user_id;
    const { product_id } = await request.json() as any;

    if (!product_id) return new Response(JSON.stringify({ error: 'Missing product_id' }), { status: 400, headers: corsHeaders });

    try {
        await env.DB.prepare('INSERT INTO user_saved (user_id, product_id) VALUES (?, ?)').bind(userId, product_id).run();
        return new Response(JSON.stringify({ success: true, message: 'Product saved' }), { status: 201, headers: corsHeaders });
    } catch (e: any) {
        if (e.message.includes('UNIQUE')) return new Response(JSON.stringify({ message: 'Already saved' }), { status: 200, headers: corsHeaders });
        return new Response(JSON.stringify({ error: 'Failed to save product' }), { status: 500, headers: corsHeaders });
    }
};

export const handleUnsaveProduct = async (request: AuthRequest, env: Env) => {
    const userId = request.user!.user_id;
    const { product_id } = request.params;
    await env.DB.prepare('DELETE FROM user_saved WHERE user_id = ? AND product_id = ?').bind(userId, product_id).run();
    return new Response(JSON.stringify({ success: true, message: 'Product removed' }), { headers: corsHeaders });
};
