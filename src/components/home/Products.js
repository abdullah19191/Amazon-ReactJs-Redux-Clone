import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
 const state =  useSelector((state)=> state);

 console.log("State",state)
  
  return <div>API PRODUCTS</div>;
};

export default Products;
