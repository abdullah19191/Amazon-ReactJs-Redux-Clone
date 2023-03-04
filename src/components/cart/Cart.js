import { Divider } from '@mui/material'
import React from 'react'
import Option from './Option'

const cart = () => {
  return (
    <div className='w-full h-auto  md:min-h-[100vh] relative top-16'>
        <div className="flex mx-auto my-0 px-5 py-10 justify-around">
              <div className="bg-white flex-[.7] px-5 py-3 border-1 rounded-md">
                <h1 className='font-bold text-3xl'>Shopping Cart</h1>
                <h5 className='font-semibod text-1xl text-blue-700 my-3'>Select All items</h5>
                <Divider/>
                <div className="flex py-4 pr-[5px] pl-[20px]">
                    <div className="">
                        <img src="https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70" alt="" 
                        className='w-[80%]'
                        />
                    </div>
                    <div className="">
                        <h3 className='font-[600] text-lg'>Molife Sense 500 Smartwatch  (Black Strap, Freesize)<span className=' ml-4 font-extrabold text-xl' >$786.88</span></h3>
                       <h3 className='font-[600] text-lg'>Smart Watches</h3>
                     <p className='mt-2 mb-2 text-[#c45500] text-md font-[500]'>Usually dispatched in 8 days</p>
                     <p className=' mb-4 text-md font-[500]'>Eligible for free Shipping</p>
                     <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" className=' cursor-pointer w-[20%] mb-3 '/>
                     <div className="">
                        <Option/>
                     </div>
                    </div>
                </div>
                     <Divider/>
                     <div className=" flex justify-end p-2">
                        <h3 className='font-semibold text-2xl '>Subtotal(1 items):<span className='font-[700]'>$786.88</span></h3>
                     </div>
              </div>
              <div className="bg-white flex-[.2] border-1 rounded-md mr-[-10px] py-0 px-12">
                <h1>right</h1>
              </div>
        </div>
    </div>
  )
}

export default cart