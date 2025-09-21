import express from "express";
import { CreditDecisionControllers } from "./creditDecision.controller.js";
import validateRequest from "../../middlewares/validateRequest.js";
import creditRequestValidationSchema from "./creditDecision.validation.js";

const router = express.Router();

router.post('/', validateRequest(creditRequestValidationSchema), CreditDecisionControllers.createCreditDecision);

export const CreditDecisionRoutes = router;