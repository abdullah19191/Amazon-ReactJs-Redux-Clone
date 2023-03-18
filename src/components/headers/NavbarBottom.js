import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarNav from "./SidebarNav";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavbarBottom = () => {
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  });
  return (
    <div className="w-full bg-[#131139] h-9 text-white px-4 flex items-center">
      <ul className="flex items-center tracking-wide text-sm gap-4">
        <li
          className="headerHover flex gap-1 items-center"
          onClick={() => setSidebar(true)}
        >
          <MenuIcon />
          All
        </li>
        <Link to="/product/">
          <li className="headerHover">Today's Deal</li>
        </Link>
        <li className="headerHover">Customer Service</li>
        <li className="headerHover">Gift Cards</li>
        <li className="headerHover">Sell</li>
        <li className="headerHover">Register</li>
      </ul>
      {sidebar && (
        <div className=" w-full h-screen text-black fixed top-0 left-0 bg-[#131921] bg-opacity-50 z-50">
          <div className=" w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" bg-white w-[350px] h-full border border-black"
            >
              <div className=" w-full bg-[#131921] text-white py-4 px-6 flex items-center gap-4 text-lg ">
                <AccountCircleIcon />
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
                className=" top-0 left-[356px] w-10 h-10 absolute text-black flex items-center justify-center
             bg-gray-200 hover:bg-red-600  hover:text-white border duration-300
            "
              >
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
