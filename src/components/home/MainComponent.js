import React from "react";
import Banner from "./Banner";
import Slider from "./Slider";

function MainComponent() {
  return (
    <div>
      <div className="banner_part">
        <Banner />
        <div className="justify-between flex md:flex-row flex-col relative -top-20 z-50">
          <div className=" lg:w-[81%] ">
            <Slider title="Deal of the day" />
          </div>
          <div className="lg:flex hidden py-4 my-6  border-2 border-solid shadow-lg bg-slate-50  w-[25%] flex-col justify-evenly items-center h-auto ">
            <h4 className=" text-xl font-bold">Festival latest launches</h4>
            <img
              className="p-4 h-[70%]"
              src="https://i0.wp.com/www.fman.org.np/wp-content/uploads/2022/08/banner-11.jpg?fit=1600%2C660&ssl=1"
              alt=""
            />
            <a href="lol" className="font-serif">
              See More
            </a>
          </div>
        </div>
        <Slider title="Today's Deal" />
        <div className="w-[80%] block mt-4 mx-auto">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2bbcfa99737217.5ef9be3dbb9a9.jpg"
            className=""
            alt=""
          />
        </div>
        <Slider title="Best Seller" />
        <Slider title="Upto 80% off" />
        {/* <Slider /> */}
      </div>
    </div>
  );
}

export default MainComponent;
