import express from "express";
import { ProfileControllers } from "./profile.controller.js";

const router = express.Router();

router.put("/:userId", ProfileControllers.updateProfile);

export const ProfileRoutes = router;