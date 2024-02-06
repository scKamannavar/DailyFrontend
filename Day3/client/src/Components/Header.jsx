import React from 'react'
import logo from '../assets/logo/logo.png'
const Header = () => {
  return (
    <div className='flex lg:hidden snap-start snap-normal pl-4 pt-4' >
      <img src={logo} className='w-[260px]' alt="" />
    </div>
  )
}

export default Header
