import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const NavbarBottom = () => {
  return (
    <div className='w-full bg-[#131139] h-9 text-white px-4 flex items-center'>
      <ul className='flex items-center tracking-wide text-sm gap-4'>
        <li className='headerHover flex gap-1 items-center'><MenuIcon/>All</li>
        <li className='headerHover'>Today's Deal</li>
        <li className='headerHover'>Customer Service</li>
        <li className='headerHover'>Gift Cards</li>
        <li className='headerHover'>Sell</li>
        <li className='headerHover'>Register</li>
      </ul>
    </div>
  )
}

export default NavbarBottom
