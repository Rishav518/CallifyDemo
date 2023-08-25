import Image from 'next/image';
import React from 'react';
import Demo from '../components/demo';
import Footer from '../components/footer';
import Header from '../components/header';

const stories = [
    {
        "image": "/success01.png",
        "heading": "European IT Services Firm",
        "description": "With more than 180,000 people in over 40 countries, Company is one of the world's foremost providers of consulting, technology and outsourcing services."
    },
    {
        "image": "/success02.png",
        "heading": "Insurance Company",
        "description": "One of the top private Life Insurance companies in India, with first Indian Insurance company to cross Rs.l trillion is AUM."
    },
    {
        "image": "/success03.png",
        "heading": "Temp Staffing Company",
        "description": "Headquartered in Switzerland, one of the leading global temp staffing company with over 22,000 employees and over $22 billion in revenues."
    },
];

const Success = () => {
    return (
        <>
            <Header />
            <div className="flex justify-center font-Poppins bg-[#f1f5f8]">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                        <div className="overflow-hidden w-full m-4 flex flex-col md:flex-row justify-center ">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="dlex-col m-4 ">
                                        <div className="font-medium text-5xl md:text-7xl md:text-left text-center text-[#0025d1] m-2">Our Success Stories</div>
                                        <div className='flex lg:flex-row flex-col items-center justify-center w-full'>
                                        {stories.map((story, index) => (
                                            <div key={index} className=' flex items-center justify-center p-4 w-[90%] xl:h-96 lg:w-1/2 hover:shadow-blue-400 bg-white shadow-2xl rounded-xl m-2'>
                                                <div className='flex-col px-2'>
                                                    <div className='flex items-center justify-center'>
                                                        <Image src={story.image} height={200} width={200} alt='' />
                                                    </div>
                                                    <div className='text-2xl text-[#0025d1] font-medium text-center my-2'>{story.heading}</div>
                                                    <div className='text-lg text-left my-2'>{story.description}</div>
                                                </div>
                                            </div>
                            ))}
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
            <Demo />
            <Footer />
        </>
    )
}

export default Success;
