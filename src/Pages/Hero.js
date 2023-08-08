import React from 'react'
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import Question from '../components/Question';
import Tracker from '../components/Tracker';
import Blogs from '../components/Blogs';


const Hero = () => {
  return (
    <div>
      
        <Home/>
        <Tracker/>        
        <Blogs/>
        <Question/>
        <Reviews/>
        <Footer/>
        
        
        
    </div>
  )
}

export default Hero
