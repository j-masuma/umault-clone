import React from 'react'
import HeroSection from '../components/homePageComponents/Herosection'
import Hire from '../components/homePageComponents/Hire'
import CSection from '../components/homePageComponents/CSection'
import BSection from '../components/homePageComponents/BSection'
import DSection from '../components/homePageComponents/DSection'

function HomePage() {
  return (
    <>
      <HeroSection/>
      <BSection/>
      <CSection/>
      <DSection/>
      <Hire/>
    </>
  )
}

export default HomePage