import React from 'react'
import './portfolio.css'
import mario from '../../assets/mario.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="conatiner portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={mario} alt="Mario" />
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={mario} alt="Mario" />
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={mario} alt="Mario" />
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={mario} alt="Mario" />
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={mario} alt="Mario" />
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={mario} alt="Mario" />
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio