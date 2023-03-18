import React, { useEffect } from "react";
import axios from "axios";

const Products = () => {
  useEffect(() => {
    async function ProductsData() {
      let data = await axios.get("https://fakestoreapi.com/products");
      console.log(data);
    }
    ProductsData();
  }, []);
  return <div>API PRODUCTS</div>;
};

export default Products;
