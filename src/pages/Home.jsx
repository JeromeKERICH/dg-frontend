import React, { useEffect } from 'react'
import Hero from '../components/home/Hero'
import FeaturedProducts from '../components/home/Products'
import MentorshipPreview from '../components/home/Services'
import Testimonials from '../components/home/Testimonials'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      <MentorshipPreview/>
      <Testimonials/>
    </div>
  )
}

export default Home
