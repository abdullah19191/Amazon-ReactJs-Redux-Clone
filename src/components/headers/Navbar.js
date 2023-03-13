import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Avatar from '@mui/material/Avatar';
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavbarBottom from "./NavbarBottom";
function Navbar() {
  return (
    <div className="">
      <div className="w-full bg-[#131921] text-white px-4 py-3 flex items-center">
        <div className="headerHover ml-2">
          <Link to="/">
            <img
              src="./img/amazon_PNG25.png"
              alt="logo"
              className="w-32 mt-2"
            />
          </Link>
        </div>
        <div className="headerHover flex items-center">
          <span>
            <LocationOnIcon />
          </span>
          <div className="flex flex-col items-start justify-center mr-3 py-1">
            <p className=" text-xs font-light text-[#fff] ">Add your</p>
            <p className=" font-semibold -mt-1 text-sm">Location</p>
          </div>
        </div>
        <div className=" rounded-md flex flex-grow h-10 mx-3">
          <span className=" bg-gray-200 duration-200 font-medium hover:bg-gray-300 flex items-center text-sm text-black justify-center w-14 h-full rounded-tl-md rounded-bl-md">
            All{" "}
            <span>
              <ArrowDropDownIcon />
            </span>
          </span>
          <input
            type="text"
            className="flex flex-grow outline-none border-1  text-base h-full text-blue-900 px-2"
          />
          <span className=" bg-[#febd69] items-center flex h-full w-12 justify-center text-blue-900 hover:bg-orange-400 duration-300 rounded-tr-md rounded-br-md">
            {" "}
            <SearchIcon />
          </span>
        </div>
        <div className="headerHover flex flex-col items-start justify-center mr-3 py-1">
          <Link to="/login">
            <p className=" text-xs font-light text-[#fff] ">Hi, Sign in</p>
            <p className=" font-semibold -mt-1 text-sm">
              Accounts & Lists{" "}
              <span>
                <ArrowDropDownIcon />
              </span>
            </p>
            {/* <a href="#lll" className="text-[#fff] font-medium mr-2 border-2 border-[#131921] p-[8px] hover:border-white hover:border-current rounded-sm" >Sign in</a> */}
          </Link>
        </div>
        <div className="headerHover flex flex-col items-start justify-center mr-3 py-1">
          <p className=" text-xs font-light text-[#fff] ">Return</p>
          <p className=" font-semibold -mt-1 text-sm">& Orders</p>
        </div>
        <div className="cart_btn flex ml-5 mt-[2px] mr-[4px] items-center p-2 hover:text-lg justify-between border-transparent hover:border-white  border-2">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon className="text-[#fff] " />
          </Badge>
          <p className="text-[#fff] font-medium text-sm mr-2">Cart</p>
        </div>
      </div>
      <NavbarBottom />
    </div>

    // <header className="bg-[#131921] w-[100%] h-[60px] fixed z-10 shadow">
    //   <nav className="m-auto flex justify-around items-center ">
    //     <div className="Left flex justify-around items-center lg:gap-60">
    //       <div className="navlogo mt-2 cursor-pointer container flex flex-wrap items-center justify-between">
    //       <Link
    //         to="/">
    //         <img src="./img/amazon_PNG25.png" alt="logo" width="120px" />
    //       </Link>
    //       </div>
    //       <div className="nav_searchbar items-center justify-center hidden lg:flex " id="navbar-dropdown">
    //         <input type="search" className="w-full md:w-[400px] h-[40px] relative flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#febd29] focus:outline-none" placeholder="Search Your Products" aria-label="Search" aria-describedby="button-addon2" />
    //         <div className="search_icon">
    //           <button class="btn  px-4 py-3 bg-[#febd69] text-black font-medium text-xs leading-tight uppercase  shadow-md  hover:shadow-lg   focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    //               <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    // <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
    //   <span class="sr-only">Open main menu</span>
    //   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    // </button>
    //     <div className="Right flex justify-center items-center">
    //       <div className="nav_btn">
    //       <Link to="/login">
    //         <div className="">
    //         <a href="#lll" className="text-[#fff] font-medium mr-2 border-2 border-[#131921] p-[8px] hover:border-white hover:border-current rounded-sm" >Sign in</a>
    //         </div>
    //       </Link>
    //       </div>
    //       <div className="cart_btn flex ml-5 mt-[2px] mr-[4px] items-center p-2 hover:text-lg justify-between border-transparent hover:border-white  border-2">
    //         <Badge badgeContent={4} color="primary">
    //           < ShoppingCartIcon className="text-[#fff] " />
    //         </Badge>
    //         <p className="text-[#fff] font-medium mr-2">Cart</p>
    //       </div>
    //       <Avatar/>
    //     </div>
    //   </nav>
    // </header>
  );
}

export default Navbar;
