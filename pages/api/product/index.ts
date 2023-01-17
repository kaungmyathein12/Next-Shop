// export const cloudinary = require("cloudinary").v2;

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
      console.log("response body", req.body);
      console.log("response file", req.file);
    } catch (error) {
      console.log("error", error);
    }
  }
}
