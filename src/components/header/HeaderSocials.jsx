import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className="header__socials">

        <a href="linkedin.com" target="_blank"><FaLinkedin/></a>
        
        <a href="github.com" target="_blank"><FaGithub/></a>

        <a href="https://dribbble.com/" target="_blank"><FaDribbble/></a>

    </div>
  )
}

export default HeaderSocials