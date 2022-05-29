import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Luan Silva</a>
      <ul className="permalinks">
        <li><a href="#"></a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portifolio">Portifolio</a></li>
        <li><a href="#testimonials">Recomendaçoes</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; Artesão Digital. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer