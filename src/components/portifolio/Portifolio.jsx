import React from "react";
import "./portifolio.css";
import IMG1 from "../../assets/portifolio1.gif";
import IMG2 from "../../assets/portifolio2.gif";
import IMG3 from "../../assets/portifolio3.gif";
import IMG4 from "../../assets/portifolio4.gif";
import IMG5 from "../../assets/portifolio5.gif";
import IMG6 from "../../assets/portifolio6.gif";



const data = [
  {
    id:1,
    image: IMG1,
    title:"Jogo Genius (Web)",
  },
  {
    id:2,
    image: IMG2,
    title:"Listagem de produtos",
  },
  {
    id:3,
    image: IMG3,
    title:"E-Commerce",
  },
  {
    id:4,
    image: IMG4,
    title:"Cadastro de Cliente",
  },
  {
    id:5,
    image: IMG5,
    title:"Modelo 3d + Esqueleto + Texturas",
  },
  {
  id:6,
  image: IMG6,
  title:"Sistema de movimento e combate em 2d (UNITY)",
}]



const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>Trabalhos Recentes</h5>
      <h2>Portifolio</h2>

      <div className="container portifolio__container">
        {
          data.map(({id,image,title}) =>{
            return(
              <article key={id} className="portifolio__item">
              <div className="portifolio__item-image">
                <img src={image} alt="{title}" />
              </div>
              <h3>{title}</h3>
            </article>
            )
            
          })
        }

       
      </div>
    </section>
  );
};

export default Portifolio;
