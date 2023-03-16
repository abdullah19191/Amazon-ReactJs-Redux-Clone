import React from "react";
import Carousel from "react-material-ui-carousel";


function Banner() {
  return (
    <div className="w-full h-auto -z-50">
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={false}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          borderRadius: 0,
          marginBottom:4,
        },
      }}
    >
        <img src= './assets/bannerImgFive.jpg' alt="" className=" object-cover" />
        <img src= './assets/bannerImgFour.jpg' alt="" className="object-cover" />
        <img src= './assets/bannerImgThree.jpg' alt="" className=" object-cover" />
        <img src= './assets/bannerImgTwo.jpg' alt="" className="object-cover" />
        <img src= './assets/bannerImgOne.jpg' alt="" className="object-cover" />
      {/* {data.map((img, i) => {
        return (
          <>
            <img src={img} alt="" className="w-[100vw] h-[380px] mt-2" />
          </>
        );
      })} */}
    </Carousel>
    </div>
  );
}

export default Banner;
