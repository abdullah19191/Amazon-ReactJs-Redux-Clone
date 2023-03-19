import {CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const state = useSelector((state) => state);
  console.log("State", state.product.data);

  if(state.product.isLoading){
    return <div className="flex items-center justify-center h-screen text-xl">
<CircularProgress/>
    </div>
  }
  return (
    <div className="w-full  grid grid-cols-2 gap-10 mx-auto px-4 mt-12 md:grid-cols-4">
      {state.product.data &&
        state.product.data.map((e) => {
          return (
            <div className="bg-white border-1  hover:border-transparent hover:shadow-xl relative duration-200 gap-4  border-gray-200 py-6 z-30 shadow flex flex-col">
              <div className="h-auto flex justify-center items-center w-full">
              <img src={e.image} alt="" className="w-52  h-64 object-contain" />
              </div>
              <div className=" px-4">
              <div className=" flex gap-12 justify-between items-center">
              <h1 className=" font-medium tracking-wide text-lg text-blue-900">{e.title.substring(0,20)}</h1>
              {/* <h1>{e.description}$</h1> */}
              <h1>{e.price}$</h1>
              </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
