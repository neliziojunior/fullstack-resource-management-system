import { Request, Response } from "express";
import { DashboardService } from "../services/dashboardService";

const service = new DashboardService();

export class DashboardController {
  async stats(req: Request, res: Response) {
    try {
      const data = await service.getStats();
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ error: "Erro no dashboard" });
    }
  }
}
