import React, { useEffect } from 'react'
import AHero from '../components/about/Ahero'
import OurStorySection from '../components/about/Story'
import MissionVisionValues from '../components/about/Mission'
import WhatWeDoSection from '../components/about/WhatWeDo'
import FounderSection from '../components/about/Founder'
import PartnershipsSection from '../components/about/Partner'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }
, []);
  return (
    <div>
      <AHero/>
      <OurStorySection/>
      <MissionVisionValues/>
      <WhatWeDoSection/>
      <FounderSection/>
      <PartnershipsSection/>
    </div>
  )
}

export default About
