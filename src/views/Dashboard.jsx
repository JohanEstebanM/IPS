import React from 'react';
import '../styles/Dashboard.css';
import Footer from '../components/Footer';
import ProfileMenu from '../components/ProfileMenu';

const Dashboard = () => {
  return (
    <div>
      <div className="Dashboard">
        <ProfileMenu></ProfileMenu>
        <article>
          <header>
            <h1>Bienvenido Johan</h1>
            <div>
              <button type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
              <input type="text" placeholder="Buscar" />
            </div>
          </header>
          <main className="DashboardMain">
            <img src="../../public/Medico.png" alt="Medicos" />
            <section>
              <button>Ver citas</button>
              <button>Pedir cita</button>
              <button>Revisar diagnostico</button>
            </section>
          </main>
        </article>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
