import React from "react";
import "./testimonials.css";
import AVTR2 from "../../assets/avatar1.jpg";
import AVTR1 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.png";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: "Louise Bauer",
    review:
      "Luan foi meu assistente administrativo por 7 meses, trabalhando para a minha empresa entre outubro de 2020 a abril de 2021. Durante todo este período, Luan se mostrou extremamente eficiente e competente nas funções em que exerceu, atendendo de forma excelente todas as demandas existentes. Sua conduta pessoal e profissional é de caráter incontestável, se destacando por características como agilidade, proatividade, criatividade e eficiência em resolução de problemas. É alguém que aprende rápido e propõe soluções de forma proativa e dinâmica, além de ser um ótimo colega de equipe.",
  },
  {
    avatar: AVTR2,
    name: "Janaina Martins",
    review: "Luan é dedicado e muito comprometido!",
  },
  {
    avatar: AVTR3,
    name: "Jhonatan Nielsen",
    review: "Profissional atencioso e pró ativo com soluções efetivas!",
  },
  {
    avatar: AVTR4,
    name: "Raffa Moreira",
    review: "Luan é f*da!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Feedbacks</h5>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
     >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="testemunho foto" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
