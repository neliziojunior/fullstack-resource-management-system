import { Request, Response } from "express";
import { AuthService } from "../services/authService";

const authService = new AuthService();

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const user = await authService.register(name, email, password);
      console.log('Resultado do service:', user);


      return res.json(user);
    } catch (error: any) {
        console.log("ERRO COMPLETO", error);
      return res.status(400).json({ 
        error: "Erro ao registrar",
        detalhe: error.message,
        meta: error.meta });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const data = await authService.login(email, password);

      return res.json(data);
    } catch (error) {
      return res.status(400).json({ error: "Erro no login" });
    }
  }
}
