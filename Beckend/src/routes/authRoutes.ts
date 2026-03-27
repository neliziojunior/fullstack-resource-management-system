import { Router } from "express";
import { AuthController } from "../controllers/authController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";

const router = Router();
const authController = new AuthController();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get(
  "/admin",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  (req, res) => {
    return res.json({ message: "Área do admin" });
  }
);

export default router;
