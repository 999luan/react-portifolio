import React from 'react'
import './nav.css'


import {BiHome} from "react-icons/bi"
import {BiUserCircle} from "react-icons/bi"
import {BiBookBookmark} from "react-icons/bi"
import {MdWorkOutline} from "react-icons/md"
import {AiOutlineMessage} from "react-icons/ai"

import {useState} from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdWorkOutline/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}


export default Nav