import React from 'react';
import '../styles/Home.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Nav></Nav>
      <main className="Home">
        <header>
          <h1>Bienvenido a la IPS MataZanos</h1>
          <h2>Tu salud en nuestras Manoz</h2>
        </header>
        <section>
          <img src="Viejitos.png" alt="imagenes" />
          <img src="Doctores.png" alt="imagenes" />
          <img src="Familia.png" alt="imagenes" />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Home;
