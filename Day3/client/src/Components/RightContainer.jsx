import React from 'react'

const RightContainer = () => {
  return (
    <div className={`hidden lg:flex flex-col absolute text-right right-[34px] top-[16px] h-[96%]  justify-between text-[18px] font-sans font-semibold `} >
     <h1>
      info@backstagetalks.com
     </h1>
     <div className='flex flex-col text-[18px]'>
         <a href="">issue #7</a>
         <a href="">issue #6</a>
         <a href="">issue #5</a>
         <a href="">issue #4</a>
         <a href="">issue #3</a>
         <a href="">issue #2</a>
         <a href="">issue #1</a>
     </div>
    </div>
  )
}

export default RightContainer
