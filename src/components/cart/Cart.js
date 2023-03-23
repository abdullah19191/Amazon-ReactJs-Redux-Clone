import { Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Option from "./Option";
import RightAdds from "./RightAdds";

const Cart = () => {
  const cartitems = useSelector((state) => state.cart.products)
  console.log(cartitems);

  return (
    <div className="w-full h-auto mb-9 md:h-[90vh] relative top-16">
      <div className="flex flex-col-reverse md:flex-row mx-auto my-0 md:px-5 py-4 md:py-8 items-center md:justify-around w-[95%]">
        <div className="bg-white md:flex-[.88] flex-1  px-5 py-3 border-1 rounded-md mb-5 md:mb-0">
          <h1 className="font-bold text-3xl">Shopping Cart</h1>
          <h5 className="font-semibod text-1xl text-blue-700 my-3">
            Select All items
          </h5>
          <Divider />
          <div className="md:flex py-4 pr-[5px] items-center justify-center">
            <div className="justify-center md:justify-start flex md:flex-none">
              <img
                src="https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70"
                alt=""
                className="md:w-[80%] w-36"
              />
            </div>
            <div className="">
              <h3 className="font-[600] text-lg">
                Molife Sense 500 Smartwatch (Black Strap, Freesize)
                <span className="  font-[750] text-xl">$786.88</span>
              </h3>
              <h3 className="font-[600] text-lg">Smart Watches</h3>
              <p className="mt-2 mb-2 text-[#c45500] text-md font-[500]">
                Usually dispatched in 8 days
              </p>
              <p className=" mb-4 text-md font-[500]">
                Eligible for free Shipping
              </p>
              <img
                src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                alt="logo"
                className=" cursor-pointer w-[20%] mb-3 "
              />
              <div className="">
                <Option />
              </div>
            </div>
          </div>
          <Divider />
          <div className=" flex justify-end p-2">
            <h3 className="font-semibold text-2xl ">
              Subtotal(1 items):<span className="font-[700]">$786.88</span>
            </h3>
          </div>
        </div>
        <div className="md:w-auto w-full">
          <RightAdds />
        </div>
      </div>
    </div>
  );
};

export default Cart;
