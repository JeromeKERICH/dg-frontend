import React, { useEffect } from 'react'
import RetireHero from '../components/retirerees/RetireHero'
import AboutProgramSection from '../components/retirerees/AboutRetire'
import ProgramTracksSection from '../components/retirerees/RetirePrograms'
import RetirementHowItWorks from '../components/retirerees/How'

const Retirees = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <RetireHero/>
      <AboutProgramSection/>
      <ProgramTracksSection/>
      <RetirementHowItWorks/>
    </div>
  )
}

export default Retirees
