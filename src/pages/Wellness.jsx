import React, { useEffect } from 'react'
import WellHero from '../components/wellness/WellHero'
import BioScanSection from '../components/wellness/Screening'
import SupplementsSection from '../components/wellness/Supplement'
import WellnessConsultations from '../components/wellness/Consultation'

const Wellness = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <WellHero/>
      <BioScanSection/>
      <SupplementsSection/>
      <WellnessConsultations/>
    </div>
  )
}

export default Wellness
