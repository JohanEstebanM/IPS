import React from 'react';
import '../styles/Dashboard.css';
import Footer from '../components/Footer';
import ProfileMenu from '../components/ProfileMenu';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const handleCreateClick = () => {
    Navigate('/Create');
  };
  const handleReadClick = () => {
    Navigate('/Read');
  };
  return (
    <>
      <div className="Dashboard">
        <ProfileMenu />
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
              <button onClick={handleCreateClick}>Pedir cita</button>
              <button onClick={handleReadClick}>Ver citas</button>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
