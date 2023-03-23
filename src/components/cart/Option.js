import React from "react";
import Rating from "material-ui-rating";

const Option = (props) => {
  console.log("Abaaaaaaaaaaay ma props:  ",props.rating.rate)


  return (
    <div className="">

      <div className="flex md:space-x-5 space-x-2 items-center ">
        <select
          name=""
          id=""
          className="border-2 rounded-2xl bg-slate-100 p-2 pr-4"
        >
          <option value="1">{props.quantity}</option>
        </select>
        <button className=" bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-600 duration-300">
          Delete
        </button>
        {/* <span>|</span>
        <p className="text-blue-400 md:font-normal text-sm lg:text-lg">
          Save Or Later
        </p>
        <span>|</span>
        <p className="text-blue-400 md:font-normal text-sm lg:text-lg">
          See More like this
        </p> */}
      </div>
      <div className="">
        <Rating
          value={4}
          max={5}
          name="size-large"
          onChange={(value) => console.log(`Rated with value ${value}`)}
        />
      </div>
    </div>
  );
};

export default Option;
