import express from "express";
import { CreditRequestControllers } from "./creditRequest.controller.js";

const router = express.Router();

router.post('/', CreditRequestControllers.applyCreditRequest);

export const CreditRequestRoutes = router;