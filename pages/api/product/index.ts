import { getSession } from "next-auth/react";
import { json } from "stream/consumers";
import prisma from "../../../lib/prisma";
export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const data = req.body;
    const session = await getSession({ req });
    if (session) {
      const result = await prisma.product.create({
        data: {
          ...data,
        },
      });
      res.json(result);
    }
  } else {
    // Handle any other HTTP method
  }
}
