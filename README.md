# VideoDL Pro - Premium Online Video Downloader

A high-performance, visually stunning, production-ready video downloader platform. Built with a 3D-animated UI and a scalable provider-based backend architecture.

## 🚀 Tech Stack

- **Frontend:** AstroJS, Tailwind CSS v3, Framer Motion, Lucide Icons.
- **Backend:** Node.js, Express, TypeScript, Prisma (PostgreSQL).
- **Architecture:** Monorepo with isolated `/client` and `/server` folders.

---

## 🛠️ Local Setup

### 1. Backend (Server)
```bash
cd server
npm install
cp .env.example .env
# Setup local PostgreSQL in .env
npx prisma db push
npm run dev
```
*Server runs on `http://localhost:7860`*

### 2. Frontend (Client)
```bash
cd client
npm install
cp .env.example .env
npm run dev
```
*Client runs on `http://localhost:4321`*

---

## 🌍 Deployment Guide

### A. Backend -> Hugging Face Spaces (Docker)
Hugging Face Spaces is ideal for this backend as it provides a persistent environment for tools like `yt-dlp`.

1. **Create Space:** Go to Hugging Face and create a new **Docker** Space.
2. **Connect Repo:** Link your GitHub repo or upload the `/server` folder.
3. **Environment Variables:** In Space Settings, add:
   - `DATABASE_URL`: Your PostgreSQL connection string (e.g., from Railway, Supabase, or Neon).
   - `NODE_ENV`: `production`
   - `CLIENT_URL`: Your Vercel frontend URL.
4. **Build:** Hugging Face will automatically read the `Dockerfile` and expose port `7860`.

### B. Frontend -> Vercel (or Cloudflare Pages)
The frontend is optimized for edge deployment.

1. **Import Project:** Select the `client` directory as the root.
2. **Framework Preset:** Select **Astro**.
3. **Environment Variables:**
   - `VITE_API_URL`: Your Hugging Face Space URL (e.g., `https://username-space-name.hf.space/api`).
4. **Build & Deploy:** Vercel will build and serve your site globally.

---

## 🔌 API Documentation

All requests should be sent to the backend URL defined in your environment.

### 1. Get Video Info
`GET /api/video/info?url=<video_url>`
- **Platforms:** YouTube, TikTok, Instagram, Facebook, X.
- **Returns:** Metadata (Title, Thumbnail, Duration) and available formats/resolutions.

### 2. Download/Process
`POST /api/video/download`
- **Body:** `{ "url": "string", "quality": "string", "format": "mp3|mp4" }`
- **Returns:** A signed download link or stream.

---

## 📡 Recommended APIs for Production

To make this fully functional, integrate these tools into `server/src/services/providers/`:

1. **yt-dlp (Strongly Recommended):** The industry standard. Install it in your Docker container to support 1000+ sites.
2. **RapidAPI (Social Media):** Use "TikTok Full Metadata" or "Instagram Media Downloader" APIs for higher reliability against social media anti-bot systems.
3. **Database:** Use **Supabase** or **Neon** for a serverless PostgreSQL instance that works perfectly with Prisma.

---

## 🎨 Design Principles
- **Glassmorphism:** Smooth frosted glass effects on all cards.
- **3D Perspective:** Interactive hover states on the main input.
- **Responsive:** Mobile-first design that adapts from 320px to 4K.
- **Theme:** Full Dark/Light mode support with persistence.
