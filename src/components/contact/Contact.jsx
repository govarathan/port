import React from 'react'
import './Contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {BsMessenger,BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form= useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v6s7c15', 'template_v0ul06u', form.current, 'POTyrtYk304dmDx8T')
    e.target.reset();
    // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
         <TfiEmail className='contact__option-icon'/>
                     <h4>Email</h4>
                     <h5>govarathan02@gmail.com</h5>
                     <a href="mailto:govarathan02@mail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
         <BsMessenger className='contact__option-icon'/>
                     <h4> Messenger</h4>
                     <h5>_gov_02</h5>
                     <a href="https://m.me/_gov_02" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
         <BsWhatsapp className='contact__option-icon'/>
                     <h4>WhatsApp</h4>
                     <h5>+917200690655</h5>
                     <a href="https://wa.me/917200690655" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End the contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          
          <input type="email" name="email" placeholder='Your Email' required/>
          
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact