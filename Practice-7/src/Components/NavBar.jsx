import React from 'react'
import Image from '../assets/Image.png';


const NavBar = () => {
  return (
    <div className='sticky top-0 bg-[#f7eaea] z-10 flex flex-col items-center pb-2'>
     <img src={Image} className='w-32' />
     <p className='text-gray-500 text-sm'>E-News</p>
    </div>
        )
        }

export default NavBar