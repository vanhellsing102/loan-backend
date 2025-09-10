import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();


app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) =>{
    res.send("Loan Management System Running");
})

export default app;