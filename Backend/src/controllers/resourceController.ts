import { Request, Response } from "express";
import { ResourceService } from "../services/resourceService";

const service = new ResourceService();

export class ResourceController {
  async create(req: Request, res: Response) {
   const user = (req as any).user as { id: string };
   const resource = await service.create(req.body, user.id);
   return res.json(resource);
  }

  async list(req: Request, res: Response) {
    const resources = await service.findAll();
    return res.json(resources);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id as string;
    const resource = await service.update(id, req.body);
    return res.json(resource);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id as string;
    await service.delete(id);
    return res.json({ message: "Deletado com sucesso" });
  }
}
