import React from 'react'
import MenHero from '../components/menpage/MHero'
import AboutMentorshipSection from '../components/menpage/AboutMen'
import MentorshipPaths from '../components/menpage/Menprograms'
import MentorshipApproach from '../components/menpage/MentorshipApproach'
import DurationFormat from '../components/menpage/Duration'


const Mentorship = () => {
  return (
    <div>
      <MenHero/>
      <MentorshipPaths/>
      <AboutMentorshipSection/>
      <MentorshipApproach/>
      <DurationFormat/>
        
    </div>
  )
}

export default Mentorship
