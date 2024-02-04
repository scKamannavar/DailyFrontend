import React from 'react'
import abletonSVG from '../assets/images/ableton.svg'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import whatsapp from '../assets/icons/whatsapp.svg'
import youtube from '../assets/icons/youtube.svg'

const Footer = () => {
  return (
    <div className='flex flex-col p-[8.33vw] border-t-2  border-gray-300'>
      <div className='pb-[4vw]'>
        <img src={abletonSVG} className='w-[122px] lg:w-[188px]' alt="" />
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='pb-[4.33vw] lg:order-3 lg:pl-20'>
          <h1 className='font-bold'>SignUp to our News Letter</h1>
          <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
          <div className='flex flex-row mt-[1em]'>
            <div className='flex flex-1'>
              <input className='w-full bg-gray-200 p-2' type="text" placeholder='Enter Email Address' name="" id="" />
            </div>
            <button className='bg-blue-700 px-4 text-white'>Sign up</button>
          </div>
        </div>
        <div className='pb-[4vw] lg:order-1'>
          <h1>Register Live or Push {'>'} </h1>
          <h1>About Ableton {'>'} </h1>
          <h1>Jobs {'>'} </h1>
          <div className='flex pt-4'>
              <img src={facebook} className='w-10 mr-4' alt="" />
              <img src={instagram} className='w-10 mr-4' alt="" />
              <img src={whatsapp} className='w-10 mr-4' alt="" />
              <img src={youtube} className='w-10 mr-4' alt="" />
          </div>
        </div>
        <div className='pb-[4vw] lg:order-2 lg:pl-20'>
          <h1 className='font-bold'>Education</h1>
          <h2>Offers for students and teachers {'>'} </h2>
          <h2>Ableton for the Classroom {'>'} </h2>
          <h2>Ableton for Colleges and Universities {'>'} </h2>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row '>
        <div className='pb-[4vw]'>
          <h1 className='font-bold'>Community</h1>
          <h2>Find Ableton User Groups {'>'} </h2>
          <h2>Find Certified Training {'>'} </h2>
          <h2>Become a Certified Trainer {'>'} </h2>
        </div>
        <div className='pb-[4vw] lg:pl-20'>
          <h1 className='font-bold'>Language and Location</h1>
          <div className='mt-3'>
          <select name="" id="" className='w-24 bg-gray-200 mr-1 px-2 py-1'>
              <option value="English">English</option>
            </select>
            <select name="" id="" className='w-40 bg-gray-200 px-2 py-1'>
              <option value="india">india</option>
            </select>
            
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex-1'>
          <h1>Contact Us</h1>
          <h1>Press Resources</h1>
          <h1>Legal Info</h1>
          <h1>Privacy Policy</h1>
          <h1>Cookie Settings</h1>
          <h1>Imprint</h1>
        </div>
        <div className='flex mt-[8vw]'>
          <h1>Made in Berlin</h1>
          <div className='ml-2'>
          <svg  aria-hidden="true" focusable="false" class="main-nav__logo__image" xmlns="http://www.w3.org/2000/svg" width="45" height="21" viewBox="0 0 45 21"><path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
