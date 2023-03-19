import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Rating from "material-ui-rating";

const Products = () => {
  const state = useSelector((state) => state);
  console.log("State", state.product.data);

  if (state.product.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="w-full  grid grid-cols-2 gap-10 mx-auto px-4 mt-12 md:grid-cols-4">
      {state.product.data &&
        state.product.data.map((e) => {
          return (
            <div
              key={e.id}
              className="bg-white border-1 rounded-2xl  hover:border-transparent hover:shadow-xl relative duration-200 gap-4  border-gray-200 py-6 z-30 shadow flex flex-col"
            >
              <div className="h-auto flex justify-center items-center w-full">
                <img
                  src={e.image}
                  alt=""
                  className="w-52  h-64 object-contain"
                />
              </div>
              <div className=" px-4">
                <div className=" flex gap-12 justify-between items-center">
                  <h1 className=" font-medium tracking-wide text-lg text-[#131139]">
                    {e.title.substring(0, 20)}
                  </h1>
                  <h1 className="font-medium tracking-wide text-md text-[#131139]">
                    ${e.price}
                  </h1>
                </div>
                <h1 className=" font-normal text-md">
                  {e.description.substring(0, 100)}...
                </h1>
              </div>
                <Rating
                  value={e.rating.rate}
                  max={5}
                  name="size-large"
                  onChange={(value) => console.log(`Rated with value ${value}`)}
                />
                <div className=" px-4">
                <button className=" hover:bg-[#ec9615] border-2 border-gray-300 hover:border-black rounded-[5px] bg-[#FFD814] text-[#0F1111] hover:drop-shadow-xl w-full font-[14px] px-7 py-3">
              Add to Cart
            </button>
                </div>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
