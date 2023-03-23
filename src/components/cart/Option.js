import React from "react";
import Rating from "material-ui-rating";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../redux/slice/cartSlice";

const Option = (props) => {
    const dispatch = useDispatch();

  return (
    <div className="">
      <div className="flex md:space-x-5 space-x-2 items-center ">
        <select
          name=""
          id=""
          className="border-2 rounded-2xl bg-slate-100 p-2 pr-4"
        >
          <option value={props.quantity}>{props.quantity}</option>
        </select>
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
