import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Homemid() {
  const tabs = [
    { title: 'Innovative Learning', description:"This approach to learning focuses on using new and creative methods to enhance the learning experience. It often involves the use of technology, interactive tools, and unconventional teaching methods to engage students and promote a deeper understanding of the subject matter." },
    { title: 'Experienced Educators', description:"  Experienced educators are teachers or instructors who have a significant amount of teaching experience. They have spent years honing their craft and have a deep understanding of the subjects they teach. They are often sought after for their expertise and ability to effectively communicate complex ideas to students."},
    { title: 'Interactive Learning', description: " Interactive learning is a teaching method that actively involves students in the learning process. It encourages students to participate, ask questions, and engage with the material in a meaningful way. This approach can improve retention and understanding by making learning more engaging and relevant to students' lives." },
    { title: 'Cultural Diversity', description:" Cultural diversity refers to the presence of a variety of cultural groups within a society or organization. It encompasses differences in race, ethnicity, language, religion, and other cultural factors. Embracing cultural diversity promotes inclusivity, understanding, and respect for different perspectives and ways of life." },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);


  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
   
   <div className='min-h-[450px] grid grid-cols-1 lg:grid-cols-12 bg-gray-200 p-4'>

   {/* 1st div */}
  <div className='flex justify-center items-center lg:col-span-4'>
    <img className='w-72 h-96 rounded-tl-2xl rounded-br-3xl' src='https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=600' />
  </div>

  {/* 2nd div */}
  <div className='flex justify-center lg:items-start items-center flex-col gap-6 lg:col-span-3 p-4'>
    <button className='bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg h-8'>
      why choose us?
    </button>
    {tabs.map((tab, index) => (
      <p
        key={index}
        className={`text-lg border-2 border-t-4 border-l-4 border-pink-200 rounded-lg p-1 text-center w-72 cursor-pointer ${selectedTab.title === tab.title ? 'bg-pink-200' : ''}`}
        onClick={() => handleTabClick(tab)}
      >
        {tab.title}
      </p>
    ))}
  </div>

  {/* 3rd div */}
  <div className='flex lg:justify-start justify-center items-center mt-4 ml-4 lg:col-span-5'>
    <p className='text-lg rounded-lg p-4 text-center w-full sm:w-96 border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300'>
      {selectedTab.description}
    </p>
  </div>

</div>

    </>
  )
}

export default Homemid





















{/* <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
	<path class="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
</svg> */}
