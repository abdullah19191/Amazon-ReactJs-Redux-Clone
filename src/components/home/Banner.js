import React from "react";
import Carousel from "react-material-ui-carousel";

function Banner() {
  return (
    <div className="w-full h-auto -z-50">
      <Carousel
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsWrapperProps={{
          // Move the buttons to the bottom. Unsetting top here to override default style.
          style: {
            bottom: "0",
            top: "unset",
          },
        }}
        navButtonsAlwaysVisible={false}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            borderRadius: 0,
            marginBottom: 4,
          },
        }}
      >
        <img
          src="./assets/bannerImgFive.jpg"
          alt=""
          className=" object-cover object-center"
        />
        <img
          src="./assets/bannerImgFour.jpg"
          alt=""
          className="object-cover object-center"
        />
        <img
          src="./assets/bannerImgThree.jpg"
          alt=""
          className=" object-cover object-center"
        />
        <img
          src="./assets/bannerImgTwo.jpg"
          alt=""
          className="object-cover object-center"
        />
        <img
          src="./assets/bannerImgOne.jpg"
          alt=""
          className="object-cover object-center"
        />
      </Carousel>
    </div>
  );
}

export default Banner;
