import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Steps from '../components/Steps'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <div>
        <HeroSection />

        <Reviews />
        <Steps />
        <Footer />
    </div>
  )
}

export default Home