import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { z } from 'zod';
import { apiLimiter } from './middlewares/rateLimiter';
import { errorHandler } from './middlewares/errorHandler';
import { YoutubeProvider } from './services/providers/YoutubeProvider';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 7860;

// Instantiate providers
const providers = [
  new YoutubeProvider()
];

// Security Middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api/', apiLimiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'healthy', service: 'Online Free Video Downloader API' });
});

// Zod schema for URL validation
const infoSchema = z.object({
  url: z.string().url()
});

app.get('/api/video/info', async (req: Request, res: Response) => {
  try {
    const { url } = infoSchema.parse(req.query);
    
    // Find matching provider
    const provider = providers.find(p => p.canHandle(url));
    
    if (!provider) {
      return res.status(400).json({ 
        success: false, 
        error: { message: 'Unsupported platform or invalid URL' } 
      });
    }

    const metadata = await provider.getMetadata(url);
    res.json({ success: true, data: metadata });

  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        error: { message: 'Invalid URL format', details: error.errors } 
      });
    }
    res.status(500).json({ 
      success: false, 
      error: { message: error.message || 'Internal Server Error' } 
    });
  }
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
