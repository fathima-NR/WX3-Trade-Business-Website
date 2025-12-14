import React from 'react'
import { Navbar } from 'react-bootstrap'


import Footer from './Components/Footer'
import NavbarWx3 from './Components/Navbar'
import HeroSection from './Components/Hero'
import AboutSection from './Components/Aboutus'
import Services from './Components/Services'

import Contact from './Components/Contactus'
import Clients from './Components/Clients'
import ScrollToTop from './Components/ScrollToTop'




function Temp() {
  return (
   <>
<NavbarWx3/>
  <ScrollToTop />
<div> <HeroSection/></div>
<AboutSection/>
<Services/>
<Clients/>
<Contact/>
<Footer/>
   </>
  )
}

export default Temp