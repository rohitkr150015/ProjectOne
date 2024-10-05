import React from 'react'
import './About.css'

import ProgressBar from './ProgressBar'


const About = () => {
  return (
    <div className='about'>

<div className="about-tag">
  <h1>About Me</h1>

<div className="about-sections">
  <div className="about-left">
    <div className="about-para">
      <p>Hello! I’m Rohit, a web developer and software engineer currently studying at Meerut Institute of Technology. My journey in technology began in high school when I realized my passion for coding and decided to pursue a B.Tech degree to deepen my knowledge and skills.
        <br></br>
        <br></br>

I have honed my expertise in various technologies, including React, Java, and Spring Boot. I love creating dynamic and responsive web applications that enhance user experiences. My curiosity drives me to continuously learn and explore new technologies, allowing me to stay updated with industry trends.
<br></br>
<br></br>
I thrive on challenges and enjoy collaborating with others on innovative projects. My goal is to leverage my skills to solve real-world problems and make a positive impact through technology.
<br></br>
<br></br>
When I’m not coding, you can find me exploring new ideas, hitting the gym, or diving into tech articles and tutorials. Thank you for visiting my portfolio! Feel free to connect if you're interested in collaborating or simply want to chat about tech.

</p>
    </div>
    </div>
    <div className="about-right">
   <ProgressBar></ProgressBar>
      </div>
    </div>
  </div>

</div>

    );
  }


export default About;