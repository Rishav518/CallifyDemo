import React from 'react'
import Image from 'next/image';
const integrations = [
    {
      "alt": "drawinbox",
      "src": "/drawinbox.png"
    },
    {
      "alt": "glassdoor",
      "src": "/glassdoor.png"
    },
    {
      "alt": "greenhouse",
      "src": "/greenhouse.png"
    },
    {
      "alt": "indeed",
      "src": "/indeed.png"
    },
    {
      "alt": "lever",
      "src": "/lever.png"
    },
    {
      "alt": "monster",
      "src": "/monster.png"
    },
    {
      "alt": "ripplehire",
      "src": "/ripplehire.png"
    },
    {
      "alt": "sap",
      "src": "/sap.png"
    },
    {
        "alt": "workday",
        "src": "/workday.png"
    },

  ];
const Integrations = () => {
  return (
    <div className='flex items-center justify-center w-full py-20 bg-[#f1f5f8]'>
        <div className='flex max-w-7xl w-full items-center justify-center '>
                <div className='flex-col text-center items-center justify-center px-4'>
                    <div className='text-xl font-semibold text-[#0025d1] my-8'>Pre-Integrations</div>
                    <div className='text-3xl md:text-6xl font-semibold text-[#0025d1] my-8'>Turbo-boost your recruit-tech stack</div>
                    <div className="flex space-x-0 space-y-0 md:space-y-2 md:space-x-4 justify-center flex-wrap w-full">
          {integrations.map((integrations, index) => (
          <div className='h-20 w-40 px-8 overflow-hidden py-4 flex'>
            <Image
              key={index}
              src={integrations.src}
              alt={integrations.alt}
              height={100}
              width={200}
              className="mb-4 h-10 w-40" 
            />
        </div>
          ))}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Integrations