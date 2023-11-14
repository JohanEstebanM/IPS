import React from 'react';
import '../styles/DataUser.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <>
      <Nav></Nav>
      <main className="DataUser">
        <form action="">
          <h2>Ingresa tus datos</h2>
          <div>
            <i className="fa-solid fa-square-envelope"></i>
            <input type="text" placeholder="Correo electronico" />
          </div>
          <div>
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder="Contraseña" />
          </div>
          <button type="submit">Iniciar Sesion</button>
        </form>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Login;
