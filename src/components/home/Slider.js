import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from "@mui/material";
import { products } from "./ProductData";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 234 },
    items: 1,
  },
};
function Slider({title}) {
  return (
    <div className="bg-white lg:py-4 border-2 border-solid my-6 lg:mx-4 shadow-lg lg:rounded border-t-4 border-l-4 border-r-4">
      <div className="flex justify-between py-4 px-2 items-center">
        <h3 className="font-bold lg:text-xl text-md">{title}</h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm lg:text-lg font-bold py-2 px-4 rounded">
          {" "}
          View All{" "}
        </button>
      </div>
      <Divider />
      <div className="md:mt-8 mt-6">

      <Carousel
        centerMode={true}
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        //customTransition="all .5"
        //transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile","desktop"]} 
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((e) => {
          return (
            <div className=" h-full w-full">
              <div className=" items-center">
                <img
                  src={e.url}
                  className=" w-[66%] h-56 md:w-[40%] md:h-32"
                  alt="product item"
                />
              </div>
              <div className=" py-2  lg:text-lg text-ellipsis text-sm mb-2 justify-center text-center font-serif">
                <p>{e.title.shortTitle}</p>
                <p>{e.discount}</p>
                <p>{e.tagline}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
      </div>
    </div>
  );
}

export default Slider;
