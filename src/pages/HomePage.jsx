import React from 'react'
import HeroSection from '../components/homePageComponents/Herosection'
import Hire from '../components/homePageComponents/Hire'
import CSection from '../components/homePageComponents/CSection'
import BSection from '../components/homePageComponents/BSection'
import DSection from '../components/homePageComponents/DSection'
import {Results, Revenue, Top, Views} from '../components/homePageComponents/Performance'

function HomePage() {
  return (
    <>
      <HeroSection/>
      <BSection/>
      <Results/>
      <Top/>
      <CSection/>
      <Views/>
      <Revenue/>
      <DSection/>
      <Hire/>
    </>
  )
}

export default HomePage