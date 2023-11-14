import React, { useState } from 'react';
import '../styles/DataUser.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { PostLogin } from '../services/PostLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await PostLogin(email, password);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Nav></Nav>
      <main className="DataUser">
        <form onSubmit={handleSubmit}>
          <h2>Ingresa tus datos</h2>
          <div>
            <i className="fa-solid fa-square-envelope"></i>
            <input
              type="text"
              placeholder="Correo electronico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Iniciar Sesion</button>
        </form>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Login;
