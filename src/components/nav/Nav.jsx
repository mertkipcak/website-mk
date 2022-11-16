import React from 'react'
import './nav.css'
import {HiHome, HiUser, HiBookOpen} from 'react-icons/hi'
import {HiPhone} from 'react-icons/hi2'
import {IoConstruct} from 'react-icons/io5'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#root]')

  return (
    <nav>
      <a href='#root' onClick={() => setActiveNav('#root')} className={activeNav === '#root' ? 'active' : ''}><HiHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><HiUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiBookOpen/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><IoConstruct/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><HiPhone/></a>
    </nav>  
  )
}

export default Nav