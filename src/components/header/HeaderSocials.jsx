import React from 'react'
import {FaLinkedin, FaGithub, FaKaggle} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com/in/mert-kipcak' target="_blank" rel='noreferrer' className='social'><FaLinkedin/></a>
      <a href='https://github.com/mertkipcak' target="_blank" rel='noreferrer' className='social'><FaGithub/></a>
      <a href='https://www.kaggle.com/mertkipcak' target="_blank" rel='noreferrer' className='social'><FaKaggle/></a>
    </div>
  )
}

export default HeaderSocials