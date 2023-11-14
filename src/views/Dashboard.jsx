import React from 'react';
import '../styles/Dashboard.css';
import Footer from '../components/Footer';
import ProfileMenu from '../components/ProfileMenu';

const Dashboard = () => {
  return (
    <>
      <div className="Dashboard">
        <ProfileMenu></ProfileMenu>
        <div>
          <header>
            <h1>Bienvenido Johan</h1>
            <div>
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <input type="text" placeholder="Buscar" />
            </div>
          </header>
          <main className="DashboardMain">
            <img src="Medicos.png" alt="Medicos" />
            <section>
              <button>Pedir cita</button>
              <button>Ver citas</button>
            </section>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
