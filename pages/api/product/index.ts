import { json } from "stream/consumers";
export default function handler(req: any, res: any) {
  if (req.method === "POST") {
    
    res.json({
      status: true,
    });
  } else {
    // Handle any other HTTP method
  }
}
