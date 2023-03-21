import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [updata, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  console.log(updata);
  const addData = (e) => {
    const { name, value } = e.target;

    setData(() => {
      return {
        ...updata,
        [name]: value,
      };
    });
    console.log(e.target.value);
  };
  return (
    <section className=" w-[100%] p-12 relative bg-white lg:p-0  h-auto">
      <div className="lg:mb-2">
        <div className="">
          <img
            src="./img/blacklogoamazon.png"
            alt=""
            className="mx-auto object-contain h-48 w-96"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <form className=" border-solid border-2 px-10 py-30 bg-white shadow-lg mt-[-60px] rounded-xl lg:w-3/12">
            <h1 className="  font-sans text-xl my-4 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign-Up
            </h1>
            <div className="flex flex-col lg:w-11/12 w-[110%]">
              <label className="mb-1 font-medium text-lg">Your Name</label>
              <input
                type="text"
                onChange={addData}
                className="relative mb-2 p-2 border-2 outline-none rounded-md"
                name="name"
                placeholder="Enter Name"
              />
            </div>
            <div className="flex flex-col lg:w-11/12 w-[110%]">
              <label htmlFor="email" className="mb-1 font-medium text-lg">
                Email
              </label>
              <input
                type="text"
                onChange={addData}
                className="relative mb-2 p-2 border-2 outline-none rounded-md"
                name="email"
                placeholder="Email address"
              />
            </div>
            <div className="flex flex-col lg:w-11/12 w-[110%]">
              <label htmlFor="email" className="mb-1 font-medium text-lg">
                Mobile no
              </label>
              <input
                type="text"
                onChange={addData}
                className="relative mb-2 p-2 border-2 outline-none rounded-md"
                name="mobile"
                placeholder="Enter Mobile no"
              />
            </div>
            <div className="flex flex-col lg:w-11/12 w-[110%]">
              <label htmlFor="password" className="mb-1 font-medium text-md">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={addData}
                placeholder="At least 6 char"
                className="relative mb-2  p-2  border-2  outline-none rounded-md"
              ></input>
            </div>
            <div className="flex flex-col lg:w-11/12 w-[110%]">
              <label htmlFor="password" className="mb-1 font-medium text-md">
                Confirm-Password
              </label>
              <input
                type="password"
                name="cpassword"
                onChange={addData}
                placeholder="Re-type Password"
                className="relative mb-2  p-2  border-2  outline-none rounded-md"
              ></input>
            </div>
            <button className=" inline-block font-medium bg-gradient-to-r from-[#f7dfa5] to-[#f0c14b]  p-2 rounded-sm mt-2 cursor-pointer border-2 border-[#9c7e31] border-solid mb-4 h-10 w-full   text-[#111] bg-[#f3d078] outline-none ">
              Continue
            </button>
            <div className="flex">
              <p className="mt-2 mb-2 pt-1 text-md font-semibold space-x-3">
                Already have an account?
              </p>
              <NavLink
                to="/login"
                className="mx-2 mt-2 mb-2 pt-1 text-md font-semibold space-x-3 text-blue-600"
              >
                SignIn
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
