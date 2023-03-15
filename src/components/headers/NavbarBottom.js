import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarNav from "./SidebarNav";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


const NavbarBottom = () => {
  const [sidebar, setSidebar] = useState(false);
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
        <li className="headerHover">Today's Deal</li>
        <li className="headerHover">Customer Service</li>
        <li className="headerHover">Gift Cards</li>
        <li className="headerHover">Sell</li>
        <li className="headerHover">Register</li>
      </ul>
      {sidebar && (
        <div className=" w-full h-screen text-black fixed top-0 left-0 bg-[#131921] bg-opacity-50 z-50">
          <div className=" w-full h-full relative">
          <div className=" bg-white w-[350px] h-full border border-black">
          <div className=" w-full bg-[#131921] text-white py-2 px-6 flex items-center gap-4">
                <AccountCircleIcon />
                <h1 className=" font-bold text-md tracking-wide">
                  Hellow, Sign In
                </h1>
              </div>
            <SidebarNav/>
            <SidebarNav/>
            <SidebarNav/>
            <SidebarNav/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarBottom;
