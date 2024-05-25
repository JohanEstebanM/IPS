import React from 'react';
import '../styles/Footer.css';
import InfoMembers from './InfoMembers';

const Footer = () => {
  return (
    <footer>
      <h2>Descripcion del trabajo:</h2>
      <p>
        El software de asignación de citas desarrollado para la IPS Matazanos es una
        solución integral diseñada para optimizar y agilizar el proceso de programación de
        citas médicas. Esta herramienta permite a los pacientes programar fácilmente citas
        en línea, acceder a la disponibilidad en tiempo real y mantener un historial
        detallado de citas anteriores.
      </p>
      <h2>Trabajo hecho por:</h2>
      <section>
        <InfoMembers
          Name={'Dios'}
          Email={'morenojimenezjohanesteban@gmail.com'}
          Phone={'3218312687'}
          Linkedin={
            'https://www.linkedin.com/in/johan-esteban-moreno-jim%C3%A9nez-71051b265/'
          }
        />
        <hr />
        <InfoMembers
          Name={'xLolaMentox'}
          Email={'eiderrojas054@gmail.com'}
          Phone={'3127240524'}
          Linkedin={'https://www.linkedin.com/in/kevin-rojas-373095271'}
        />
        <hr />
        <InfoMembers
          Name={'Cable Doble A'}
          Email={'maicolaroyave10@gmail.com'}
          Phone={'3001188573'}
          Linkedin={'http://www.linkedin.com/in/maicolaa'}
        />
      </section>
    </footer>
  );
};

export default Footer;
