import jwt from '@tsndr/cloudflare-worker-jwt';
import { Env, User } from '../types';
import { hashPassword } from '../utils';
import { corsHeaders } from '../middleware';

export const handleRegister = async (request: Request, env: Env) => {
    try {
        const { username, email, password } = await request.json() as any;
        if (!username || !email || !password) return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400, headers: corsHeaders });

        const passwordHash = await hashPassword(password);
        await env.DB.prepare('INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)').bind(username, email, passwordHash).run();

        const user = await env.DB.prepare('SELECT * FROM users WHERE username = ?').bind(username).first<User>();
        if (!user) return new Response(JSON.stringify({ error: 'User creation failed' }), { status: 500, headers: corsHeaders });

        if (!env.JWT_SECRET) return new Response(JSON.stringify({ error: 'JWT_SECRET not configured' }), { status: 500, headers: corsHeaders });

        const token = await jwt.sign({ user_id: user.id, role: user.role, exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) }, env.JWT_SECRET);
        return new Response(JSON.stringify({ token, user: { id: user.id, username: user.username, role: user.role } }), { headers: corsHeaders });
    } catch (e: any) {
        if (e.message.includes('UNIQUE')) return new Response(JSON.stringify({ error: 'User already exists' }), { status: 409, headers: corsHeaders });
        return new Response(JSON.stringify({ error: 'Registration failed', details: e.message }), { status: 500, headers: corsHeaders });
    }
};

export const handleLogin = async (request: Request, env: Env) => {
    try {
        const { username, password } = await request.json() as any;
        if (!username || !password) return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400, headers: corsHeaders });

        const passwordHash = await hashPassword(password);
        const user = await env.DB.prepare('SELECT * FROM users WHERE (username = ? OR email = ?) AND password_hash = ?').bind(username, username, passwordHash).first<User>();

        if (!user) return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401, headers: corsHeaders });

        if (!env.JWT_SECRET) return new Response(JSON.stringify({ error: 'JWT_SECRET not configured' }), { status: 500, headers: corsHeaders });

        const token = await jwt.sign({ user_id: user.id, role: user.role, exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) }, env.JWT_SECRET);
        return new Response(JSON.stringify({ token, user: { id: user.id, username: user.username, role: user.role } }), { headers: corsHeaders });
    } catch (e: any) {
        return new Response(JSON.stringify({ error: 'Login failed', details: e.message }), { status: 500, headers: corsHeaders });
    }
};
