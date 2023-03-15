import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SidebarNav = () => {
  return (
    <div>
              <div className=" py-3 border-b-[1px] border-b-gray-300 ">
                <h3 className=" text-lg  font-bold mb-1 px-6">
                  Digital Content & Devices
                </h3>
                <ul className='text-md'>
                    <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2">Amazon Music<span><KeyboardArrowRightIcon/></span></li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2">Amazon Music<span><KeyboardArrowRightIcon/></span></li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2">Amazon Music<span><KeyboardArrowRightIcon/></span></li>
                </ul>
              </div>
            </div>
  )
}

export default SidebarNav