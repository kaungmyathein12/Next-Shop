import nextConnect from "next-connect";
import multer from "multer";
import prisma from "../../../lib/prisma";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect();

apiRoute.get(async (req: any, res: any) => {
  try {
    const product = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {}
});

apiRoute.post(upload.single("image"), async (req: any, res: any) => {
  try {
    const dataforPost = { ...JSON.parse(JSON.stringify(req.body)) };
    dataforPost.image = `/uploads/${req.file.filename}`;
    const product = await prisma.product.create({
      data: {
        name: dataforPost.name,
        price: dataforPost.price * 1,
        image: dataforPost.image,
        discount: dataforPost.discount * 1,
        categoryId: dataforPost.categoryId * 1,
      },
    });
    res.status(200).json({ data: "success" });
  } catch (error) {
    console.log(error);
  }
  console.log();
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
