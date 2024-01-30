import React,{useState} from 'react'

const Header = () => {
    const [more, setMore] = useState(false)
  return (
    <div className='flex flex-col font-DidactGothic pt-6 '>
     <div className='flex flex-col border-b-[3px] border-gray-200'>
        <div className='flex flex-row lg:pl-8'>
            <div id='logo 'className='ml-6 mr-8 mb-[20px]'>
                <svg  aria-hidden="true" focusable="false" class="main-nav__logo__image" xmlns="http://www.w3.org/2000/svg" width="45" height="21" viewBox="0 0 45 21"><path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path></svg>
            </div>

                <div className='flex flex-1 flex-row hidden lg:flex '>
                    <div className='flex flex-1  gap-[20px] font-bold mb-[20px] text-sm lg:text-lg '>  
                        <div>Live</div>
                        <div>Push</div>
                        <div>Note</div>
                        <div>Link</div>
                        <div>Shop</div>
                        <div>Packs</div>
                        <div>Help</div>
                        <div className='cursor-pointer text-sm lg:text-lg'>
                            <a onClick={()=>setMore(!more)}>More 
                                <span className='ml-2  font-Sans'>
                                {more? '+' :'-' }
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className='flex pr-10 gap-6 text-xs lg:text-sm' >
                        <div>
                            Try Live for free
                        </div>
                        <div>
                        Log in or register
                        </div>
                    </div>
                </div>
          

        </div>
        {more&&
        <div className='flex flex-col p-6 lg:pl-12'>
        <div className='flex flex-col gap-4'>
            <div className='text-2xl font-bold'>
                More on Ableton.com:
            </div>
            <div className='flex flex-row gap-[20px]'>
               <div>Blog</div>
               <div>Ableton for the Classroom</div>
               <div>Ableton for Colleges and Universities</div>
               <div>Certified Training</div>
               <div>About Ableton</div>
               <div>Jobs</div>
               <div>Apprenticeships</div>
            </div>
        </div>
        <div className='flex flex-col py-[40px]'>
            <div  className='text-2xl font-bold'>
                More from Ableton:
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col pr-[30px]'>
                    <h4 className='font-bold'>
                    Loop
                    </h4>
                    <p>
                    Watch Talks, Performances and Features from Ableton's Summit for Music Makers
                    </p>
                </div>
                <div className='flex flex-col px-[20px]'>
                    <h4 className='font-bold'>
                        Learning Music
                    </h4>
                    <p>
                    Learn the fundamentals of music making right in your browser.
                    </p>
                </div>
                <div className='flex flex-col px-[20px]'>
                    <h4 className='font-bold'>
                        Learning Synths
                    </h4>
                    <p>
                        Get started with synthesis using a web-based synth and accompanying lessons.
                    </p>
                </div>
                <div className='flex flex-col px-[20px]'>
                    <h4 className='font-bold'>
                        Making Music
                    </h4>
                    <p>
                        Some tips from 74 Creative Strategies for Electronic Producers.
                    </p>
                </div>
            </div>
        </div>
    </div>        
        }

     </div>
     <div className=' flex gap-[20px] pl-[20px] py-[28px] text-sm'>
            <h1>About</h1>
            <h1>Jobs</h1>
            <h1>Apprenticeships</h1>
     </div>
    </div>
  )
}

export default Header
Header