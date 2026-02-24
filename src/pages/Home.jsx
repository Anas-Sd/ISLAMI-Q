import React from 'react'
import Header from '../components/Header'
import Description from '../components/Description'
import API from '../components/API'
import PrayerTimes from '../components/PrayerTimes'
import DailyQuote from '../components/DailyQuote'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>

        <div id="header">
          <Header/>
        </div>

        <div id="description">
          <Description/>
        </div>

        <div id="api">
          <API/>
        </div>

        <div id="prayer">
          <PrayerTimes/>
        </div>

        <div id="quote">
          <DailyQuote/>
        </div>

        <div id="features">
          <Features/>
        </div>

        <div id="footer">
          <Footer/>
        </div>

    </div>
  )
}

export default Home