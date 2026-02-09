import { Env } from '../types';

export const handleGetMedia = async (request: any, env: Env) => {
    const url = new URL(request.url);
    const key = url.pathname.replace('/media/', '');
    console.log(`[DEBUG] Fetching media key: ${key}`);
    const object = await env.MEDIA_BUCKET.get(key, { type: 'stream' });
    console.log(`[DEBUG] Object found: ${!!object}`);

    if (!object) return new Response('Media not found', { status: 404 });

    let contentType = 'application/octet-stream';
    if (key.endsWith('.jpg') || key.endsWith('.jpeg')) contentType = 'image/jpeg';
    else if (key.endsWith('.png')) contentType = 'image/png';
    else if (key.endsWith('.mp4')) contentType = 'video/mp4';

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set('Content-Type', contentType);
    headers.set('Cache-Control', 'public, max-age=31536000');

    return new Response(object, { headers });
};
