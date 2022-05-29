import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>O que eu ofereço?</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Scrum</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BsCheck2 className='service__list-icon'/>
            <p>Metodologias ágeis</p>
          </li>
          <li>
            <BsCheck2 className='service__list-icon'/>
            <p>Gestão de equipes</p>
          </li>
          <li>
            <BsCheck2 className='service__list-icon'/>
            <p>Aplicação de métodos filosóficos</p>
          </li>
          <li>
            <BsCheck2 className='service__list-icon'/>
            <p>Azure/Trello</p>
          </li>
          <li>
            <BsCheck2 className='service__list-icon'/>
            <p>Certificado Scrum Foundation</p>
          </li>
          </ul>
          

        </article>

        {/* FIM SCRUM */}
        <article className='service'>
          <div className="service__head">
            <h3>Programação</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BsCheck2 className='service__list-icon'/>
            <p>HTML</p>
          </li>
          <li>
            <BsCheck2 className='service__list-icon'/>
            <p>Css</p>
          </li>
          <li>
            <BsCheck2 className='service__list-icon'/>
            <p>Js + React</p>
          </li>
          <li>
            <BsCheck2 className='service__list-icon'/>
            <p>Manipulação de dados em API</p>
          </li>
          <li>
            <BsCheck2 className='service__list-icon'/>
            <p>Logica de programação</p>
          </li>
          </ul>
          

        </article>

        {/* FIM WEBDEV */}


        <article className='service'>
          <div className="service__head">
            <h3>Criação de conteudo</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BsCheck2 className='service__list-icon'/>
            <p>Edição de Audio</p>
          </li>
          <li>
            <BsCheck2 className='service__list-icon'/>
            <p>Edição de Video</p>
            
          </li>
          <li>
            <BsCheck2 className='service__list-icon'/>
            <p>Escrita/Roteiro/Processo Criativo</p>
          </li>
          <li>
            <BsCheck2 className='service__list-icon'/>
            <p>Marketing Digital</p>
          </li>
          <li>
            <BsCheck2 className='service__list-icon'/>
            <p>Planejamento Empresarial</p>
          </li>
          
          </ul>

        </article>
      </div>


    </section>
  )
}

export default Services