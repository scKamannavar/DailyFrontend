import React from 'react'
import jobsImage from '../assets/images/jobs.jpg'

const LatestJobs = () => {
  const text = 'See Latest Jobs >'
  return (
    <div className='flex h-full justify-center md:mb-[12.333vh] mb-[4.333vh]'>
      <div className='flex flex-col lg:flex-row lg:w-[77vw] w-[77vw]'>
        <div className='flex lg:flex-1 bg-red-500 h-[41vw] lg:w-[77vw] '>
            <img src={jobsImage} alt="" className='h-full w-full object-cover' />
        </div>
        <div className='flex lg:flex-1 flex-col bg-blue-200 h-full md:max-h-[41vw]   p-[8vw] text-xl lg:text-2xl font-DidactGothic font-bold justify-center items-center'>
            <h1>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</h1>
            <h1 className='mt-6 text-blue-800 cursor-pointer self-start'>{text} </h1>
        </div>
      </div>
    </div>
  )
}

export default LatestJobs
