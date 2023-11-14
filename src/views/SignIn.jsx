import React from 'react';
import '../styles/DataUser.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SignIn = () => {
  return (
    <>
      <Nav></Nav>
      <main className="DataUser">
        <form action="">
          <h2>Ingresa tus datos</h2>
          <div>
            <i className="fa-solid fa-user"></i>
            <input type="text" placeholder="Nombre" />
          </div>
          <div>
            <i className="fa-solid fa-square-envelope"></i>
            <input type="text" placeholder="Correo electronico" />
          </div>
          <div>
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder="Contraseña" />
          </div>
          <div>
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder="Repite la contraseña" />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </main>
      <Footer></Footer>
    </>
  );
};

export default SignIn;
