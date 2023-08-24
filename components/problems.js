import React from 'react';

const problems = [
  {
    "icon": "color-filter-outline",
    "heading": "Poor Coverage",
    "description": "Eliminate limitation of human efforts of being able to engage with only few candidates a day"
  },
  {
    "icon": "search-circle-outline",
    "heading": "Inaccurate Screening",
    "description": "Eliminates the need to make judgmental calls due to lack of auto matching & evidence"
  },
  {
    "icon": "chatbox-ellipses-outline",
    "heading": "Inconsistent Dialogue",
    "description": "Eliminates non-impactful job verviews, non-uniformity of questions, no employer branding"
  },
  {
    "icon": "people-outline",
    "heading": "Patchy Engagement",
    "description": "Eliminates the need to consistently follow-up across all stages of hiring, up until joining"
  },
  {
    "icon": "refresh-outline",
    "heading": "Massive Rework",
    "description": "Eliminates lapses in follow-ups, screening, timely submissions, recruiters have to re-do rework "
  },
  {
    "icon": "timer-outline",
    "heading": "Time Wastage",
    "description": "Eliminates the waste time due to making calls, leaving voice mails, sending texts, emails etc"
  },
  
];

const Problems = () => {
  return (
    <div className='flex items-center justify-center w-full min-h-screen bg-[#0025d1] text-white py-20'>
      <div className='flex items-center max-w-7xl justify-start w-full font-Poppins'>
        <div className='flex-col px-4'>
          <div className='font-medium text-lg'>Solve problems</div>
          <div className='font-bold text-3xl md:text-7xl w-full md:w-[80%]'>
            What <span className='mx-2 md:mx-4 text-[#8cf1ff]'>problems</span> do we eliminate?
          </div>
          <div className='text-lg w-full md:w-[70%] my-10'>
            Despite plethora of recruitment automation products implemented, the last-mile interaction between a recruiter and candidate continues to be manual. Emails, bots and texts have not delivered satisfactory throughputs making recruiters waste huge amount of productive time.
          </div>
          <div className='flex items-center justify-between flex-wrap '>
            {problems.map((problem, index) => (
              <div key={index} className='w-full md:w-1/4 m-2 h-min-48 h-max flex-col rounded-xl  p-2'>
                <ion-icon name={problem.icon} class='text-5xl md:text-7xl text-[#8cf1ff] font-thin'></ion-icon>
                <div className='text-xl md:text-3xl font-medium'>{problem.heading}</div>
                <div className='text-sm'>{problem.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Problems;
