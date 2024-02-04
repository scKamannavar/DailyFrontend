import React from 'react'

const SingleVideoContainer = () => {
  return (
    <div className='flex flex-col f-full justify-center items-center md:mb-[12.333vh] mb-[4.333vh]'>
      <div className='m-auto'>
        {/* <iframe className='w-[66vw] h-[38vw]' src="https://www.youtube.com/embed/MAvtwbw8o1o?si=S64nIP76vKzNtudX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
        <iframe className='w-[66vw] h-[38vw]' width="560" height="315" src="https://www.youtube.com/embed/bHN8-60HOy4?si=-PoBLD6dO9mByIly" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <h4>Why Ableton - Juanpe Bolivar</h4>
    </div>
  )
}

export default SingleVideoContainer
