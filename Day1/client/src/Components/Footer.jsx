import React from 'react'
import abletonSVG from '../assets/images/ableton.svg'

const Footer = () => {
  return (
    <div className='flex flex-col p-[8.33vw]'>
      <div className='pb-[4vw]'>
        <img src={abletonSVG} className='w-[122px] lg:w-[188px]' alt="" />
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='pb-[4.33vw]'>
          <h1 className='font-bold'>SignUp to our News Letter</h1>
          <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
          <div className='flex flex-row mt-[1em]'>
            <div className='flex flex-1'>
              <input className='w-full bg-gray-200 p-2' type="text" placeholder='Enter Email Address' name="" id="" />
            </div>
            <button className='bg-blue-700 px-4 text-white'>Sign up</button>
          </div>
        </div>
        <div>
          <h1>Register Live or Push</h1>
          <h1>About Ableton</h1>
          <h1>Jobs</h1>
          <div>
            Logos
          </div>
        </div>
        <div>
          <h1>Education</h1>
          <h2>Offers for students and teachers</h2>
          <h2>Ableton for the Classroom</h2>
          <h2>Ableton for Colleges and Universities</h2>
        </div>
      </div>
      <div>
        <div>
          <h1>Community</h1>
          <h2>Find Ableton User Groups</h2>
          <h2>Find Certified Training</h2>
          <h2>Become a Certified Trainer</h2>
        </div>
        <div>
          <h1>Language and Location</h1>
          <div>
            <input type="dopdown" />
            <input type="dopdown" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>Contact Us</h1>
          <h1>Press Resources</h1>
          <h1>Legal Info</h1>
          <h1>Privacy Policy</h1>
          <h1>Cookie Settings</h1>
          <h1>Imprint</h1>
        </div>
        <div>
          <h1>Made in Berlin</h1>
          <div>Logo</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
