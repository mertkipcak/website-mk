import React from 'react'
import './about.css'
import latifi from '../../assets/latifi.jpg'
import {FaCode, FaUsers, FaFolder} from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={latifi} alt='Myself'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaCode className='about__icon'/>
              <h5>Experience</h5>
              <small>Nothing lol</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Absolutely no-one</small>
            </article>
            <article className='about__card'>
              <FaFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>Some</small>
            </article>
            <article className='about__card'>
              <FaFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>Some</small>
            </article>
          </div>
          
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dolorem distinctio et ipsa eos. Ducimus autem consequatur maiores nam atque quibusdam cupiditate? Laboriosam nam vero nisi dignissimos ratione veniam placeat et assumenda non provident perspiciatis cupiditate minus excepturi quia itaque, beatae soluta. Ipsa, libero, officiis sit quo odit fugit omnis blanditiis doloremque commodi optio corrupti cumque sint placeat ipsum eveniet id non sed exercitationem. Sed, est. Voluptate a et dolorem.
            </p>

            <a href='#contact' className='btn btn-primary'> Useless button </a>
        </div>
      </div>
    </section>
  )
}

export default About