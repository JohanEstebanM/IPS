import React from 'react';

const InfoMaicol = () => {
  return (
    <div className="Info">
      <h3>Cable Doble A</h3>
      <section>
        <div>
          <a
            href="mailto:maicolaroyave10@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-regular fa-envelope"></i>
          </a>
          <p>Email</p>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=3001188573"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <p>Telefono</p>
        </div>
        <div>
          <a
            href="http://www.linkedin.com/in/maicolaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <p>Linkedin</p>
        </div>
      </section>
    </div>
  );
};

export default InfoMaicol;
