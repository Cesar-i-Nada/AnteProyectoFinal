import React from 'react'
import NavBarGeneral from '../Components/NavBarGeneral'
import AboutUs from '../Components/AboutUs'
import Footer from '../Components/Footer'
import '../Styles/MarginPages/AboutUsMP.css'


function AboutUsPage() {
  return (
    <div>
        <NavBarGeneral />
          <div className='aboutUsMargin'>
        <AboutUs />
        </div>
        <Footer />
    </div>
  )
}

export default AboutUsPage