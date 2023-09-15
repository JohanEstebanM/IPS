import React from 'react';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <nav className="NavHome">
      <div>
        <img src="../../public/LogoSn.png" alt="Logo" />
        <p>MataZanos</p>
      </div>
      <section>
        <button>Iniciar Sesion</button>
        <button>Registrarse</button>
      </section>
    </nav>
  );
};

export default Nav;
