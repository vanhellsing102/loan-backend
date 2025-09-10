import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app = express();

// parsers----------------------------
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

app.get("/", (req, res) =>{
    res.send("Loan Management System Running");
})

app.use(globalErrorHandler);

export default app;