import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from '../app/routes/index.js';
import globalErrorHandler from '../app/middlewares/globalErrorHandler.js';
import notFound from '../app/middlewares/notFound.js';

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

// Error handlers
app.use(globalErrorHandler);
app.use(notFound);

export default app;
