import { NavLink } from 'react-router'
import React from 'react'
import Home from '../components/home/Home'
import About from '../components/about/About'
import WhyUs from '../components/about/WhyUs'
import HowToGetStarted from '../components/about/HowToGetStarted'
import MeetTheDev from '../components/dev/MeetTheDev'
function index() {
  return (
    <>
    <main className='grid p-2 gap-10'>
    <Home/>
    <About/>
    <WhyUs/>
    <HowToGetStarted/>
    <MeetTheDev/>
    </main>
    </>

  )
}

export default index
