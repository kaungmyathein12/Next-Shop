// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();
prisma.product.findMany({
  include: {
    category: true,
  },
});

export default prisma;
