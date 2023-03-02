import React from "react";
import Banner from "./Banner";
import Slider from "./Slider";

function MainComponent() {
  return (
    <div>
      <div className="banner_part">
        <Banner />
        <div className="justify-between flex md:flex-row flex-col">
          <div className=" lg:w-[80%]">
            <Slider />
          </div>
          <div className="lg:flex hidden py-4 my-6  border-2 border-solid shadow-lg bg-slate-50  w-[20%] flex-col justify-evenly items-center ">
                  <h4 className=" text-xl font-bold">Festival latest launches</h4>
                  <img  className="p-4 h-[90%]" src="https://i0.wp.com/www.fman.org.np/wp-content/uploads/2022/08/banner-11.jpg?fit=1600%2C660&ssl=1" alt="" />
                  <a href="" className="font-serif">See More</a>
          </div>
        </div>
        <Slider />
        <Slider />
        <Slider />
        <Slider />
      </div>
    </div>
  );
}

export default MainComponent;
