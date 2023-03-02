import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <footer>
      <div className=" bg-slate-800 cursor-pointer lg:flex grid grid-cols-2 gap-4 relative top-2 justify-evenly items-center p-10">
        <div className="">
          <h3 className=" lg:font-bold font-semibold lg:text-lg text:md  text-white font-sans mb-2">
            Get To Know Us
          </h3>
          <p className="text-sm text-white text-opacity-90 mb-1">About Us</p>
          <p className="text-sm text-white text-opacity-90 mb-1">Careers</p>
          <p className="text-sm text-white text-opacity-90 mb-1">
            Press Release
          </p>
          <p className="text-sm text-white text-opacity-90 mb-1">
            Amazon Cares
          </p>
        </div>
        <div className="">
          <h3 className=" lg:font-bold font-semibold lg:text-lg text:md  text-white font-sans  mb-2">
            Connect with Us
          </h3>
          <p className="text-sm text-white text-opacity-90 mb-1">Facebook</p>
          <p className="text-sm text-white text-opacity-90 mb-1">Twitter</p>
          <p className="text-sm text-white text-opacity-90 mb-1">Instagram</p>
          <p className="text-sm text-white text-opacity-90 mb-1">Linkedin</p>
        </div>
        <div className="">
          <h3 className=" lg:font-bold font-semibold lg:text-lg text:md  text-white font-sans  mb-2">
            Make Money with Us
          </h3>
          <p className="text-sm text-white text-opacity-90 mb-1">About Us</p>
          <p className="text-sm text-white text-opacity-90 mb-1">Careers</p>
          <p className="text-sm text-white text-opacity-90 mb-1">
            Press Release
          </p>
          <p className="text-sm text-white text-opacity-90 mb-1">Release</p>
        </div>
        <div className="">
          <h3 className=" lg:font-bold font-semibold lg:text-lg text:md  text-white font-sans  mb-2">
            Give Your Feedback
          </h3>
          <p className="text-sm text-white text-opacity-90 mb-1">Facebook</p>
          <p className="text-sm text-white text-opacity-90 mb-1">Twitter</p>
          <p className="text-sm text-white text-opacity-90 mb-1">Instagram</p>
          <p className="text-sm text-white text-opacity-90 mb-1">
            Amazon Cares
          </p>
        </div>
      </div>
      <div className=" bg-slate-900 items-center justify-center text-center p-4">
        <img
          src=" ./img/amazon_PNG25.png"
          className="mx-auto  lg:h-14  h-8"
          alt=""
        />
        <p className="text-white font-semibold">
          Conditions of Use & Sale &nbsp; &nbsp;&nbsp; Privacy Notice &nbsp;
          &nbsp;&nbsp; Interest-Based Ads &nbsp; &nbsp;&nbsp; © 1996-{year},
          Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
