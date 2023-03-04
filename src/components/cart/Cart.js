import { Divider } from "@mui/material";
import React from "react";
import Rating from "material-ui-rating";
const Cart = () => {
  return (
    <div className="w-full h-auto  md:h-screen relative top-16 bg-white">
      <div className="md:flex  mx-auto w-[95%] px-4 py-12  flex flex-col md:flex-row items-center">
        <div className=" md:flex-1 flex-2  items-center justify-center flex flex-col">
          <img
            src="https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70"
            alt=""
            className="w-[50%] mb-10"
          />
          <div className="flex lg:justify-self-start">
            <button className=" hover:bg-[#ec9615] border-1 rounded-[20px] bg-[#FFD814] text-[#0F1111] drop-shadow-xl lg:w-52 w-40 font-[14px] px-7 py-3">
              Add to Cart
            </button>
            <button className="hover:bg-[#f1cc13] border-1 rounded-[20px] bg-[#FFA41C] text-[#0F1111] drop-shadow-xl lg:w-52 w-40 font-[14px] px-7 py-3 ml-5 ">
              Buy Now
            </button>
          </div>
        </div>
        <div className="md:flex-1 flex-2 border-2 border-solid border-[#c4c4c4] my-7 ">
          <h2 className="text-3xl font-bold pl-4 my-6 font-serif">
            Fitness Gear
          </h2>
          <h3 className="text-2xl  font-semibold pl-4 mb-2 font-sans ">
            AJRO DEAL New Adjustable Single Resistance Tube (Multicolor)
            Resistance Tube (Multicolor)
          </h3>
          <Divider />
          <p className="font-semibold text-md text-gray-600 pl-4 mb-2 font-sans uppercase mt-4">
            mrp:<span className=" text-red-700 ml-2">$499</span>
          </p>
          <p className="font-semibold text-md text-gray-600 pl-4 mb-1 font-sans uppercase">
            cost:<span className="text-red-700 ml-1">$166</span>
          </p>
          <p className="font-semibold text-md text-gray-600 pl-4  font-sans uppercase">
            discount: <span className="text-red-700 ml-1">66%</span>
          </p>
          <div className="mt-3">
            <h5 className=" text-xl  pl-4 mb-2 font-semibold text-red-700">
              Discount:
              <span className="font-bold ml-2 text-black">Upto 70% Off</span>
            </h5>
            <h4 className=" text-xl  pl-4 mb-2 font-[400] text-blue-700 mt-1">
              Package:
              <span className="font-bold  ml-2 text-black">
                Deal of the Day
              </span>
            </h4>
            <p className="text-lg  pl-4 mb-2 font-semibold text-gray-700 mt-3">
              Fastest delivery:
              <span className="font-semibold  ml-2 text-black">
                Tommorow at 11AM
              </span>{" "}
            </p>
          </div>
          <div className=" justify-center pl-4 ">
            <Rating value={4} max={5} name="size-large"  onChange={(value) => console.log(`Rated with value ${value}`)}
            />
            <p className="font-semibold mb-2">About the item:<span className="font-thin">The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
