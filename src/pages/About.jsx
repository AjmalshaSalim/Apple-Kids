import React from 'react'
import Navbar from '../components/Navbar'
import Feedback from '../components/Feedback'
import Countup from '../components/Countup'
import Banner from '../components/about/Banner'
import Imagesection from '../components/about/Imagesection'
import Desc from '../components/about/Desc'
import Card from '../components/about/Card'


function About() {
 
 
  return (
      <>
       <Navbar/>
 
      {/* Banner section */}
     <Banner/>
        
        <Imagesection/>

        <Desc/>
        <Card/>

       


    


      {/* feedback section */}

     <Feedback/>

     <Countup/>



      </>
       
    
   

  )
}

export default About