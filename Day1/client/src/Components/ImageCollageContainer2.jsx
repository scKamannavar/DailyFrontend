import React from 'react'
import collage11 from '../assets/images/collage11.jpg'

const ImageCollageContainer2 = () => {
  return (
    <div className='relative h-[80vw] md:mb-[12.333vh] mb-[4.333vh]'>
        <div className='bg-green-200 absolute h-full w-[57vw] right-[41vw]'>

        </div>
        <div className='flex absolute h-full items-center '>
          <div className='flex flex-col'>
            <div className=' w-[33vw] h-[25vw] ml-[8.66vw] '>
              <img src={collage11} alt="" className='w-full h-full object-cover' />
            </div>
            <div className=' w-[33vw] h-[25vw] ml-[8.66vw] mt-[8.3vw]'>
              <img src={collage11} alt="" className='w-full h-full object-cover' />
            </div>
          </div>
          <div className=' w-[41vw] h-[41vw] ml-[8.66vw]  '>
            <img src={collage11} alt="" className='w-full h-full object-cover' />
          </div>
        </div>
        
    </div>
  )
}

export default ImageCollageContainer2
