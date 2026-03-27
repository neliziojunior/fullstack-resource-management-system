import { Router } from "express";
import { ResourceController } from "../controllers/resourceController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();
const controller = new ResourceController();

router.post("/", authMiddleware, controller.create);
router.get("/", authMiddleware, controller.list);
router.put("/:id", authMiddleware, controller.update);
router.delete("/:id", authMiddleware, controller.delete);

export default router;
