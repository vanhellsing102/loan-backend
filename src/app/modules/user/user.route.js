import express from "express";
import { UserControllers } from "./user.controller.js";

const router = express.Router();

router.post("/sign-up", UserControllers.createUser);
router.post("/sign-in", UserControllers.loginUser);
router.patch("/security", UserControllers.updatePassword);

export const UserRoutes = router;