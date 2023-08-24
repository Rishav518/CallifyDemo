import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="flex justify-center font-Poppins">
    <div className="flex flex-col justify-center">
        <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div className="overflow-hidden w-full m-4 flex flex-col md:flex-row justify-center">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3 m-4 ">
                        <div className="font-bold text-5xl md:text-7xl md:text-left text-center text-[#0025d1] m-2">Humanative AI in Recruitment </div>
                        <div className=" text-md md:text-lg md:text-left text-center text-black mt-4 m-2">Callify is a human-touch based AI platform leveraging power of recruiter's own voice for an awesome candidate engagement and experience; enabling hassle free screening, scheduling and onboarding automation.</div>
                        <div className='flex items-center md:justify-start justify-center'>
                        <button className='px-4 py-2 my-4  rounded-lg bg-[#0025d1] text-white text-2xl hover:scale-105 ease-in duration-150 hover:bg-black'>Request Demo</button>
                        </div>
                    </div>
                    <div className=" w-full overflow-hidden flex items-center justify-center"> 
                    <Image src="/hero.png" height={350} width={350} alt=""/> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Hero