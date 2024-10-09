import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.scss';
import { ProductosProvider } from './context/ProductosContext.jsx';
import { CarritoProvider } from './context/CarritoContext.jsx';
import { UsuariosProvider } from './context/UsuariosContext.jsx';
const urlPROD = import.meta.env.VITE_BACKSERVER_PRODUCTS;
const urlCART = import.meta.env.VITE_BACKSERVER_CARRITO;
const urlREG = import.meta.env.VITE_BACKSERVER_REGISTRO;
const urlUPL = import.meta.env.VITE_BACKSERVER_UPLOAD;
const urlAPI = import.meta.env.VITE_API_KEY;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuariosProvider>
      <ProductosProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </ProductosProvider>
    </UsuariosProvider>
  </StrictMode>,
);

export default {
  urlPROD,
  urlCART,
  urlAPI,
  urlREG,
  urlUPL,
};
