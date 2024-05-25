import axios from 'axios';

export async function PostLogin(email, password) {
  try {
    const data = { email, password };
    const response = await axios.post('http://localhost:3000/tu-ruta', data);
    return response.status === 200;
  } catch (error) {
    console.log(error);
    return false;
  }
}
