import React from 'react'
import img1 from '../assets/cardImages/img1.png'

const SingleCard = ({data}) => {
  console.log('data', data.image)
  console.log('data inbuilt', img1)
  return (
    <div className='flex w-[100%] md:w-[50%] min-h-[115px] pr-[15px]'>
      <div className='mr-[30px] mt-[50px] '>
        <div className='sm:w-[110%]'>
          <img src={`${data.image}`} alt="" className=' max-w-[75px] max-h-[75px] ' />
        </div>
        
      </div>
      <div className='flex flex-col text-[24px]'>
        <h1 className='font-bold mt-[48px] mb-[16px]'>{data.heading}</h1>
        <p>{data.text}</p>
        <h1 className='text-blue-600 hover:cursor-pointer hover:underline mt-4'>Learn More →</h1>
      </div>
    </div>
  )
}

export default SingleCard
