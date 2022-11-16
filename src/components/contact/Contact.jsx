import React, {useRef} from 'react'
import './contact.css'
import {HiMail} from 'react-icons/hi'
import {IoLogoWhatsapp, IoLogoLinkedin} from 'react-icons/io'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r6alr7s', 'template_0qyjhbh', form.current, 'JDbdSFWHB2vQjPW0t')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>mertkipcak4@gmail.com</h5>
            <a href="mailto:mertkipcak4@gamil.com">Send a mail</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+1 (236) 865-1392</h5>
            <a href="mailto:mertkipcak4@gamil.com">Send a message</a>
          </article>
          <article className="contact__option">
            <IoLogoLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>linkedin.com/in/mert-kipcak</h5>
            <a href="https://www.linkedin.com/in/mert-kipcak/">Connect on LinkedIn</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message"required></textarea>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact