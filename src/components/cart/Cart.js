import { Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Option from "./Option";
import RightAdds from "./RightAdds";


const Cart = () => {
  const cartitems = useSelector((state) => state.cart.products)
  console.log(cartitems);

  return (
    <div className="w-full h-auto mb-9  relative top-16">
      <div className="flex flex-col-reverse md:flex-row mx-auto my-0 md:px-5 py-4 md:py-8 items-center md:justify-around w-[95%]">
        <div className="bg-white md:flex-[.88] flex-1  px-5 py-3 border-1 rounded-md mb-5 md:mb-0">
          <h1 className="font-bold text-3xl">Shopping Cart</h1>
          <h5 className="font-semibod text-1xl text-blue-700 my-3">
            Select All items
          </h5>
          <Divider />
            {cartitems.map((e)=>(
          <div className="">
              <div key={e.id} className="md:flex  items-center p-4 gap-6 ">
              <div className=" md:w-1/5">
                <img
                 src={e.image}
                  alt=""
                  className=" w-full  h-44 object-contain"
                />
              </div>
              <div className="">
                <div className=" flex  items-center justify-between ">
                <h3 className="font-[600] text-lg">
                  {e.title}
                </h3>
                  <span className="  font-[750] text-xl">${e.price * e.quantity}</span>
                </div>
                <h3 className="font-[400] text-md">{e.description.substring(0, 120)}</h3>
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
                  <Option rating={e.rating} quantity={e.quantity} />
                </div>
              </div>
            </div>
            <Divider />
          </div>
            ))}
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
