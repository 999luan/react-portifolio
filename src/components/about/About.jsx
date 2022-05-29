import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Algumas coisas</h5>
      <h2>Sobre Luan</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="sobre mim img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <small>0.5 Anos Junior Dev</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small> Seja o primeiro</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>+20 projetos</small>
            </article>
          </div>
          <p>Dev, Filosofo, e Artista, focado no desenvolvimento humano e tecnologico, acredita que o potencial criativo deve ser redirecionado na fusão e criação das novas areas tecnologicas</p>
          <details>
           
          <summary> <p> => Porque voce se denomina Artesão digital?</p></summary>
          <ol>
            <li><p>
            Não existem barreiras no campo da arte, o limite para criações é a
            própria criatividade do criador. Aqueles com experiencia no campo da
            culinária, com certeza possuem uma série de ideais, sobre possíveis
            criações que facilitariam o meio onde vivem, resolver problemas é
            algo natural do humano puramente limitado pela falta de
            acessibilidade as opções de como resolver problemas. Em outros
            tempos o conhecimento era algo de difícil acesso, o próprio
            conhecimento necessário para compreender o conhecimento armazenado
            em nossa sociedade era algo distante do cidadão comum. E como isso é
            diferente de alguém que já produz as aplicações? "A diferença está
            na forma de pensar sobre isso."" Normalmente (porem não é uma
            realidade dominante) as pessoas condicionadas a área da programação
            e semelhantes, vem de uma carreira voltada as ciências exatas, onde
            a logica é o fator predominante, é algo muito útil em situações já
            existentes, porem raramente cria novas situações que trariam o
            avanço. Encontramos aqui um paradoxo, visto que a capacidade de
            criar associada erroneamente as capacidades artísticas, é algo que
            provem das necessidades do ambiente, em um ambiente limitado por uma
            área, as criações também são limitadas. É ai que entra um conceito
            filosófico muito importante chamado dialética, que estabelece lados
            de uma questão partindo de um ponto inicial (tese),gerando um ponto
            contrario (antítese), e por fim combinando as duas áreas pelo meio
            (síntese), a conciliação destes conhecimentos gera novos campos de
            exploração, visto que uma informação confronta e ao mesmo tempo
            completa a outra. "A conciliação destes conhecimentos gera novos
            campos de exploração, visto que uma informação confronta e ao mesmo
            tempo completa a outra." Todos deveriam ter acesso a ferramentas que
            facilitam a criação de ferramentas, porque uma boa ferramenta é
            definida pelo uso, e seu uso é definido pela necessidade. Isso abre
            uma infinita demanda de possibilidades de mercado. Antes isso era
            impossível, mas a internet e a simplificação das coisas (que é
            consequência do surgimento de novas tecnologias) vem tornando isso
            cada vez mais acessível. A qualidade e a variedade destas criações é
            análoga a acessibilidade. Em um mundo onde existem pessoas dedicadas
            a criação destas ferramentas, podemos dizer que a criatividade
            humana é estimulada, e surge o que eu gosto de chamar de Artesão
            digital.
          </p></li>
          </ol>
          
          </details>
          <a href="#contact" className="btn btn-primary">Vamos conversar?</a>
        </div>
      </div>
    </section>
  );
};

export default About;
