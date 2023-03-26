import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Validation from "./Validation";
import Alert from "@mui/material/Alert";
import { motion } from "framer-motion";
import { RotatingLines } from "react-loader-spinner";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Signup = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [updata, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  const [errors, setError] = useState({});
  const [firebaseErr, setFirebaseErr] = useState("");
  const [loading, setLoading] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(Validation(updata));
  
      setFirebaseErr("");
    setLoading(true);
    createUserWithEmailAndPassword(auth, updata.email, updata.password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: updata.name,
          photoURL:
            "https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg",
        });
        // Signed in
        const user = userCredential.user;
        setLoading(false);
        setSuccessMsg("Account Created Successfully");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
        console.log("Firebase ho: ", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log("Firebase ma error ha bhai: ", error);
        if (errorCode.includes("auth/email-already-in-use")) {
          setLoading(false);
          setFirebaseErr("Email Already in use,Try anoher one");
        }
        // ..
      });
    
  };

  console.log(updata);
  const addData = (e) => {
    e.preventDefault();
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
          <form
            onSubmit={handleSubmit}
            className=" border-solid border-2 px-10 py-30 bg-white shadow-lg mt-[-60px] rounded-xl lg:w-3/12"
          >
            <h1 className="  font-sans text-xl my-4 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign-Up
            </h1>
            <div className="flex flex-col lg:w-11/12 w-[110%]">
              <label className="mb-1 font-medium text-lg">Your Name</label>
              <input
                type="text"
                onChange={addData}
                className="relative mb-2 p-2 border-2 outline-none rounded-md focus:border-orange-500"
                name="name"
                placeholder="Enter Name"
              />
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name}</span>
              )}
            </div>
            <div className="flex flex-col lg:w-11/12 w-[110%]">
              <label htmlFor="email" className="mb-1 font-medium text-lg">
                Email
              </label>
              <input
                type="text"
                onChange={addData}
                className="relative mb-2 p-2 border-2 outline-none rounded-md focus:border-orange-500"
                name="email"
                placeholder="Email address"
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </div>
            <div className="flex flex-col lg:w-11/12 w-[110%]">
              <label htmlFor="email" className="mb-1 font-medium text-lg">
                Mobile no
              </label>
              <input
                type="text"
                onChange={addData}
                className="relative mb-2 p-2 border-2 outline-none rounded-md focus:border-orange-500"
                name="mobile"
                placeholder="Enter Mobile no"
              />
              {errors.mobile && (
                <span style={{ color: "red" }}>{errors.mobile}</span>
              )}
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
                className="relative mb-2  p-2  border-2  outline-none rounded-md focus:border-orange-500"
              ></input>
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
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
                className="relative mb-2  p-2  border-2  outline-none rounded-md focus:border-orange-500"
              ></input>
              {errors.cpassword && (
                <span style={{ color: "red" }}>{errors.cpassword}</span>
              )}
            </div>
            <button className=" inline-block font-medium bg-gradient-to-r from-[#f7dfa5] to-[#f0c14b]  p-2 rounded-sm mt-2 cursor-pointer border-2 border-[#9c7e31] border-solid mb-4 h-10 w-full   text-[#111] bg-[#f3d078] outline-none ">
              Continue
            </button>
            {loading && (
              <div className=" flex justify-center">
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="96"
                  visible={true}
                />
              </div>
            )}
            {successMsg && (
              <div className="">
                <motion.p
                  initial={{ x: -500, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className=" text-green-600 font-bold text-md p-2 border-2 font-sans border-green-500"
                >
                  {successMsg}
                </motion.p>
              </div>
            )}
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
            <div className="p-2">
              {firebaseErr && (
                <Alert severity="error">
                  <strong>{firebaseErr}</strong>
                </Alert>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
