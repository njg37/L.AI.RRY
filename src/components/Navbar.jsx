import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiLock } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
    const [toggle,settoggle] = useState(false)
    const handleClick=()=>settoggle(!toggle)
  return (
    <div className='w-full h-20 bg-white '>
        <div className='md:max-w-[1048px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
            <img src='./images/logo.png' className='h-[70px] '/>
            <div className='hidden md:flex items-center'>
<ul className='flex gap-4'>
                     <li >About</li>
                     <li >Home</li>
                     <li >Pricing</li>
                     <li >Exams</li>
                     <li >Material</li>
    
   
</ul>
            
          </div>
          <div className='hidden md:flex'>
            <button className='flex justify-between items-center bg-transparent px-6 gap-2 '>
                 <CiLock/>Login</button>
               
            <button className='p-8 py-3 font-bold rounded-md bg-[#FBBC05] hover:bg-blue-600 text-white mx-4'>
                Sign Up For Free</button>
            </div> 
            <div className='md:hidden  p-5' onClick={handleClick} >
                {toggle?<IoMdClose/>:<GiHamburgerMenu/>}
                </div> 
        </div>
            <div className={toggle?'absolute z-10 p-4 bg-white w-full px-8 md:hidden':'hidden'}>
               <ul >
                     <li className='p-4 hover:bg-gray-100'>Home</li>
                    <li className='p-4 hover:bg-gray-100 '>About</li>
                    <li className='p-4 hover:bg-gray-100'>Pricing</li>
                    <li className='p-4 hover:bg-gray-100'>Exams</li>
                    <li className='p-4 hover:bg-gray-100'>Material</li>
     <div className='flex flex-col my-4 gap-4'>
<button className='border border-[#F28A33] flex justify-center items-center bg-transparent px-6 py-4 gap-2 '>
                 <CiLock/>Login</button>
               
            <button className='p-8 py-3 font-bold text-white rounded-md bg-[#F28A33]'>
                Sign Up For Free</button>
    </div>
                </ul> 
            </div>
    </div>

  )
}

