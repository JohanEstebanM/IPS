import React from 'react';

const InfoKevin = () => {
  return (
    <div className="Info">
      <h3>Kevin Kaled Rojas Sánchez</h3>
      <section>
        <div>
          <a href="mailto:eiderrojas054@gmail.com">
            <i class="fa-regular fa-envelope"></i>
          </a>
          <p>Email</p>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=3127240524">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <p>Telefono</p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/kevin-rojas-373095271">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <p>Linkedin</p>
        </div>
      </section>
    </div>
  );
};

export default InfoKevin;
