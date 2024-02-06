import React from 'react'

const Banner = () => {
  return (
    <div className='flex pt-[180px] pb-[115px] justify-center bg-[#DADBF1]'>
      <div className=' max-w-[720px] w-[90%] text-center'>
        <h1 className='text-[40px] sm:text-[64px] md:text-[80px] mb-[16px]'>
            How can we help?
        </h1>
        <form action="">
            <input className='w-full p-[16px] py-4 border-[1px] rounded-md border-solid border-black shadow-xl text-[24px]' placeholder='Search' type="text" />
        </form>
      </div>
    </div>
  )
}

export default Banner
