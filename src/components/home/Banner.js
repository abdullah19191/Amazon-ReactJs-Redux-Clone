import React from "react";
import Carousel from "react-material-ui-carousel";

function Banner() {
  const data = [
    "https://static.vecteezy.com/system/resources/previews/002/478/302/original/sale-electronics-banner-background-free-vector.jpg",
    "https://static-01.daraz.pk/other/shop/c3d321f41fb5f6e50effb23bbe2189be.jpeg_2200x2200q80.jpg_.webp",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/2bbcfa99737217.5ef9be3dbb9a9.jpg",
    "https://i0.wp.com/www.fman.org.np/wp-content/uploads/2022/08/banner-11.jpg?fit=1600%2C660&ssl=1",
  ];
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          borderRadius: 0,
        },
      }}
    >
      {data.map((img, i) => {
        return (
          <>
            <img src={img} alt="" className="w-[100vw] h-[380px] mt-2" />
          </>
        );
      })}
    </Carousel>
  );
}

export default Banner;
