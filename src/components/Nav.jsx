import React from 'react';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <nav className="NavHome">
      <div>
        <img src="../../public/Logo.png" alt="Logo" />
        <p>MataZanos</p>
      </div>
      <section>
        <div>
          <p>Iniciar Sesion</p>
        </div>
        <div>
          <p>Registrarse</p>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
