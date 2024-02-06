import React from 'react'
import SingleCard from './SingleCard'
import data from '../data/bodyData'
const Body = () => {
  return (
    <div className='flex justify-center px-2 md:px-[calc(15px*2)]'>
      <div className='flex max-w-[1600px] w-[100%] md:w-[80%] md:my-[8rem] my-[4rem]'>
        <div className='flex flex-col md:flex-row justify-center w-full flex-wrap'>
          {
            data.map((data,index)=>
              <SingleCard key={index} data={data}></SingleCard>
            )
          }
            {/* <SingleCard></SingleCard>
            <SingleCard></SingleCard>
            <SingleCard></SingleCard>
            <SingleCard></SingleCard> */}
        </div> 
      </div>
    </div>
  )
}

export default Body
