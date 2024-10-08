import { createContext, useState } from 'react';
import urls from '../main.jsx';
import { helperPeticionesHttp } from '../helpers/helper-peticiones-http';

const UsuariosContext = createContext();

const UsuariosProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(urls.urlREG, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.mensaje);
      }

      console.log('Usuario registrado:', data.usuario);
      setUsername('');
      setEmail('');
      setPassword('');
      setMessage('Registro exitoso! Inicia sesión.');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setMessage('Hubo un error en el registro.');
    }
  };

  const data = {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    message,
    setMessage,
    handleRegister,
  };

  return <UsuariosContext.Provider value={data}>{children}</UsuariosContext.Provider>;
};

export { UsuariosProvider };
export default UsuariosContext;
