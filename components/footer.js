import React from 'react'
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="bg-black w-full py-8 flex items-center justify-center font-Poppins text-white">
      <div className="flex items-center justify-start max-w-7xl w-full px-6">
        <div className="flex-col w-full">
          <div className="text-3xl md:text-5xl font-bold">Call<span className='text-blue-500'>ify</span></div>
          <div className="flex items-center justify-between w-full md:flex-row flex-col">
            <div className="flex-col">
              <div className="flex items-center justify-start space-x-6 my-2">
                <Link className='text-md hover:text-[#8cf1ff] ease-in duration-150' title='Home'  href={'/'}>Home</Link>
                <Link className='text-md hover:text-[#8cf1ff] ease-in duration-150' title='About Us' href={'/about'} >About Us</Link>
                <Link className='text-md hover:text-[#8cf1ff] ease-in duration-150' title='Success Stories' href={'/success-stories'} >Success Stories</Link>
                <Link className='text-md hover:text-[#8cf1ff] ease-in duration-150' title='Contact'  href={'/contact'}>Contact</Link>
          
              </div>
              <div className="text-md text-gray-300 my-3">
                &copy; Callify.ai, a product of Joule Consulting Pvt Ltd. |
                Terms | Privacy | GDPR
              </div>
              <div className="text-md text-gray-300 my-3">
                Locations - Mumbai, 
                <span className="text-[#8cf1ff]">India</span> | Callify Americas
                Inc; 160 Varick Street, New York, NY, 10013, 
                <span className="text-[#8cf1ff]">USA</span>. | Manila, 
                <span className="text-[#8cf1ff]">Philippines</span>
              </div>
            </div>
            <div>
              <div className="flex m-2 space-x-4">
                <a
                  className="rounded p-1 bg-blue-500 hover:bg-black ease-in duration-150 border border-blue-500 text-white hover:text-blue-500 m-1 px-2 text-lg"
                  href="#"
                >
                  <ion-icon name="logo-facebook" class="mt-1 text-xl"></ion-icon> 
                </a>
                <a
                  className="rounded p-1 bg-red-500 hover:bg-black ease-in duration-150 border border-red-500 text-white hover:text-red-500 m-1 px-2 text-lg"
                  href="#"
                >
                  <ion-icon name="logo-instagram" class="mt-1 text-xl"></ion-icon> 
                </a>
                <a
                  className="rounded p-1 bg-blue-400 hover:bg-black ease-in duration-150 border border-blue-400 text-white hover:text-blue-400 m-1 px-2 text-lg"
                  href="#"
                >
                  <ion-icon name="logo-twitter" class="mt-1 text-xl"></ion-icon> 
                </a>
                <a
                  class="rounded p-1 bg-yellow-500 hover:bg-black ease-in duration-150 border border-yellow-500 text-white hover:text-yellow-500 m-1 px-2 text-lg"
                  href="#"
                >
                  <ion-icon name="logo-linkedin" class="mt-1 text-xl"></ion-icon> 
                </a>
                <a
                  className="rounded p-1 bg-red-600 hover:bg-black ease-in duration-150 border border-red-600 text-white hover:text-red-600 m-1 px-2 text-lg"
                  href="#"
                >
                  
                  <ion-icon name="logo-reddit" class="mt-1 text-xl"></ion-icon> 
                </a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer