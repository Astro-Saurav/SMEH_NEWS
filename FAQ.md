# Frequently Asked Questions (FAQ)

Here are answers to the most common questions regarding the SMEH_NEWS project.

---

## General Questions

### What is SMEH_NEWS / Manav Rachna Time?
SMEH_NEWS is a full-stack Content Management System (CMS) and Customer Relationship Management (CRM) platform that manages and publishes news articles and media content.

### What tech stack does the project use?
* **Frontend**: Next.js 15, React 19, Tailwind CSS.
* **Admin Dashboard**: Vite, React 18, React Router, Tailwind CSS, Radix UI.
* **Backend**: Express.js, Prisma ORM, Winston logging.
* **Database**: PostgreSQL (production/dev) or SQLite (local testing).
* **Caching & Queue**: Redis (BullMQ).
* **Deployment/Proxy**: PM2, Docker, Nginx.

---

## Project Structure & Configuration

### Why does the project use a monorepo structure?
The monorepo structure keeps the API server, public consumer site, and administrative CRM dashboard in a single repository. This simplifies version control, development setup, and sharing configuration files.

### Why does the Admin CRM reside inside `frontend/admin-crm`?
The Admin CRM is a distinct single-page application (SPA) that serves editors and administrators. Locating it inside the `frontend` folder organizes all client-side code in one place while keeping it logically decoupled from the public Next.js app.

### How do I configure my environment variables?
Create a `.env` file in the `backend/` directory and configure the variables listed in the README. For example:
```env
PORT=8080
DATABASE_URL="postgresql://user:password@localhost:5432/smeh_db"
REDIS_URL="redis://localhost:6379"
JWT_SECRET="your-super-secret-key"
```

---

## Common Setup & Troubleshooting

### How do I initialize the database locally?
Make sure you have configured `DATABASE_URL` in `backend/.env`, then run:
```bash
npm run db:migrate:dev --prefix backend
npm run db:generate --prefix backend
npm run db:seed --prefix backend
```

### Why do my uploaded images fail to load?
Ensure the `UPLOAD_BASE_PATH` in your `.env` points to a valid directory on your disk, and check that Nginx or your Express application serves static assets from that path.

### How does image processing work in the backend?
Express receives uploaded images, validates them using Magic Byte checks to prevent malicious uploads, and processes them asynchronously via Redis and Sharp into optimized WebP or AVIF formats.

### Do I need a running Redis server?
Yes, you must run a Redis server locally or in your deployment environment to support background workers, task queues (using BullMQ), and caching.
