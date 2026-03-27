import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DashboardService {
  async getStats() {
    const total = await prisma.resource.count();

    const ativos = await prisma.resource.count({
      where: { status: "Ativo" },
    });

    const inativos = await prisma.resource.count({
      where: { status: "Inativo" },
    });

    return {
      total,
      ativos,
      inativos,
    };
  }
}
