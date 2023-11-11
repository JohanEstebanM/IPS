import React from 'react';

const InfoMembers = (props) => {
  const { Name, Email, Phone, Linkedin } = props;
  return (
    <div className="Info">
      <h3>{Name}</h3>
      <section>
        <div>
          <a href={`mailto:${Email}`} target="_blank" rel="noopener noreferrer">
            <i className="fa-regular fa-envelope"></i>
          </a>
          <p>Email</p>
        </div>
        <div>
          <a
            href={`https://api.whatsapp.com/send?phone=${Phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <p>Telefono</p>
        </div>
        <div>
          <a href={Linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <p>Linkedin</p>
        </div>
      </section>
    </div>
  );
};

export default InfoMembers;
