import React, { useEffect } from 'react'
import CopHero from '../components/coperates/CopHero'
import CorporateProgramSection from '../components/coperates/CopAbout'
import CorporateServicesSection from '../components/coperates/ProgramCorparate'
import WellnessIntegrationSection from '../components/coperates/CopWell'

const Cooperates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }
, []);
  return (
    <div>
      <CopHero/>
      <CorporateProgramSection/>
      <CorporateServicesSection/>
      <WellnessIntegrationSection/>
    </div>
  )
}

export default Cooperates
