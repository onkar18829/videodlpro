# Online Free Video Downloader

A modern, production-grade video downloader platform.

## Architecture

- **Frontend (`/client`)**: Built with Astro, Tailwind CSS v4, and deployed on Cloudflare Pages.
- **Backend (`/server`)**: Built with Node.js, Express, TypeScript, and Dockerized for Hugging Face Spaces.

## Quick Start

### Backend (Server)
```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### Frontend (Client)
```bash
cd client
npm install
cp .env.example .env
npm run dev
```

## Deployment Strategy

### Frontend -> Cloudflare Pages
1. Connect the repository to Cloudflare Pages.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Set environment variable `VITE_API_URL` to your Hugging Face Space URL.

### Backend -> Hugging Face Spaces
1. Create a new Docker Space on Hugging Face.
2. Link the repository (or upload the `/server` folder).
3. Hugging Face will automatically read the `Dockerfile` and expose port `7860`.
4. Ensure environment variables (like `DATABASE_URL`) are configured in Space Settings.

## Features Supported
- ✅ Scalable Express Server Architecture
- ✅ API Rate Limiting & Helmet Security
- ✅ Clean UI with Astro & Tailwind CSS v4
- ✅ Glassmorphism Design Elements
- ✅ Mobile-First Responsiveness
