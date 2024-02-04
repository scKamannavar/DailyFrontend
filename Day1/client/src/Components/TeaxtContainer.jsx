import React from 'react'

const TeaxtContainer = ({heading, description, npara}) => {
  return (
    <div className='lg:text-2xl lg:w-[45vw] md:w-[66vw] w-[80vw] mx-auto font-futura mb-20 leading-loose '>
      <h1 className='font-bold mb-6'>
        {heading}
      </h1>
      <p className='text-sm lg:text-xl'>
        {description}
      </p>
      {npara  && 
        <p className='text-sm lg:text-xl mt-2'>
        {npara}
      </p>
      }
      
    </div>
  )
}

export default TeaxtContainer
