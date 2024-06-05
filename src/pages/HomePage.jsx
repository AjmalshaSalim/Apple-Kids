import React from 'react'
import Home from '../components/Home'
import Homemid from '../components/Homemid'
import Homebot from '../components/Homebot'
import Header from '../components/Header'
import HomeAbout from '../components/HomeAbout'

function HomePage() {
  return (
    <div>
        <Header/>
        <HomeAbout/>
        <Home/>
        <Homemid/>
        <Homebot/>
        
    </div>
  )
}

export default HomePage