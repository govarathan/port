import React from 'react'
import './About.css'
import ME from '../../assets/pro2.jpeg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="aboutimage"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <BsAward className='about_icon'/>
              <h5>Experienece</h5>
              <small>knowlege is my Experienece</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>No clients now but.. </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ completed.</small>
            </article>
            </div>
            <p>
            I am a passionate and dedicated full-stack developer with expertise in both Java-based and MERN full-stack development. My journey in the world of web development has equipped me with the skills to create robust, scalable, and user-friendly web applications. I thrive on solving complex problems and delivering solutions that make a positive impact.
            </p>
            <a href="#contact" className='btn btn-primay' >Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About