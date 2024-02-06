import React,{useState} from 'react'
import ham from '../assets/icons/ham.svg'
import close from '../assets/icons/close.svg'
import search from '../assets/icons/search.svg'
import logo from '../assets/logo.svg'
import closeBlack from '../assets/icons/closeBlack.svg'

const Header = () => {
    const [menu, setMenu] = useState(false)
    const [headerForm, setHeaderForm] = useState(false)
  return (
    <div className='relative'>
      <div className='flex h-[88px] bg-black text-white sm:px-[30px] w-full absolute top-0 z-[10]'>
        <div className='flex justify-between items-center w-[90%] m-auto text-[24px]'>
            <div className='flex justify-start'>
                <div className='flex w-[38px]  sm:w-[38px] mr-2'>
                    <img src={logo} className='h-full w-full' alt="" />
                </div>         
                <a href="" className='border-r-2 border-white mr-2 pr-2 sm:text-[24px] text-[17px]'>Abstract </a>
                <a href="" className='sm:text-[24px] text-[17px]'>Help centre</a>
            </div>
            <div className='w-[33%] flex justify-end xl:hidden'>
                <div className='flex h-inherit justify-center items-center'>
                    <img src={search} className='w-[22px] hover:scale-150 duration-300' onClick={()=>{setHeaderForm(!headerForm)}} alt="" />
                </div>
               <div className='ml-[15px]'>
               {menu &&
                    <div className='flex h-inherit justify-center items-center transition-all duration-500' onClick={()=>{setMenu(!menu)}}>
                        <img src={close} className='w-[22px]' alt="" />
                    </div>
                }
                {!menu &&
                    <div className='flex h-inherit justify-center items-center transition-all duration-500' onClick={()=>{setMenu(!menu)}}>
                        <img src={ham} className='w-[22px]' alt="" />
                    </div>
                }
               </div>
                
            </div>
            <div className='w-[33%] xl:flex justify-end hidden '>
                <div className='text-[24px] px-[22px] py-[6px] border-2 border-white rounded-xl font-semibold '>
                    Submit a request
                </div>
                <div className='text-[24px] ml-4 px-[32px] py-[6px]  rounded-xl font-semibold bg-blue-600 hover:bg-white hover:text-black hover:cursor-pointer transition-all duration-700'>
                    Sign in
                </div>
            </div>
        </div>
      </div>
      <div className={`flex h-[88px] bg-white text-black px-[60px] p-4 absolute w-full top-0 ${headerForm?'z-[11]':'z-[9]'} `}>
        <form action="" className='flex w-full'>
                <input className='w-full p-[16px]  border-[1px] rounded-md border-solid border-black text-[24px]' placeholder='Search' type="text" />
        </form>
        <div className='flex h-inherit items-center ml-6'>
            <img src={closeBlack} className='w-[22px]'  onClick={()=>{setHeaderForm(!headerForm)}} alt="" />
        </div>
      </div>
      {menu && 
        <div className='flex h-fit absolute bg-black w-full pt-[88px]'>
        <div className='flex flex-col items-center justify-center px-[1rem] py-[2rem] w-full text-[24px] text-white'>
        <div className='flex flex-col items-center justify-around w-[50%]'>
         <a href="" className='py-[16px]  border-b border-white w-full text-center'>Submit a Request</a>
         <a href="" className='py-[16px]'>Sign in </a>
        </div>
        </div>
       </div>  
      }
      
    </div>
  )
}

export default Header
