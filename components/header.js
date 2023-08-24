import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='flex items-center justify-center font-Poppins'>
      <div className='flex items-center justify-between px-4 md:px-6 lg:px-8 max-w-7xl h-20 w-full '>
        <div className='flex items-center space-x-4'>
          <div>
            <Link href={'/'}>
              <Image src='/logo.png' alt='Callify.ai Logo' height={50} width={100} />
            </Link>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <Link className='text-md hover:text-[#0025d1] hover:border-b-2 hover:border-[#0025d1] ease-in duration-150' title='Home'  href={'/'}>Home</Link>
            <Link className='text-md hover:text-[#0025d1] hover:border-b-2 hover:border-[#0025d1] ease-in duration-150' title='About Us' href={'/about'} >About Us</Link>
            <Link className='text-md hover:text-[#0025d1] hover:border-b-2 hover:border-[#0025d1] ease-in duration-150' title='Success Stories' href={'/success-stories'} >Success Stories</Link>
            <Link className='text-md hover:text-[#0025d1] hover:border-b-2 hover:border-[#0025d1] ease-in duration-150' title='Contact'  href={'/contact'}>Contact</Link>
          
          </div>
        </div>
        <button className='hidden md:flex bg-[#0025d1] px-2 py-1 text-white rounded text-2xl hover:bg-black hover:scale-105 ease-in duration-100'>
          LogIn
        </button>
        <div
          className={`md:hidden flex flex-col p-2 rounded hover:scale-105 ease-in duration-100 ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div className='h-0.5 w-6 bg-black my-1'></div>
          <div className='h-0.5 w-6 bg-black my-1'></div>
          <div className='h-0.5 w-6 bg-black my-1'></div>
        </div>
      </div>
      </div>
      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} px-4 md:px-6 lg:px-8 py-2 `}>
        <div className='flex flex-col space-y-4'>
        <Link className='text-md hover:text-[#0025d1] hover:border-b-2 hover:border-[#0025d1] ease-in duration-150' title='Home'  href={'/'}>Home</Link>
            <Link className='text-md hover:text-[#0025d1] hover:border-b-2 hover:border-[#0025d1] ease-in duration-150' title='About Us' href={'/about'} >About Us</Link>
            <Link className='text-md hover:text-[#0025d1] hover:border-b-2 hover:border-[#0025d1] ease-in duration-150' title='Success Stories' href={'/success-stories'} >Success Stories</Link>
            <Link className='text-md hover:text-[#0025d1] hover:border-b-2 hover:border-[#0025d1] ease-in duration-150' title='Contact'  href={'/contact'}>Contact</Link>
          <button className='bg-[#0025d1] px-2 py-1 text-white rounded text-xl hover:bg-black hover:scale-105 ease-in duration-100'>
            LogIn
          </button>
        </div>
      </div>
    </>
  )
}

const NavItem = ({ title }) => (
  <div className='text-lg text-center hover:border-b-2 text-black rounded cursor-pointer ease-in duration-100 px-2 py-1 hover:text-[#0025d1] font-normal hover:border-[#0025d1]'>
    {title}
  </div>
);

export default Header;
