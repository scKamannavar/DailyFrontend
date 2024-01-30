import React from 'react'
import collage11 from '../assets/images/collage11.jpg'

const ImageCollageContainer1 = () => {
  return (
    <div className='relative h-[58vw] md:mb-[12.333vh] mb-[4.333vh]'>
        <div className='bg-yellow-100 absolute h-[58vw] w-[57vw] left-[41vw]'>

        </div>
        <div className='flex absolute h-full items-center '>
          <div className=' w-[41vw] h-[41vw] ml-[8.66vw]  '>
            <img src={collage11} alt="" className='w-full h-full object-cover' />
          </div>
          <div className=' w-[33vw] h-[25vw] ml-[8.66vw] '>
            <img src={collage11} alt="" className='w-full h-full object-cover' />
          </div>
        </div>
        
    </div>
  )
}

export default ImageCollageContainer1
