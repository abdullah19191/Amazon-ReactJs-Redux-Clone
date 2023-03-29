import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarNav from "./SidebarNav";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/slice/productslice";
import { useSelector } from "react-redux";

const NavbarBottom = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);
  const userInfo = useSelector((state) => state.cart.userinfo);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  });
  return (
    <div className="w-full bg-[#1E2F3E] h-9 text-white px-4 flex items-center ">
      <ul className="flex items-center tracking-wide text-sm gap-4">
        <li
          className="headerHover flex gap-1 items-center"
          onClick={() => setSidebar(true)}
        >
          <MenuIcon />
          All
        </li>
        <Link to="/product/">
          <li
            onClick={(e) => dispatch(fetchProducts())}
            className="headerHover"
          >
            Today's Deal
          </li>
        </Link>
        <li className="headerHover hidden sm:inline-flex">Customer Service</li>
        <li className="headerHover hidden sm:inline-flex">Gift Cards</li>
        <li className="headerHover hidden sm:inline-flex">Sell</li>
        <li className="headerHover hidden sm:inline-flex">Register</li>
      </ul>
      {sidebar && (
        <div className=" w-full h-screen text-black fixed top-0 left-0 bg-[#131921] bg-opacity-50 z-50">
          <div className=" w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" bg-white sm:w-[350px] w-[80%] h-full border border-black"
            >
              <div className=" w-full bg-[#131921] text-white py-4 px-6 flex items-center gap-4 text-lg ">
                {userInfo ? (<img className=" w-10 h-10 rounded-full" src={userInfo.image} alt=""/>): (
                                  <AccountCircleIcon />
                )}
                <h1 className=" font-bold text-md tracking-wide">
                  Hellow, Sign In
                </h1>
              </div>
              <SidebarNav />
              <SidebarNav />
              <SidebarNav />
              <SidebarNav />
              <span
                onClick={() => setSidebar(false)}
                className=" top-0 left-[82%] sm:left-[356px] w-10 h-10 absolute text-black flex items-center justify-center
             bg-gray-200 hover:bg-red-600  hover:text-white border duration-300">
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarBottom;
