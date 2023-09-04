import React from 'react';
import '../styles/DataUser.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SignIn = () => {
  return (
    <div>
      <Nav></Nav>
      <main className="DataUser">
        <form action="">
          <h2>Ingresa tus datos</h2>
          <div>
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder="Nombre" />
          </div>
          <div>
            <i class="fa-solid fa-square-envelope"></i>
            <input type="text" placeholder="Correo electronico" />
          </div>
          <div>
            <i class="fa-solid fa-lock"></i>
            <input type="text" placeholder="Contraseña" />
          </div>
          <div>
            <i class="fa-solid fa-lock"></i>
            <input type="text" placeholder="Repite la contraseña" />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default SignIn;
