import React from 'react'
import './Hero.css'
import Profile_Pic from '../../assets/Designer.png'
const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-content">
      <img  className="profile-pic" src= {Profile_Pic}alt="Profile Image" />
      <div className="text-content">
      <h1> 
        <div className="name">
            Rohit
        </div>
    <div className="tagline">
    Code Whisperer & Tech Enthusiast | Building Digital Dream
    </div>
         </h1>
    
      
<div className="hero-action">
  <div className="hero-resume">
    Resume
    </div>
    <div className="hero-connect">
    Connect Me
  </div>
   </div>
  </div>
 </div>
    </section>
  );
}

export default Hero