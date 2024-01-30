import React from 'react'
import collage11 from '../assets/images/collage11.jpg'

const ImageCollageContainer3 = () => {
  return (
    <div className='relative h-[58vw] md:mb-[12.333vh] mb-[4.333vh]'>
      <div className='bg-purple-300 absolute h-[58vw] w-[66vw] left-[16vw]'>

      </div>
      <div className='flex absolute h-full items-center '>
      <div className=' w-[33vw] h-[25vw] ml-[8.66vw] '>
          <img src={collage11} alt="" className='w-full h-full object-cover' />
        </div>
        <div className=' w-[41vw] h-[41vw] ml-[16.66vw]  '>
          <img src={collage11} alt="" className='w-full h-full object-cover' />
        </div>

      </div>  
    </div>
  )
}

export default ImageCollageContainer3
