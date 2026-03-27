import { Router } from "express";
import { DashboardController } from "../controllers/dashboardController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();
const controller = new DashboardController();

router.get("/", authMiddleware, controller.stats);

export default router;
