import axios from 'axios';

export async function PostSingIn(
  id_usuario,
  nombre,
  apellido,
  telefono,
  correo_electronico,
  contrasena,
  id_rol,
) {
  try {
    const data = {
      id_usuario,
      nombre,
      apellido,
      telefono,
      correo_electronico,
      contrasena,
      id_rol,
    };

    const response = await axios.post('http://localhost:3000/tu-ruta', data);
    return response;
  } catch (error) {
    console.log(error);
  }
}
