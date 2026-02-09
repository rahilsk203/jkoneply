import jwt from '@tsndr/cloudflare-worker-jwt';
import { Env, AuthRequest } from './types';

export const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export const withCors = () => new Response(null, { headers: corsHeaders });

export const withAuth = async (request: AuthRequest, env: Env) => {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: corsHeaders });
    }
    const token = authHeader.split(' ')[1];
    try {
        const isValid = await jwt.verify(token, env.JWT_SECRET);
        if (!isValid) {
            return new Response(JSON.stringify({ error: 'Invalid token' }), { status: 401, headers: corsHeaders });
        }
        const payload = jwt.decode(token).payload;
        request.user = payload as any;
    } catch (e) {
        return new Response(JSON.stringify({ error: 'Token verification failed' }), { status: 401, headers: corsHeaders });
    }
};

export const withAdmin = (request: AuthRequest) => {
    if (request.user?.role !== 'admin') {
        return new Response(JSON.stringify({ error: 'Forbidden: Admin access required' }), { status: 403, headers: corsHeaders });
    }
};
