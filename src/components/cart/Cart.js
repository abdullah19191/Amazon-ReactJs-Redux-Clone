import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../redux/slice/cartSlice";
import Option from "./Option";
import RightAdds from "./RightAdds";

const Cart = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart.products);
  console.log(cartitems);
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    let Total = 0;
    cartitems.map((item) => {
      Total += item.price * item.quantity;
      return setTotalPrice(Total.toFixed(2));
    });
  }, [cartitems]);
  return (
    <div className="w-full h-auto mb-9  relative top-16">
      <div className="flex flex-col-reverse md:flex-row mx-auto my-0 md:px-5 py-4 md:py-8 items-center md:justify-around w-[95%]">
        <div className="bg-white md:flex-[.88] flex-1  px-5 py-3 border-1 rounded-md mb-5 md:mb-0">
          <h1 className="font-bold text-3xl">Shopping Cart</h1>
          <h5 className="font-semibod text-1xl text-blue-700 my-3">
            Select All items
          </h5>
          <Divider />
          {cartitems.map((e) => (
            <div key={e.id} className="">
              <div className="lg:flex  items-center p-4 gap-6 ">
                <div className=" lg:w-1/5">
                  <img
                    src={e.image}
                    alt=""
                    className=" w-full  h-44 object-contain"
                  />
                </div>
                <div className="">
                  <div className=" flex  items-center justify-between ">
                    <h3 className="font-[600] text-lg">{e.title}</h3>
                    <span className="  font-[750] text-xl">
                      ${e.price * e.quantity}
                    </span>
                  </div>
                  <h3 className="font-[400] text-md">
                    {e.description.substring(0, 120)}
                  </h3>
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
                    <Option rating={e.rating} quantity={e.quantity} id={e.id} />
                  </div>
                </div>
              </div>
              <Divider />
            </div>
          ))}
          <div className=" flex flex-col lg:flex-row justify-between p-2 items-center">
            <button
              onClick={() => dispatch(resetCart())}
              className=" bg-red-500 w-36 text-lg  py-2 font-semibold  rounded-lg text-white mt-2 hover:bg-red-600 duration-300"
            >
              Clear Cart
            </button>
            <h3 className="font-semibold text-xl md:text-2xl ">
              Subtotal(1 items):
              <span className="font-[700]">${totalPrice}</span>
            </h3>
          </div>
        </div>
        <div className="md:w-auto w-full">
          <RightAdds price={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
