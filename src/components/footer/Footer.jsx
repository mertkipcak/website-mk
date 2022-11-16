import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <a href="#root" className="footer__logo">MERT KIPCAK</a>

      <ul className='permalinks'>
        <li><a href='#root'>Home</a></li>
        <li><a href='#about'>About me</a></li>
        <li><a href='#experience'>Experiences</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact Me</a></li>
      </ul>

    </footer>
  )
}

export default Footer