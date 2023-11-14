import React from 'react';
import '../styles/FormAppointments.css';
import ProfileMenu from '../components/ProfileMenu';
import Footer from '../components/Footer';

const ReadAppointment = () => {
  return (
    <div>
      <main className="Appointments">
        <ProfileMenu></ProfileMenu>
        <section>
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
            <div>
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Contraseña" />
            </div>
            <div>
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Contraseña" />
            </div>
            <div>
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Contraseña" />
            </div>
            <button type="submit">Iniciar Sesion</button>
          </form>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ReadAppointment;
