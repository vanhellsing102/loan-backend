import express from "express";
import { ProfileControllers } from "./profile.controller.js";

const router = express.Router();

router.patch("/:userId", ProfileControllers.updateProfile);
router.get("/:userId", ProfileControllers.getProfile);

export const ProfileRoutes = router;