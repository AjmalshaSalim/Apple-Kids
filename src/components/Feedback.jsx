import React from 'react'
import {  A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO, Company Inc.',
    feedback: 'This service is fantastic! It really helped our business grow.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'CTO, TechCorp',
    feedback: 'A game changer for our company. Highly recommend it to anyone.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    title: 'Marketing Head, Marketify',
    feedback: 'Outstanding experience, very professional and prompt.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 4,
    name: 'Bob Brown',
    title: 'Developer, DevWorks',
    feedback: 'Incredibly useful tool for developers. Made my work easier.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id: 5,
    name: 'Sara Wilson',
    title: 'Designer, Creatify',
    feedback: 'The best design tool I have ever used. It’s a game-changer.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  // Add more testimonials as needed
];

function Feedback() {
   
  return (
    <div className='min-h-[300px]'>
  <div className="bg-white py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 font-mono">what parents say</h2>
      <Swiper
        modules={[ A11y,Autoplay]}
        autoplay={{delay: 2000}}
        spaceBetween={50}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          360: { slidesPerView: 1 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-6 rounded-lg border-2 border-red-300 border-t-red-300 border-l-red-700 shadow-lg flex flex-col justify-between hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</div>
  )
}

export default Feedback