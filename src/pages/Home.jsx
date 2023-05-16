import React, { Fragment } from 'react'
import HeroSection from '../components/Hero-Section/HeroSection'
import About from '../components/About-us/About'
import Course from '../components/Fitur-Section/Fitur'
import ArtikelSection from '../components/Artikel-Section/ArtikelSection'
import ChooseUse from '../components/Why-Choose-Us-Section/ChooseUse'

const Home = () => {
  return (<Fragment>
    <HeroSection/>
    <About/>
    <Course/>
    < ArtikelSection/>
    <ChooseUse/>
  </Fragment>)
}

export default Home