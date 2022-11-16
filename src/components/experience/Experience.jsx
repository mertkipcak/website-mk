import React from 'react'
import './experience.css'
import { FaCheck} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experiences</h2>

      <div className="containter experience__container">
        <div className="experience__softwaredev">
          <h3>Software Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>C++</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheck className='experience__details-icon' />
              <div>
              <h4>Java</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__datascience">
          <h3>Data Science</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>R</h4>
                <small>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>Excel</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>Redis</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience