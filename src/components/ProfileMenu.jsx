import React from 'react';
import '../styles/ProfileMenu.css';

const ProfileMenu = () => {
  return (
    <nav className="ProfileMenu">
      <img src="../../public/LogoS.png" alt="Logo" />
      <section>
        <h2>Gestión</h2>
        <div>
          <i className="fa-solid fa-desktop"></i>
          <p>Principal</p>
        </div>
        <div>
          <i className="fa-solid fa-stethoscope"></i>
          <p>Lista Médicos</p>
        </div>
        <div>
          <i className="fa-solid fa-user"></i>
          <p>Datos del Usuario</p>
        </div>
        <div>
          <i className="fa-solid fa-right-to-bracket"></i>
          <p>Cerrar Sesión</p>
        </div>
      </section>
    </nav>
  );
};

export default ProfileMenu;
