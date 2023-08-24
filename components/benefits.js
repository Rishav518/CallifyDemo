import React from 'react';

const benefitsData = [
  {
    "icon": "chatbubbles-outline",
    "heading": "Questions & Answers",
    "skill1": "Using LLMs",
    "skill2": "Skills + Behavior",
    "skill3": "Based on experience"
  },
  {
    "icon": "git-pull-request-outline",
    "heading": "Multi-modal Connect",
    "skill1": "Via Text & phones",
    "skill2": "Via WhatsApp",
    "skill3": "Via Emails & Bots"
  },
  {
    "icon": "chatbox-outline",
    "heading": "Crisp Messaging",
    "skill1": "Using LLMs",
    "skill2": "In your own voice",
    "skill3": "Contextual"
  },
  {
    "icon": "git-compare-outline",
    "heading": "Contextual",
    "skill1": "Sourcing to Joining",
    "skill2": "Auto trigger processes",
    "skill3": "Post joining retention"
  },
  {
    "icon": "pulse-outline",
    "heading": "Hyper-Automation",
    "skill1": "Auto follow-ups",
    "skill2": "Auto reminders",
    "skill3": "Auto messaging"
  },
  {
    "icon": "star-outline",
    "heading": "High Coverage",
    "skill1": "1000s simultaneously",
    "skill2": "Better sampling",
    "skill3": "Generate pool for future"
  },
 

  
];

const Benefits = () => {
  return (
    <div className='flex items-center justify-center w-full bg-[#0025d1] text-white py-20'>
      <div className='flex items-center max-w-7xl justify-start w-full font-Poppins'>
        <div className='flex-col px-4'>
            <div className='font-bold text-xl my-4 mx-4'>Why Callify?</div>
            <div className='flex px-4 py-2 flex-col lg:flex-row items-start '>
            <div className='w-full lg:w-[30%] '>
                <div className='font-bold text-3xl '>What benefits you get with <span className='text-[#8cf1ff]'>Callify</span> ?</div>
                <div className='text-lg text-center md:text-left  w-full md:w-[70%] my-10'>Apart from hard ROI on metrics, Callify delivers several soft benefits that increase the efficiency, effectiveness and productivity of your recruitment team significantly...</div>
            </div>
            <div className='flex items-center justify-between w-full flex-wrap'>
            {benefitsData.map((benefitsData, index) => (
              <div key={index} className='w-full md:w-1/4 m-2 h-min-48 h-max flex-col p-2'>
                <div className='flex md:flex-col flex-row items-center justify-center'>
                <ion-icon name={benefitsData.icon} class='text-5xl text-[#8cf1ff] font-thin'></ion-icon>
                <div className='text-xl font-medium my-4 mx-2'>{benefitsData.heading}</div>
                </div>
                <div className='flex items-ce
                nter '>
                    <ion-icon name='checkmark-done-circle-outline' class='mx-2 text-xl text-[#8cf1ff] font-thin'></ion-icon>
                    <div className='text-md md:text-lg'>{benefitsData.skill1}</div>
                </div>
                <div className='flex items-center '>
                    <ion-icon name='checkmark-done-circle-outline' class='mx-2 text-xl text-[#8cf1ff] font-thin'></ion-icon>
                    <div className='text-md md:text-lg'>{benefitsData.skill2}</div>
                </div>
                <div className='flex items-center '>
                    <ion-icon name='checkmark-done-circle-outline' class='mx-2 text-xl text-[#8cf1ff] font-thin'></ion-icon>
                    <div className='text-md md:text-lg'>{benefitsData.skill3}</div>
                </div>
              </div>
            ))}
          </div>
          
            </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits;
