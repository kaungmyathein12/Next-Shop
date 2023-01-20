// export const cloudinary = require("cloudinary").v2;

import prisma from "../../../lib/prisma";

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });
export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      console.log(data);
      if (data !== undefined) {
      }
    } catch (error) {}
  }
}
