import React from 'react'
import {BsLinkedin , BsGithub , BsDribbble } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/govarathan-bb25061bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"><BsLinkedin /></a>
      <a href="https://github.com/govarathan" target="blank"><BsGithub/></a>
      <a href="https://app.netlify.com/teams/govarathan/overview" target="blank"><BsDribbble/></a>
   
    
    
    
    </div>
  )
}

export default HeaderSocials