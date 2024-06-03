import React from 'react'

const ongoingClasses = [
    {
      id: 1,
      name: 'Daycare (6 months above)',
      description: 'Providing a safe and nurturing environment for children aged 6 months and above.',
      image: 'https://images.pexels.com/photos/8613368/pexels-photo-8613368.jpeg?auto=compress&cs=tinysrgb&w=600',
      ageGroup: '6 months and above',
      timings: '8:00 AM - 6:00 PM',
      days: 'Monday to Friday',
    },
    {
      id: 2,
      name: 'Pre-KG',
      description: 'Early childhood education program to prepare kids for kindergarten.',
      image: 'https://images.pexels.com/photos/4260323/pexels-photo-4260323.jpeg?auto=compress&cs=tinysrgb&w=600',
      ageGroup: '3 - 4 years',
      timings: '9:00 AM - 12:00 PM',
      days: 'Monday to Friday',
    },
    {
      id: 3,
      name: 'LKG',
      description: 'Lower Kindergarten class focusing on foundational skills in reading, writing, and arithmetic.',
      image: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=600',
      ageGroup: '4 - 5 years',
      timings: '9:00 AM - 1:00 PM',
      days: 'Monday to Friday',
    },
    {
      id: 4,
      name: 'UKG',
      description: 'Upper Kindergarten class designed to prepare children for primary school.',
      image: 'https://images.pexels.com/photos/8422132/pexels-photo-8422132.jpeg?auto=compress&cs=tinysrgb&w=600',
      ageGroup: '5 - 6 years',
      timings: '9:00 AM - 1:00 PM',
      days: 'Monday to Friday',
    },
    {
      id: 5,
      name: 'Tuition for all classes (LKG to Plus Two)',
      description: 'Comprehensive tuition classes covering all subjects for students from LKG to Plus Two.',
      image: 'https://images.pexels.com/photos/8612901/pexels-photo-8612901.jpeg?auto=compress&cs=tinysrgb&w=600',
      ageGroup: 'LKG to Plus Two',
      timings: '4:00 PM - 7:00 PM',
      days: 'Monday to Saturday',
    },
    {
      id: 6,
      name: 'Handwriting Development Course (7 hours only)',
      description: 'Special course to improve handwriting skills, conducted over a 7-hour period.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
      ageGroup: 'All ages',
      timings: '9:00 AM - 4:00 PM',
      days: 'Saturday',
    },
  ];
  

function Classes() {
  return (
    <>
    <div className='min-h-[500px] '>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ongoingClasses.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                />
                <h2 className="text-xl font-bold mt-4">{item.name}</h2>
                <p className="text-gray-700">{item.description}</p>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Classes