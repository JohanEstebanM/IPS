import React from 'react';

const FormCreateA = () => {
  return (
    <section>
      <form action="">
        <h2>Ingresa tus datos</h2>
        <div>
          <i className="fa-regular fa-newspaper"></i>
          <select name="Especialidad">
            <option value="">Especialidad</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </div>
        <div>
          <i className="fa-solid fa-user-doctor"></i>
          <select name="Medico">
            <option value="">Medico</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </div>
        <div>
          <i className="fa-regular fa-calendar-days"></i>
          <select name="Fecha">
            <option value="">Fecha</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </div>
        <div>
          <i className="fa-regular fa-clock"></i>
          <select name="Hora">
            <option value="">Hora</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </div>
        <div>
          <i className="fa-solid fa-pencil"></i>
          <input type="text" placeholder="Motivo" />
        </div>
        <button type="submit">Iniciar Sesion</button>
      </form>
    </section>
  );
};

export default FormCreateA;
