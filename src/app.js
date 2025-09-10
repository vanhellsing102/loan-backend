const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) =>{
    res.send("Loan Management System Running");
})

export default app;