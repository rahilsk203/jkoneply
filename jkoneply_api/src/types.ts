export interface Env {
    DB: D1Database;
    MEDIA_BUCKET: KVNamespace;
    JWT_SECRET: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    role: 'user' | 'admin';
}

export interface AuthRequest extends Request {
    user?: {
        user_id: number;
        role: string;
        exp: number;
    };
    params: any;
}
