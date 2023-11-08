import React from 'react'
import './nav.css'
import {AiOutlineHome ,AiOutlineUser} from 'react-icons/ai'
import{BiBookAlt ,BiMessage} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href="#Header"onClick={()=> setActiveNav('#')} className={activeNav ==='#' ?  'active': '' }><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav ==='#about' ?  'active': '' } ><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav ==='#experience' ?  'active': '' }><BiBookAlt/></a>
      <a href="#services" onClick={()=> setActiveNav('#serrvices')} className={activeNav ==='#serrvices' ?  'active': '' }><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav ==='#contact' ?  'active': '' }><BiMessage/></a>
    </nav>
  )
}

export default Nav
