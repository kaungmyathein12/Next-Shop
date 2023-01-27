import nextConnect from "next-connect";
import prisma from "../../../lib/prisma";

const apiRoute = nextConnect();

apiRoute.get(async (req: any, res: any) => {
  try {
    const category = await prisma.category.findMany({
      include: {
        products: true,
      },
    });
    res.status(200).json({
      status: "success",
      data: category,
    });
  } catch (error) {}
});

export default apiRoute;
