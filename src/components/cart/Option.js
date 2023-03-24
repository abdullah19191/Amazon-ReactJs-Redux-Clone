import React from "react";
import Rating from "material-ui-rating";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  deleteCart,
  incrementQuantity,
} from "../../redux/slice/cartSlice";

const Option = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="flex md:space-x-5 space-x-2 items-center ">
        <div className="border-2 rounded-2xl bg-slate-100 p-2 pr-4 flex  items-center  justify-evenly">
          <p
            className=" cursor-pointer bg-gray-200 px-1 rounded-md duration-300"
            onClick={() => dispatch(incrementQuantity(props.id))}
          >
            {" "}
            +{" "}
          </p>
          <option
            className=" font-mono text-base font-semibold p-2"
            value={props.quantity}
          >
            {props.quantity}
          </option>
          <p
            className=" cursor-pointer bg-gray-200 px-1 rounded-md duration-300 font-mono"
            onClick={() => dispatch(decrementQuantity(props.id))}
          >
            -
          </p>
        </div>
        <button
          onClick={() => dispatch(deleteCart(props.id))}
          className=" bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-600 duration-300"
        >
          Delete
        </button>
      </div>
      <div className="">
        <Rating
          value={props.rating}
          max={5}
          name="size-large"
          onChange={(value) => console.log(`Rated with value ${value}`)}
        />
      </div>
    </div>
  );
};

export default Option;
