import React from 'react';
import '../styles/Nav.css';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  };
  const handleLoginClick = () => {
    navigate('/Login');
  };

  const handleSignInClick = () => {
    navigate('/SignIn');
  };
  return (
    <nav className="NavHome">
      <div>
        <button onClick={handleHome}>
          <img src="LogoSn.png" alt="Logo" />
          <p>MataZanos</p>
        </button>
      </div>
      <section>
        <button onClick={handleLoginClick}>Iniciar Sesion</button>
        <button onClick={handleSignInClick}>Registrarse</button>
      </section>
    </nav>
  );
};

export default Nav;
