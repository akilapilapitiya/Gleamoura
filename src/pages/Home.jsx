import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Steps from '../components/Steps'
import Reviews from '../components/Reviews'
import Video from '../components/Video'

const Home = () => {
  return (
    <div>
        <HeroSection />

        <Reviews />
        <Steps />
        <Video />
        <Footer />
    </div>
  )
}

export default Home