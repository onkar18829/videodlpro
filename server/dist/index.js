"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const rateLimiter_1 = require("./middlewares/rateLimiter");
const errorHandler_1 = require("./middlewares/errorHandler");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Hugging Face Spaces default port is 7860
const port = process.env.PORT || 7860;
// Security Middlewares
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Rate Limiting
app.use('/api/', rateLimiter_1.apiLimiter);
// Body Parsing
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Health Check Endpoint (Required for Hugging Face/Docker containers)
app.get('/', (req, res) => {
    res.json({ status: 'healthy', service: 'Online Free Video Downloader API' });
});
// API Routes
app.get('/api/video/info', (req, res) => {
    res.json({ message: 'Video info endpoint stub' });
});
// Global Error Handler
app.use(errorHandler_1.errorHandler);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
