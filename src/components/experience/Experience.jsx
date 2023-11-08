import React from 'react'
import './Experience.css'
import {BsFillCheckCircleFill} from  'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          
        {/* -------------FRONTEND -----------------*/}
           <h3>Frontend Development</h3>
           <div className="experience__content">
            
            <article className='experience__details'>
              <BsFillCheckCircleFill  className='experience__details-icon'/>
              
              <div>
                <h4>HTML</h4>
              <small className='text-light'>Expeieneced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div><h4>CSS</h4>
              <small className='text-light'>Expeieneced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div><h4>JS</h4>
              <small className='text-light'>Expeieneced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div><h4>BOOTSTRAP</h4>
              <small className='text-light'>Expeieneced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div><h4>REACT</h4>
              <small className='text-light'>Expeieneced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div><h4>ANGULAR JS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
           </div>
        </div>
        {/* -------------BACKEND -----------------*/}
        <div className="experience__backend">
         <h3>Backend Development</h3>
        <div className="experience__content">
            
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div><h4>CORE JAVA</h4>
              <small className='text-light'>Expeieneced</small>
              </div> 
           </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div><h4>MONGO DB</h4>
              <small className='text-light'>Expeieneced</small>
              </div> 
           </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div><h4>MYSQL</h4>
              <small className='text-light'>Expeieneced</small>
              </div> 

           </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div><h4>SPRING BOOT</h4>
              <small className='text-light'>Expeieneced</small>
              </div>  
          </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div><h4>NODE JS</h4>
              <small className='text-light'>Expeieneced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div><h4>EXPRESS JS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
           </div>
        </div>
          
        
      </div>
    </section>
  )
}

export default Experience