import React from 'react'

const Footer = () => {
  return (
    <div className='flex lg:hidden flex-col  md:flex-row md:justify-between p-8 md:p-6 '>
        <div className='flex flex-col justify-center md:w-[33%] text-center  md:text-left'>
            <p className='text-[18px]  font-bold leading-[25px] pb-4'>Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk. </p>
            <h1 className='text-[12px]  pb-10'>© 2024 Published by Büro Milk</h1>
            <h1 className='text-[18px]  font-bold '>Privacy Policy</h1>
        </div>
        <div className='flex justify-center md:items-end'>
            <a className='text-[18px] text-center  font-bold my-[50px] md:my-0' href="">info@backstagetalks.com</a>
        </div>
    </div>
  )
}

export default Footer
