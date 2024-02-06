import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row bg-black  text-white p-4'>
      <div className='flex flex-wrap md:flex-1'>
        <div className='flex flex-col [&>a]:text-[16px] w-[calc(50%)] md:w-[25%] '>
            <h1 className='text-[24px] mt-[48px] mb-[16px]'>Abstract</h1>
            <a href="">Start Trial</a>
            <a href="">Pricing</a>
            <a href="">Download</a>
        </div>
        <div className='flex flex-col [&>a]:text-[16px] w-[calc(50%)] md:w-[25%]'>
            <h1 className='text-[24px] mt-[48px] mb-[16px]'>Resources</h1>
            <a href="">Blog</a>
            <a href="">Help Center</a>
            <a href="">Release Notes</a>
            <a href="">Status</a>
        </div>
        <div className='flex flex-col [&>a]:text-[16px] w-[calc(50%)] md:w-[25%]'>
            <h1 className='text-[24px] mt-[48px] mb-[16px]'>Community</h1>
            <a href="">Twitter</a>
            <a href="">Linkedin</a>
            <a href="">Facebook</a>
            <a href="">Dribble</a>
            <a href="">Podcast</a>
        </div>
        <div className='flex flex-col [&>a]:text-[16px] w-[calc(50%)] md:w-[25%]'>
            <h1 className='text-[24px] mt-[48px] mb-[16px]'>Community</h1>
            <a href="">Company</a>
            <a href="">About Us</a>
            <a href="">Career</a>
            <a href="" className='mb-[30px]'>Legal</a>
            <h1>Contact Us</h1>
            <a href="">info@abstract.com</a>
        </div>
      </div>
      <div className='flex w-fit md:h-[400px] items-end'>
        <div className='flex flex-col text-[20px] '>
            <img src={logo} className='w-[138px] mb-[30px]' alt="" />
            <p>© Copyright 2023</p>
            <p>Abstract Studio Design, Inc.</p>
            <p>All rights reserved</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
