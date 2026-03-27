import { PrismaClient, Prisma, Resource } from "@prisma/client";

const prisma = new PrismaClient();

export class ResourceService {
 async create(data: any, userId: string) {
  return prisma.resource.create({
    data: {
      ...data,
      userId,
    },
  });
}


  async findAll(): Promise<Resource[]> {
    return prisma.resource.findMany();
  }

  async findById(id: string): Promise<Resource | null> {
    return prisma.resource.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: Prisma.ResourceUpdateInput
  ): Promise<Resource> {
    return prisma.resource.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<Resource> {
    return prisma.resource.delete({ where: { id } });
  }
}
