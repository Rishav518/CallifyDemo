import Image from 'next/image'
import React from 'react'

const companiesData = [
  {
    "alt": "accenture",
    "src": "/accenture.png"
  },
  {
    "alt": "amazon",
    "src": "/amazon.png"
  },
 
  {
    "alt": "genpact",
    "src": "/genpact.png"
  },
  {
    "alt": "bosch",
    "src": "/bosch.png"
  },
  {
    "alt": "philips",
    "src": "/philips.png"
  },
];

const Companies = () => {
  return (
    <div className="flex justify-center w-full font-Poppins">
      <div className="flex items-center justify-center max-w-7xl w-full">
          <div className="flex space-x-0 space-y-0 md:space-y-2 md:space-x-4 md:justify-between justify-center flex-wrap w-full">
          {companiesData.map((company, index) => (
          <div className='h-20 w-40 px-8 overflow-hidden py-4'>
            <Image
              key={index}
              src={company.src}
              alt={company.alt}
              height={100}
              width={200}
              className="mb-4" // Add margin bottom for spacing
            />
        </div>
          ))}
      </div>
      </div>
    </div>
  )
}

export default Companies;
