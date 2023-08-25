import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const Contact = () => {
  return (
    <>
    <Header/>
    <div className="flex justify-center font-Poppins py-20 px-6 bg-[#f1f5f8]">
        <div className="flex flex-col justify-center">
            <div className="flex flex-col  max-w-7xl justify-center items-center w-full ">
                <div className="font-bold text-5xl md:text-7xl md:text-left text-left text-[#0025d1] m-2">Talk to the Callify Experts</div>
                <div className=" text-md md:text-xl text-center my-6 text-black mt-4 m-2 w-full">We’ll schedule a time to learn and share more with you.</div>
                <div className='w-full md:w-[80%] flex flex-col md:flex-row items-center justify-center'>
                    <div className='w-full px-6 md:w-[70%] bg-gray-500  rounded-tl-3xl flex items-start justify-center py-4'>
                    <div className='flex-col'>
                        <div className='flex'>
                            <input type="text" name="" id="" placeholder="First Name" class="w-[80%] border-2 border-white mx-2 text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 my-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg"/>                    
                            <input type="text" name="" id="" placeholder="Last Name" class="w-[80%] border-2 border-white mx-2 text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 my-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg"/>                    
                        </div>
                        <div className='flex'>
                            <input type="text" name="" id="" placeholder="Work Email" class="w-[80%] border-2 border-white mx-2 text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 my-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg"/>                    
                            <input type="text" name="" id="" placeholder="Mobile Number" class="w-[80%] border-2 border-white mx-2 text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 my-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg"/>                    
                        </div>
                        <div className='flex'>
                            <textarea id="message" name="message" placeholder="Write us a message" class="mb-3 w-full border-2 border-white h-40 text-sm outline-none placeholder:text-black placeholder:opacity-40 focus:border-blue-500 py-1 px-3 mt-4 resize-none leading-6 duration-200 ease-in-out rounded-lg"></textarea>                        
                        </div>
                        <div className='flex'>
                            <button className='hidden md:flex bg-[#0025d1] px-2 py-1 text-white rounded text-xl hover:bg-black hover:scale-105 ease-in duration-100'>Contact Us</button>
                        </div>
                    </div>
                    </div>
                    <div className='w-full md:h-96 md:w-[30%] bg-[#0025d1] rounded-br-3xl p-4 text-white'>
                        <div className='my-2'>Contact Us</div>
                        <div className='font-medium'>Request for Demos:</div>
                        <a href='mailto: ashish@callify.ai' className='underline'>ashish@callify.ai</a>
                        <div className='font-medium mt-4'>Support:</div>
                        <a href='mailto: info@callify.ai' className='underline'>info@callify.ai</a>
                        <div className='flex space-x-4 my-4 w-full justify-center'>
                        <a href='https://www.facebook.com/CallifyAi/' target={'_blank'}><ion-icon class="text-2xl text-cyan-400 hover:text-gray-300 cursor-pointer" name="logo-facebook"></ion-icon></a>
                        <a href='https://www.instagram.com/callify.ai/' target={'_blank'}><ion-icon class="text-2xl text-pink-500 hover:text-gray-300 cursor-pointer" name="logo-instagram"></ion-icon></a>
                        <a href='https://www.linkedin.com/company/callifyai/' target={'_blank'}><ion-icon class="text-2xl text-yellow-400 hover:text-gray-300 cursor-pointer" name="logo-linkedin"></ion-icon></a>
                        <a href='https://twitter.com/InCallify' target={'_blank'}><ion-icon class="text-2xl text-green-400 hover:text-gray-300 cursor-pointer" name="logo-twitter"></ion-icon></a>
                        </div>
                        <div className='font-medium mt-4'>Blog:</div>
                        <div className='flex space-x-4'>
                        <ion-icon class="text-2xl text-white cursor-pointer" name="globe-outline"></ion-icon>
                        <a href='blog.callify.ai' className='hover:text-gray-400'>blog.callify.ai</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact