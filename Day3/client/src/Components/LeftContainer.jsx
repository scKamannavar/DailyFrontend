import React from 'react'
import logo from '../assets/logo/logo.png'

const LeftContainer = () => {
  return (
    <div className={`hidden lg:flex flex-col absolute pointer-events-none text-left left-[34px] top-[16px] h-[96%] w-[25%]  justify-between text-[18px]] font-sans font-semibold `} >
        <img src={logo} className='w-[260px] h-auto' alt="" />
     <div className='flex flex-col'>
         <p className='pointer-events-auto text-[18px] font-bold leading-[25px]'>Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.</p>
        <h1 className='pb-4 pt-2 text-sm'>© 2024 Published by Büro Milk</h1>
        <h1 className='text-[18px]  font-bold leading-[25px]'>Privacy Policy</h1>
     </div>
    </div>
  )
}

export default LeftContainer
