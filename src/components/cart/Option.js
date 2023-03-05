import React from 'react'
import Rating from "material-ui-rating";

const Option = () => {
  return (
    <div className="">
    <div className='flex md:space-x-5 space-x-2 items-center '>
        <select name="" id="" className='border-2 rounded-2xl bg-slate-100 p-2 pr-4'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <p className='text-blue-400 font-normal'>Delete</p><span>|</span>
        <p className='text-blue-400 font-normal'>Save Or Later</p><span>|</span>
        <p className='text-blue-400 font-normal'>See More like this</p>
    </div>
        <div className="">
        <Rating value={4} max={5} name="size-large"  onChange={(value) => console.log(`Rated with value ${value}`)}/>
        </div>

    </div>
  )
}

export default Option