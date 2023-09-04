import React from 'react';
import '../styles/Home.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Nav></Nav>
      <main className="Home">
        <article>
          <h1>Bienvenido a la IPS MataZanos</h1>
          <h2>Tu salud en nuestras Manoz</h2>
        </article>
        <section>
          <img src="../../public/Viejitos.png" alt="imagenes" />
          <img src="../../public/Doctores.png" alt="imagenes" />
          <img src="../../public/Familia.png" alt="imagenes" />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Home;
