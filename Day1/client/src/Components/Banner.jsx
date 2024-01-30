import React from 'react'
import image from '../assets/images/banner.jpg'
const Banner = () => {
  return (
        <div className='flex md:mx-[12.333vh] md:mb-[12.333vh] mx-[4.333vh] mb-[4.333vh] lg:mx-[20.333vh] lg:mb-[20.333vh]  bg-red-400'>
            <img src={image} className=' w-full object-cover h-[82vh]' alt="" />
        </div>

  )
}

export default Banner
