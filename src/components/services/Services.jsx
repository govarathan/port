import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Fullstack Core Java Development</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Oops Concepts in core java to develop the projects in proper code  in frontend  develop Bootstrap for Responsive the project in Angular ,React alos</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Git and Github to deploy the code every day to commit on the project update </p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Spring Boot to develop the using Hibernate JPA,Spring Web,MYSQl Driver to write the code in the STS and Also Intellij</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>MySql to Store the data in the web services and projects to store the data in DB  </p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Sql to connect the database mysql to the query for the DB to write the code </p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Spring MVC to develop the module using MVC architecture in development</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Eclipse and Spring Tool Suite to make the java,spring mvc,Jstl,jsp projects  </p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Agile Scrum Process and  SDLC  process in the  develop the project at the time</p>
            </li>
          </ul>
        </article>
   {/* ----------END CORE JAVA -------------- */}

      {/* ----------MERN FullStack Developer-------------- */}

   <article className="service">
          <div className="service__head">
            <h3> MERN Fullstack Developer</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>React  to develop the frontend uusing javascript in applications</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Node Js to develop the project in the run JavaScript code outside of a web browser</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>MongoDB is a NoSQL database management system that stores data in a flexible, schema-free format known as BSON (Binary JSON)</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>NoSQl in MongoDB to use the connect the DB using NOSQL</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Express Js to using MERN in Express i am using MVC architecture</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Angular also using to creating my frontend  project in parent chid connectivity</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>MERN to develop Bootstrap for Responsive the project in Angular ,React alos</p>
            </li>
          </ul>
        </article>
   {/* ----------END MERN-------------- */}

     {/* ----------DIGITAL MARKETING-------------- */}

     <article className="service">
          <div className="service__head">
            <h3> DIGITAL MARKETING</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>SEO Serach Engine Organization</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>content writing  to write the content using Key words</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>creating attractive ads</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>using the PPP methods to marketing the product</p>
            </li>

            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>SEO content ,keywords ,thumbnail  etc...</p>
            </li>

           
          </ul>
        </article>
   {/* ----------DIITAL MARKETING -------------- */}

      </div>
    </section >
  )
}

export default Services