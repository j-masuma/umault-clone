import React from 'react'
import HeroSection from '../components/homePageComponents/HeroSection'
import Hire from '../components/homePageComponents/Hire'
import CSection from '../components/homePageComponents/CSection'
import BSection from '../components/homePageComponents/BSection'
import DSection from '../components/homePageComponents/DSection'
import {Performance} from '../components/homePageComponents/Performance'
// import BreakSection from '../components/homePageComponents/BreakSection'

function HomePage() {
  return (
    <>
      <HeroSection/>
      <BSection/>
{/*       <BreakSection/> */}
      <Performance/>
      <CSection/>
      <DSection/>
      <Hire/>
    </>
  )
}

export default HomePage
