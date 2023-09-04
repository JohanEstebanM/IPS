import React from 'react';

const InfoMaicol = () => {
  return (
    <div className="Info">
      <h3>Maicol Arroyave Alvarez</h3>
      <section>
        <div>
          <a href="mailto:maicolaroyave10@gmail.com">
            <i class="fa-regular fa-envelope"></i>
          </a>
          <p>Email</p>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=3001188573">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <p>Telefono</p>
        </div>
        <div>
          <a href="http://www.linkedin.com/in/maicolaa">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <p>Linkedin</p>
        </div>
      </section>
    </div>
  );
};

export default InfoMaicol;
