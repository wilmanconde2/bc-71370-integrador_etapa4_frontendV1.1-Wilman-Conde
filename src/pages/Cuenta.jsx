import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitulo from '../hooks/useTitulo';
import UsuariosContext from '../context/UsuariosContext';

const Cuenta = () => {
  useTitulo('Cuenta');

  const { username, setUsername, email, setEmail, password, setPassword, message, handleRegister } =
    useContext(UsuariosContext);

  return (
    <>
      <div className='section-login'>
        {/* <div className='section-login__info'>
          <form action='' className='login' method='post' target='_blank'>
            <div>
              <img src='../img/logo-color-bg-transparent.svg' alt='logo' />
            </div>
            <fieldset>
              <legend>Inicia sesión en Toyland</legend>
              <div className='section-login__login'>
                <div>
                  <div className='lbl-user'>
                    <label htmlFor='user'>Usuario</label>
                  </div>
                  <input id='user' name='user' type='text' placeholder='Nombre de usuario/Email' required disabled />
                </div>
                <div>
                  <div className='pass'>
                    <label htmlFor='pass' className='lbl-pass'>
                      Contraseña
                    </label>
                    <Link to='#' disabled>¿Olvidaste tu contraseña?</Link>
                  </div>
                  <input id='pass' name='pass' type='text' placeholder='Contraseña' required disabled />
                </div>
                <div className='login__button'>
                  <button className='btn-enviar'>Enviar</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div> */}

        {/* Inicio formulario registro */}
        <div className='section-registro'>
          <form onSubmit={handleRegister} className='section-registro__form'>
            <fieldset className='registro'>
              <legend>Regístrate</legend>
              <div className='registro__username'>
                <div className='lbl'>
                  <label htmlFor='name'>Nombre de usuario: *</label>
                </div>
                <div>
                  <input
                    type='text'
                    id='username'
                    name='username'
                    placeholder='Nombre de usuario'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className='registro__email'>
                <div className='lbl'>
                  <label htmlFor='mail'>Email: *</label>
                </div>
                <div>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Correo Electrónico'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete='username'
                  />
                </div>
              </div>
              <div className='registro__password'>
                <div className='lbl'>
                  <label htmlFor='password'>Contraseña: *</label>
                </div>
                <div>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Contraseña'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete='new-password'
                  />
                </div>
              </div>
              <div className='registro__button'>
                <button type='submit'>Enviar</button>
              </div>
            </fieldset>
          </form>
          {message && <p>{message}</p>}
          <div className='contact3'>
            <img src='../img/buzz.webp' alt='buzz' />
          </div>
        </div>
        {/* <!-- FIN FORMULARIO --> */}
      </div>
    </>
  );
};

export default Cuenta;
