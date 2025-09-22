// api/index.js (Vercel serverless entry)
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from '../app/routes/index.js';
import globalErrorHandler from '../app/middlewares/globalErrorHandler.js';
import notFound from '../app/middlewares/notFound.js';
import config from '../app/config/index.js';

const app = express();

// Parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true
}));

// Routes
app.use("/api/v1", router);

app.get("/", (req, res) => {
    res.send("Loan Management System Running (Serverless)");
});

// Global error handler & not found
app.use(globalErrorHandler);
app.use(notFound);

// MongoDB connection cache for serverless
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = mongoose.connect(config.databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((mongoose) => mongoose);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

// Export default handler for Vercel
export default async function handler(req, res) {
    await dbConnect();
    app(req, res);
}
