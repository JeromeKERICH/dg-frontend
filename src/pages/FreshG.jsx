import React, { useEffect } from 'react'
import FreshGradHero from '../components/mentorship/FreshHero'
import ProgramWhySection from '../components/mentorship/Why'
import WhatYouLearnSection from '../components/mentorship/WhatLearn'
import HowItWorksSection from '../components/mentorship/Enroll'

const FreshG = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>
      <FreshGradHero/>
      <ProgramWhySection/>
      <WhatYouLearnSection/>
      <HowItWorksSection/>
    </div>
  )
}

export default FreshG
