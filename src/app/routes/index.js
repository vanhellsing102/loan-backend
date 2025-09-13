import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route.js";
import { ProfileRoutes } from "../modules/profile/profile.route.js";

const router = Router();

const moduleRoutes = [
    {
        path: "/user",
        route: UserRoutes
    },
    {
        path: "/profile",
        route: ProfileRoutes
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;