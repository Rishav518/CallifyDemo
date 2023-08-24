import React from 'react'

const Demo = () => {
  return (
    <div className='flex items-center justify-center w-full py-20 bg-[#f1f5f8]'>
        <div className='flex max-w-7xl w-full items-center justify-center '>
                <div className='flex-col text-center items-center justify-center px-4'>
                    <div className='text-5xl md:text-7xl font-semibold text-[#0025d1] my-8'>How would you like to evaluate Callify?</div>
                    <div className='text-xl md:text-2xl'>Despite our 6 years of serving our global customers, we would recommend you pilot try Callify before arriving at any decision. We are confident you will like what you see.</div>
                    <div className='flex items-center justify-center'>
                        <button className='flex bg-[#0025d1] px-2 py-2 text-white rounded text-2xl hover:bg-black hover:scale-105 ease-in duration-100 my-6'>Request Demo</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Demo