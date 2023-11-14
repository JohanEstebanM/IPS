import React from 'react';
import '../styles/FormAppointments.css';
import ProfileMenu from '../components/ProfileMenu';
import Footer from '../components/Footer';
import FormCreateA from '../components/FormCreateA';

const CreateAppointment = () => {
  return (
    <div>
      <main className="Appointments">
        <ProfileMenu></ProfileMenu>
        <FormCreateA></FormCreateA>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default CreateAppointment;
