import React from 'react';
import '../styles/ProfileMenu.css';

const ProfileMenu = () => {
  return (
    <nav className="ProfileMenu">
      <img src="../../public/LogoS.png" alt="Logo" />
      <section>
        <h2>Gestión</h2>
        <button>
          <i className="fa-solid fa-desktop"></i>
          <p>Principal</p>
        </button>
        <button>
          <i className="fa-solid fa-user"></i>
          <p>Datos del Usuario</p>
        </button>
        <button>
          <i className="fa-solid fa-right-to-bracket"></i>
          <p>Cerrar Sesión</p>
        </button>
      </section>
    </nav>
  );
};

export default ProfileMenu;
