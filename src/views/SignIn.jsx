import React, { useState } from 'react';
import '../styles/DataUser.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { PostSingIn } from '../services/PostSignin';

const SignIn = () => {
  const [userData, setUserData] = useState({
    id_usuario: '',
    nombre: '',
    apellido: '',
    telefono: '',
    correo_electronico: '',
    contrasena: '',
    repetir_contrasena: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.contrasena !== userData.repetir_contrasena) {
      alert('Las contraseñas no coinciden');
    }
    try {
      await PostSingIn(
        userData.id_usuario,
        userData.nombre,
        userData.apellido,
        userData.telefono,
        userData.correo_electronico,
        userData.contrasena,
        1,
      );
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
            <i className="fa-solid fa-user"></i>
            <input
              type="number"
              placeholder="CC"
              name="id_usuario"
              value={userData.id_usuario}
              onChange={handleChange}
            />
          </div>
          <div>
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={userData.nombre}
              onChange={handleChange}
            />
          </div>
          <div>
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              placeholder="Apellido"
              name="apellido"
              value={userData.apellido}
              onChange={handleChange}
            />
          </div>
          <div>
            <i className="fa-solid fa-user"></i>
            <input
              type="number"
              placeholder="Telefono"
              name="telefono"
              value={userData.telefono}
              onChange={handleChange}
            />
          </div>
          <div>
            <i className="fa-solid fa-square-envelope"></i>
            <input
              type="text"
              placeholder="Correo electronico"
              name="correo_electronico"
              value={userData.correo_electronico}
              onChange={handleChange}
            />
          </div>
          <div>
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Contraseña"
              name="contrasena"
              value={userData.contrasena}
              onChange={handleChange}
            />
          </div>
          <div>
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Repite la contraseña"
              name="repetir_contrasena"
              value={userData.repetir_contrasena}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </main>
      <Footer></Footer>
    </>
  );
};

export default SignIn;
