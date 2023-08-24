import React from 'react'

const Work = () => {
  return (
    <div className='min-h-screen flex items-start py-20 justify-center w-full font-Poppins'>
    <div className='max-w-7xl flex items-start justify-center w-full'>
        <div className='flex-col  w-full px-4'>
            <div className='text-5xl md:text-7xl my-4 md:text-left text-center  font-bold text-[#0025d1] '>How does it work?</div>
            <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3 m-4 px-4">
                        <div className="font-bold text-3xl md:text-3xl text-[#0025d1] m-2 mt-16 mb-4">Just share Job Description </div>                        
                        <div className="text-black text-xl m-2">Upload or paste a copy of well written job description or type as much in details about the opportunity</div>                        
                       
                        <div className="font-bold text-3xl md:text-3xl text-[#0025d1] m-2 mt-16 mb-4">Just review</div>                        
                        <div className="text-black text-xl m-2">Review the campaign created for accuracy, messaging, candidate data etc</div>                        
                       
                        <div className="font-bold text-3xl md:text-3xl text-[#0025d1] m-2 mt-16 mb-4">Just few minutes wait</div>                        
                        <div className="text-black text-xl m-2">Callify will auto create job overviews, questions, reach-out & seek consent, capture responses, match & rank them</div>                        
                       
                    </div>
                    <div className=" w-full overflow-hidden flex items-center justify-center p-6 shadow-2xl shadow-gray-800 rounded-md"> 
                        <video controls muted autoPlay width="100%" height="auto">
                            <source src="https://d2l1mqxn454m0a.cloudfront.net/reckSrc/vedio/Screens-video-2.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
        </div>

    </div>
    </div>
  )
}

export default Work