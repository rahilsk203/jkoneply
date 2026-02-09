# JKONEPLY Backend API

Complete Cloudflare Worker backend for a plywood/products catalog app.

## Tech Stack
- **Cloudflare Workers**: Serverless runtime.
- **D1 Database**: SQL database for structured data.
- **Workers KV**: Key-Value storage for media files (images/videos).
- **itty-router**: Lightweight routing.
- **JWT**: Authentication via `@tsndr/cloudflare-worker-jwt`.

## Setup Instructions

### 1. Prerequisites
- Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/) CLI.
- Authenticate with `npx wrangler login`.

### 2. Create KV Namespace
Create a KV namespace for media storage:
```bash
npx wrangler kv:namespace create MEDIA_BUCKET
```
Copy the `id` from the output and paste it into the `kv_namespaces` section in `wrangler.toml`.

### 3. Create D1 Database
Create the D1 database:
```bash
npx wrangler d1 create jkoneply-db
```
Copy the `database_id` from the output and paste it into the `d1_databases` section in `wrangler.toml`.

### 4. Run Migrations
Apply the SQL schema to your D1 database:
```bash
npx wrangler d1 execute jkoneply-db --file=./schema.sql
```

### 5. Add JWT Secret
Set a secure secret for JWT signing:
```bash
npx wrangler secret put JWT_SECRET
```
(Enter a long, random string when prompted).

### 6. Install Dependencies
If you are running locally or building the project:
```bash
npm install itty-router @tsndr/cloudflare-worker-jwt
```

### 7. Deploy
Deploy your worker to Cloudflare:
```bash
npx wrangler deploy
```

## API Endpoints

### Public
- `POST /api/register`: Register a new user.
- `POST /api/login`: Login and receive JWT.
- `GET /api/products`: List all products.
- `GET /api/products/:id`: Get product details.
- `GET /media/:key`: Serve media file.

### Admin (Requires JWT + admin role)
- `POST /api/admin/products`: Create product (Multipart/form-data).
- `PUT /api/admin/products/:id`: Update product.
- `DELETE /api/admin/products/:id`: Delete product.

### User (Requires JWT)
- `GET /api/me/saved`: Get saved products.
- `POST /api/me/saved`: Save a product.
- `DELETE /api/me/saved/:product_id`: Unsave a product.
