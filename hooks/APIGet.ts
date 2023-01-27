import { useQuery } from "react-query";
import axios from "axios";

const APIGet = () => {
  // GET Category List
  const categoryQuery = useQuery("category", async () => {
    const category = await axios.get("/api/category");
    return category.data.data;
  });
  // GET Product List
  const productQuery = useQuery("product", async () => {
    const product = await axios.get("/api/product");
    return product.data.data;
  });
  return { categoryQuery, productQuery };
};

export default APIGet;
