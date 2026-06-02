import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { apiLimiter } from './middlewares/rateLimiter';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app: Express = express();
// Hugging Face Spaces default port is 7860
const port = process.env.PORT || 7860;

// Security Middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rate Limiting
app.use('/api/', apiLimiter);

// Body Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Endpoint (Required for Hugging Face/Docker containers)
app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'healthy', service: 'Online Free Video Downloader API' });
});

// API Routes
app.get('/api/video/info', (req: Request, res: Response) => {
  res.json({ message: 'Video info endpoint stub' });
});

// Global Error Handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
