import express from "express";
import { UserControllers } from "./user.controller.js";

const router = express.Router();

router.post("/sign-up", UserControllers.createUser);

export const UserRoutes = router;