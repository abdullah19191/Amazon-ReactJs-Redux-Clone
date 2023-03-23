import React from "react";

const RightAdds = (props) => {
  return (
    <div className=" md:flex-[.2] border-1 rounded-md flex-1 mb-2">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
        alt=""
        className="w-[330px] hidden md:block"
      />
      <div className="bg-white mt-5 h-auto md:h-[280px]">
        <p className="font-semibold text-xs  text-blue-600 font-sans pt-6 pl-4">
          Your order is eligible for Free Delivery
          <br />
          <span className="font-semibold  text-gray-600 text-lg font-sans pt-2">
            Select the option at checkout.Details
          </span>
        </p>
        <div className=" flex justify-center p-2">
          <h3 className="font-semibold text-2xl mt-6 text-gray-500">
            Subtotal(1 items):
            <span className="font-[700] text-black">${props.price}</span>
          </h3>
        </div>
        <div className="flex justify-center w-full p-2">
          <button className=" hover:bg-[#ec9615]  border-1 rounded-[10px] bg-[#FFD814] text-[#0F1111] drop-shadow-md  w-full font-[14px] py-2 ">
            Process to buy
          </button>
        </div>
        <div className=" p-2 border-2 border-solid m-3 hidden md:block">
          EMI
        </div>
      </div>
    </div>
  );
};

export default RightAdds;
