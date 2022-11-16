import React from 'react'
import './header.css'
import CTA from './CTA'
import portrait from '../../assets/portrait.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Mert Kipcak</h1>
        <h5 className="text-light">Aspiring software developer and data scientist</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={portrait} alt='Myself' className='me'/>
        </div>
      </div>
    </header>
  )
}

export default Header