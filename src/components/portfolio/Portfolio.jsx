import React from 'react'
import './portfolio.css'
import IMG1  from '../../assets/mern.png'
import IMG2  from '../../assets/email.png'
import IMG3  from '../../assets/billing.png'
import IMG4  from '../../assets/passengers.png'
import IMG5  from '../../assets/comingsoon.jfif'
import IMG6  from '../../assets/comingsoon.jfif'

//ARRAY PAGE 
const data =[

  {
    id:1,
    image:IMG1,
    title:'MERN Library Book Store',
    github:'https://github.com/govarathan/project-2',
    demo: 'https://drive.google.com/file/d/115GjQqzSi8OJg46i_9k3N7Is-qwBZfw9/view?usp=sharing'

  },
  {
    id:2,
    image:IMG2,
    title:'Email Api using Spring Boot',
    github:'https://github.com/govarathan/Email_Api_Spring',
    demo: 'https://drive.google.com/file/d/1NVPvGBdBNHKc40bY9TPzdkZZs2lPm2BU/view?usp=sharing'

  },
  {
    id:3,
    image:IMG3,
    title:'Billing using Spring Boot',
    github:'https://github.com/govarathan/Billing-jetBlue',
    demo: 'https://drive.google.com/file/d/1R6u67ZwXPfU4rVKo25Ef8Of35r65sB9x/view?usp=sharing'

  },
  {
    id:4,
    image:IMG4,
    title:'JETBLUE Airways ',
    github:'https://github.com/govarathan/JETBLUE--Management-System',
    demo: 'https://drive.google.com/file/d/1_SyuI-CPZarVx2sJpzfEOzCMV6gzZQJe/view?usp=sharing'

  },
  {
    id:5,
    image:IMG5,
    title:'MERN fullstack Ecommerce',
    github:'https://github.com/govarathan/',
    demo: '#'

  },
  {
    id:6,
    image:IMG6,
    title:'Spring Boot Website',
    github:'https://github.com/govarathan/',
    demo: '#'

  },



]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
        data.map(({id,image,title,github,demo}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='blank'> Github</a>
            <a href={demo} className='btn btn-primary' target='blank'>Video Demo</a>
            </div>
          </article>
   
          ) 
          })
          }


          
        </div>
        </section>
  )
}
  
          

    //     <article className='portfolio__item'>
    //       <div className="portfolio__item-image">
    //         <img src={IMG2} alt="img2" />
    //       </div>
    //       <h3>This is a portfolio item title</h3>
    //       <div className="portfolio__item-cta">
    //       <a href="https://github.com/govarathan" className='btn' target='_blank'>Github</a>
    //       <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
    //       </div>
    //     </article>

    //     <article className='portfolio__item'>
    //       <div className="portfolio__item-image">
    //         <img src={IMG3} alt="img3" />
    //       </div>
    //       <h3>This is a portfolio item title</h3>
    //       <div className="portfolio__item-cta">
    //       <a href="https://github.com/govarathan" className='btn' target='_blank'>Github</a>
    //       <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
    //       </div>
    //     </article>

    //     <article className='portfolio__item'>
    //       <div className="portfolio__item-image">
    //         <img src={IMG4} alt="img4" />
    //       </div>
    //       <h3>This is a portfolio item title</h3>
    //       <div className="portfolio__item-cta">
    //       <a href="https://github.com/govarathan" className='btn' target='_blank'>Github</a>
    //       <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
    //       </div>
    //     </article>

    //     <article className='portfolio__item'>
    //       <div className="portfolio__item-image">
    //         <img src={IMG5} alt="img5" />
    //       </div>
    //       <h3>This is a portfolio item title</h3>
    //       <div className="portfolio__item-cta">
    //       <a href="https://github.com/govarathan" className='btn' target='_blank'>Github</a>
    //       <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
    //       </div>
    //     </article>

    //     <article className='portfolio__item'>
    //       <div className="portfolio__item-image">
    //         <img src={IMG6} alt="img6" />
    //       </div>
    //       <h3>This is a portfolio item title</h3>
    //       <div className="portfolio__item-cta">
    //       <a href="https://github.com/govarathan" className='btn' target='_blank'>Github</a>
    //       <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
    //       </div>
    //     </article>


        
    //   </div>
    // </section>

  

export default Portfolio