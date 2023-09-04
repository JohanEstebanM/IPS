import React from 'react';
import '../styles/Footer.css';
import InfoJohan from './InfoJohan';
import InfoMaicol from './InfoMaicol';
import InfoKevin from './infoKevin';

const Footer = () => {
  return (
    <footer>
      <h2>Descripcion del trabajo:</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, tempore eum
        laudantium maiores distinctio autem impedit illo voluptates nobis hic possimus
        adipisci, eius veniam vitae incidunt accusantium. Labore, minus nobis.
      </p>
      <h2>Trabajo hecho por:</h2>
      <section>
        <InfoJohan></InfoJohan>
        <hr />
        <InfoMaicol></InfoMaicol>
        <hr />
        <InfoKevin></InfoKevin>
      </section>
    </footer>
  );
};

export default Footer;
