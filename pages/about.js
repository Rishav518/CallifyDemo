import React from 'react'
import Demo from '../components/demo'
import Footer from '../components/footer'
import Header from '../components/header'
import Image from 'next/image'
const About = () => {
  return (
    <>
    <Header/>
    <div className="flex justify-center font-Poppins bg-[#f1f5f8]">
    <div className="flex flex-col justify-center">
        <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div className="overflow-hidden w-full m-4 flex flex-col md:flex-row justify-center ">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-[70%] m-4 ">
                        <div className="font-bold text-5xl md:text-7xl md:text-left text-center text-[#0025d1] m-2">About US</div>
                        <div className=" text-md md:text-lg md:text-left text-center text-black mt-4 m-2">Callify.ai is a product owned by Joule Consulting Pvt. Ltd. Since its inception, Joule has been headquartered in Mumbai with customers spread across more than 10 countries.</div>
                        <div className=" text-md md:text-lg md:text-left text-center text-black mt-4 m-2">With over 50 person years of collective experience in the B2B domain, Callify's team has strong back-ground and expertise within Artificial Intelligence, Open Source Technology, Cloud Telephony, Speech-to-text, Natural Language processing and multiple business domains (horizontals and verticals).</div>
                        <div className='flex items-center md:justify-start justify-center'>
                        </div>
                    </div>
                    <div className=" w-full overflow-hidden flex items-center justify-center"> 
                    <Image src="/about.png" height={350} width={350} alt=""/> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="flex justify-center font-Poppins py-10 px-6">
    <div className="flex flex-col justify-center">
        <div className="flex flex-col  max-w-7xl justify-center items-center ">
            <div className="font-bold text-5xl md:text-left text-left text-[#0025d1] m-2 w-full">Our Story</div>
            <div className=" text-md md:text-md md:text-left text-center text-black mt-4 m-2">After many years in business roles in USA, UK and India, our founder decided to pursue entrepreneurial journey in India. While in the role of a sales person for many years, our founder built success in his career by using cold calling techniques to prospect for business.</div>
            <div className=" text-md md:text-md md:text-left text-center text-black mt-4 m-2">Cold calling even today is relevant, but it takes a lot of effort. While effort is always welcomed for committed professionals, significant portion of this effort gets wasted, because people do not respond, are not interested etc etc. This lead to our founder to think about ways to automate cold calling. But it continued to remain an idea.</div>
            <div className=" text-md md:text-md md:text-left text-center text-black mt-4 m-2">However, once back in India, our founder started a unique recruitment firm that leveraged technology to deliver recruitment services in a faster better and cheaper manner. It was during this period that the founding team decided to automate cold calling that our recruiters did daily to call, screen, schedule and engage with candidates. Callify idea starting to take shape and a basic version of the product was built to experiment whether it would add value to the recruiters and whether it would make their calling tasks more effective.</div>
            <div className=" text-md md:text-md md:text-left text-center text-black mt-4 m-2">The recruitment firm, that had grown to over 30 recruiters was sold to a search firm and the founding team decided to pursue Callify as a pure technology product company. Thus Callify was born and launched officially in Aug 2016.</div>

        </div>
        </div>
        </div>
    <Demo/>
    <Footer/>
    </>
  )
}

export default About