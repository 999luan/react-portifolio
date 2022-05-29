import React from "react";
import "./experience.css";
import { HiBadgeCheck} from "react-icons/hi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Qual o nivel das minhas habilidades?</h5>
      <h2>Experiência</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desenvolvedor</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>

            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>

            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>

            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Iniciante</small>
              </div>
            </article>

            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Iniciante</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Unity/Unreal</h4>
                <small className="text-light">Intermediario</small>
              </div>
            </article>

            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Iniciante</small>
              </div>
            </article>

            
          </div>
        </div>

        

        {/* divisao entre areas */}

        <div className="experience__artesao">
          <h3>Habilidades Profissionais</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>SCRUM</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>

            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Tratamento de Audio</h4>
                <small className="text-light">Avançado</small>
              </div>
            </article>

            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Edição de imagens</h4>
                <small className="text-light">Intermediario</small>
              </div>
            </article>

            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Edição de videos</h4>
                <small className="text-light">Intermediario</small>
              </div>
            </article>

            <article className="experience__details">
            <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Marketing Digital</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>

           
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Resolução de problemas</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
