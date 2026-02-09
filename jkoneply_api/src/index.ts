import { AutoRouter } from 'itty-router';
import { withCors, withAuth, withAdmin } from './middleware';
import * as auth from './handlers/auth';
import * as products from './handlers/products';
import * as media from './handlers/media';
import * as saved from './handlers/saved';

const router = AutoRouter();

// CORS Preflight
router.options('*', withCors);

// Auth
router.post('/api/register', auth.handleRegister);
router.post('/api/login', auth.handleLogin);

// Products
router.get('/api/products', products.handleGetProducts);
router.get('/api/products/:id', products.handleGetProduct);

// Admin Products
router.post('/api/admin/products', withAuth, withAdmin, products.handleCreateProduct);
router.put('/api/admin/products/:id', withAuth, withAdmin, products.handleUpdateProduct);
router.delete('/api/admin/products/:id', withAuth, withAdmin, products.handleDeleteProduct);

// User Saved
router.get('/api/me/saved', withAuth, saved.handleGetSaved);
router.post('/api/me/saved', withAuth, saved.handleSaveProduct);
router.delete('/api/me/saved/:product_id', withAuth, saved.handleUnsaveProduct);

// Media
router.get('/media/*', media.handleGetMedia);

// Health Check
router.get('/', () => new Response('JKONEPLY API is running', { status: 200 }));

router.get('/api/debug/keys', async (request, env: any) => {
    const list = await env.MEDIA_BUCKET.list();
    return new Response(JSON.stringify(list), { headers: { 'Content-Type': 'application/json' } });
});

export default router;
