import React, { useState } from "react";
import Validation from "./Validation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

const Signin = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [logdata, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setError] = useState({});
  const [firebaseErr, setFirebaseErr] = useState("");
  const [loading, setLoading] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const addData = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (logdata.email && logdata.password) {
      setLoading(true);
      signInWithEmailAndPassword(auth, logdata.email, logdata.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setLoading(false);
          setSuccessMsg("Logged in Successfully! Welcome back");
          setTimeout(() => {
            navigate("/");
          }, 2000);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setLoading(false);
            setError("Invalid Email")
          } if (errorCode.includes("auth/wrong-password")) {
            setLoading(false);
            setError("Wrong Password! Try again")
          }
          console.log("Something is up, Try with correct Credentials");
          setFirebaseErr("Please Re-Enter Credentials!");
          setData({email:"",password:""})
        });
    }
    setError(Validation(logdata));
  };

  return (
    <section className=" w-[100%] relative  h-full bg-white">
      <div className="">
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
            className=" border-solid border-2 px-10 py-30 bg-white shadow-lg mt-[-50px] rounded-xl lg:w-3/12"
          >
            <h1 className="  font-sans text-xl my-4 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign-In
            </h1>
            <div className="flex flex-col lg:w-11/12 w-[110%]">
              <label htmlFor="email" className="mb-1 font-medium text-lg">
                Email
              </label>
              <input
                type="text"
                className="relative mb-2 p-2 border-2 outline-none rounded-md focus:border-orange-500"
                name="email"
                onChange={addData}
                value={logdata.email}
                placeholder="Email address"
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
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
                value={logdata.password}
                placeholder="At least 6 char"
                className="relative mb-2  p-2  border-2  outline-none rounded-md focus:border-orange-500"
              ></input>
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
            </div>
            <button className=" inline-block font-medium bg-gradient-to-r from-[#f7dfa5] to-[#f0c14b]  p-2 rounded-sm mt-2 cursor-pointer border-2 border-[#9c7e31] border-solid mb-7 h-10 w-full   text-[#111] bg-[#f3d078] outline-none ">
              Continue
            </button>
          </form>
          <p className="mt-2 mb-2 pt-1 text-md font-semibold space-x-3">
            New To Amazon?
          </p>
          <NavLink to="/register">
            <button className="text-lg w-[300px] transition  bg-gradient-to-b h=[29px] hover:bg-slate-400 border-gray-700 border-2 border-solid rounded-[3.375rem] shadow from-[#f7f8fa] p-2 to-[#e7e9ec]">
              Register
            </button>
          </NavLink>
        </div>
        <div className="p-2">
              {firebaseErr && (
                <Alert severity="error">
                  <strong className="text-center">{firebaseErr}</strong>
                </Alert>
              )}
            </div>
      </div>
    </section>
  );
};

export default Signin;
