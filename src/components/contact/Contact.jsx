import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2uhc8sv', 'template_tqqngrv', form.current, 'pjYtDCeHA7AOe8bAJ')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>É só chamar</h5>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>luancsilva@protonmail.com</h5>
          <a href="mailto:luancsilva@protonmail.com" target="_blank">
            Enviar Email
          </a>
        </article>
        
        <article className="contact__option">
          <BsInstagram className='contact__option-icon'/>
          <h4>Instagram</h4>
          <h5>@setimosol</h5>
          <a href="https://www.instagram.com/setimosol/" target="_blank">
            Mandar mensagem
          </a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+5541999601497</h5>
          <a href="https://api.whatsapp.com/send?phone=554199601497" target="_blank">
            Mandar mensagem
          </a>
        </article>
        </div>
        {/* Fim de contato*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu nome' required />
          <input type="email" name='email' placeholder='Seu email' required />
          <textarea name="message" rows="7" placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact