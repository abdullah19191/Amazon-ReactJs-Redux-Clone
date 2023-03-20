import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from "@mui/material";
import { products } from "./ProductData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/slice/productslice";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Slider({ title }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white lg:py-4 border-2 border-solid my-6 lg:mx-4 shadow-lg lg:rounded border-t-4 border-l-4 border-r-4">
      <div className="flex justify-between py-4 px-2 items-center">
        <h3 className="font-bold lg:text-xl text-md">{title}</h3>
        <Link to="/product/">
        <button  onClick={(e) => dispatch(fetchProducts())} className="bg-blue-500 hover:bg-blue-700 text-white text-sm lg:text-lg font-bold py-2 px-4 rounded">
          View All
        </button>
        </Link>
      </div>
          {" "}
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
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          //deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {products.map((e) => {
            return (
              <div className=" bg-white  my-2  border-1 rounded-xl  hover:border-transparent hover:shadow-xl relative duration-200 gap-4  border-gray-700 z-30 shadow flex flex-col items-center justify-center w-[80%] ">
                <div className="p-1">
                  <img
                    src={e.url}
                    className=" w-52  h-64 object-contain"
                    alt="product item"
                  />
                </div>
                <div className=" lg:text-lg text-ellipsis text-sm mb-2 justify-center text-center font-serif">
                  <p className="text-xl tracking-tight">{e.title.shortTitle.substring(0, 8)}..</p>
                  <p className="text-sm font-normal">
                    {e.tagline.substring(0, 20)}
                  </p>
                  <p className="text-md  font-semibold">{e.discount}</p>
                </div>
                <div class=" mb-3 flex items-center justify-between">
                  <p>
                    <span class="text-3xl font-bold ">${e.price.cost}</span>
                    <span class="text-sm  line-through">${e.price.mrp}</span>
                  </p>
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
