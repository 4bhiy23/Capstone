import React from 'react'
import HeroSection from '../HeroSection'
import WhyUs from '../WhyUs'
import Featured from '../Featured'
import Flow from '../Flow'
import Testimonials from '../Testimonials'
import Footer from '../Footer'
const Home = () => {
  return (
    <div>
        <HeroSection />
        <WhyUs />
        <Featured />
        <Flow />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home
