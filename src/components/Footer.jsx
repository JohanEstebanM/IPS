import React from 'react';
import '../styles/Footer.css';
import InfoMembers from './InfoMembers';

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
        <InfoMembers
          Name={'Juguito de borojo'}
          Email={'morenojimenezjohanesteban@gmail.com'}
          Phone={'3218312687'}
          Linkedin={
            'https://www.linkedin.com/in/johan-esteban-moreno-jim%C3%A9nez-71051b265/'
          }
        ></InfoMembers>
        <hr />
        <InfoMembers
          Name={'xLolaMentox'}
          Email={'eiderrojas054@gmail.com'}
          Phone={'3127240524'}
          Linkedin={'https://www.linkedin.com/in/kevin-rojas-373095271'}
        ></InfoMembers>
        <hr />
        <InfoMembers
          Name={'Cable Doble A'}
          Email={'maicolaroyave10@gmail.com'}
          Phone={'3001188573'}
          Linkedin={'http://www.linkedin.com/in/maicolaa'}
        ></InfoMembers>
      </section>
    </footer>
  );
};

export default Footer;
