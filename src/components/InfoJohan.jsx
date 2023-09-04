import React from 'react';

const InfoJohan = () => {
  return (
    <div className="Info">
      <h3>Johan Esteban Moreno Jimenez</h3>
      <section>
        <div>
          <a href="mailto:morenojimenezjohanesteban@gmail.com">
            <i class="fa-regular fa-envelope"></i>
          </a>
          <p>Email</p>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=3218312687">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <p>Telefono</p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/johan-esteban-moreno-jim%C3%A9nez-71051b265/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <p>Linkedin</p>
        </div>
      </section>
    </div>
  );
};

export default InfoJohan;