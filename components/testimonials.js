import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    "description": "Among speed and better screening at scale, we saw that we were able to save huge time of our recruiters, leading to better hiring",
    "name": "Ritu Bhatia",
    "position": "Global Recruitment Director",
    "image": "/ritu.jpg",
    "company": "/genpact.png",
    "alt": "genpact review",
    "stats-line": "Daily recruiter time saved by",
    "stats": "4 hrs"
  },
  {
    "description": "Due to significant reduction in manual connecting and discussions with candidates, we did faster closures by atleast 10 days",
    "name": "Bill Mushman",
    "position": "Global Director, Talent Acquisition",
    "image": "/Bill.jpg",
    "company": "/NTT.png",
    "alt": "NTT review",
    "stats-line": "Increased speed of hire by",
    "stats": "40%"
  },
  {
    "description": "As a RPO, our focus in ensuring that any investments do not impact our margins. With Callify, we were able to get great ROI",
    "name": "Sanjeev Duggal",
    "position": " Executive Director, Allegis Group",
    "image": "/Sanjeev.jpg",
    "company": "/Allegis.png",
    "alt": "Allegis review",
    "stats-line": "Investments recovered in",
    "stats": "4 mths"
  },
  {
    "description": "Callify helped us achieve our hiring goal of 18,000 last year enabling us to save over $900,000 due to reduced cost-per-hire",
    "name": "Sukhi Sudarshan",
    "position": "Director, Talent Acquisition",
    "image": "/sukhi.jpg",
    "company": "/monster.png",
    "alt": "EY review",
    "stats-line": "Reduced Cost-per-hire by",
    "stats": "25%"
  },
  {
    "description": "Our limitation of being able to connect with limited leads a day was eliminated. Callify helped achieve high coverage all our sourced candidates",
    "name": "Nicolle Franchezca",
    "position": "Head Sourcing",
    "image": "/Nicolle.png",
    "company": "/WNS.png",
    "alt": "WNS review",
    "stats-line": "Increased Coverage by",
    "stats": "9X"
  },
  {
    "description": "Our biggest challenge post pandemic hiring was the drop-out ratio, due to hot market for sales skills. With Callify we were able to significantly lower our ratios",
    "name": "Ranga Subramaniam",
    "position": "Head, Talent Acquisition",
    "image": "/Ranga.jpg",
    "company": "/HDFC.png",
    "alt": "HDFC review",
    "stats-line": "Reduced drop-outs by",
    "stats": "18%"
  },
];

const Testimonials = () => {
  return (
    <div
      className="flex items-center justify-center w-full py-20 bg-cover bg-center bg-no-repeat bg-[#dfecf9]"
      style={{ backgroundImage: 'url("/testimonials.png")' }}
    >
      <div className="flex max-w-7xl w-full items-center justify-center">
        <div className="flex-col text-center items-center justify-center">
          <div className="text-5xl font-semibold text-[#0025d1] my-8 bg-[#dfecf9]">
            Trusted by hundreds of Talent Acquisition leaders globally
          </div>

          <div className="max-w-7xl w-full flex flex-wrap justify-center items-center scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[90%] md:max-w-[400px] m-2 h-auto md:min-h-[340px] border-2 border-blue-500 rounded-lg p-3 bg-[#dfecf9]">
                <div className="flex-col">
                  <div className="text-xl">
                    {testimonial.description}
                  </div>
                  <div className="my-6">
                    {testimonial["stats-line"]} <span className='font-medium text-[#0025d1] text-xl'>{testimonial.stats}</span>
                  </div>
                  <div className="flex items-center justify-around text-left w-full space-x-4">
                    <div className="h-20 w-20 rounded-full overflow-hidden">
                      <Image src={testimonial.image} height={100} width={100} alt={testimonial.alt} />
                    </div>
                    <div className="flex-col">
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm">{testimonial.position}</div>
                      <Image
                        src={testimonial.company}
                        height={70}
                        width={70}
                        alt=""
                        />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
