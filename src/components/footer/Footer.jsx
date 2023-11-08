import React from 'react'
import './footer.css'
import {BsInstagram  , BsTwitter,BsYoutube} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Govarathan</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.youtube.com/@tamilda1307"><BsYoutube/></a>
        <a href="https://www.instagram.com/_gov_02"><BsInstagram /></a>
        <a href="https://www.instagram.com/_gov_02"><BsTwitter/></a>

      </div>
      <div className="footer__copyright">
        <small>&copy; Govarathan. All Rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer