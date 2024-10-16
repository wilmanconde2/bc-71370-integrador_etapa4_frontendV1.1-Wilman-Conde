import { useRoutes } from 'react-router';
import Inicio from '../pages/Inicio';
import Alta from '../pages/Alta';
import Nosotros from '../pages/Nosotros';
import Contacto from '../pages/Contacto';
import Cuenta from '../pages/Cuenta';
import Carrito from '../pages/Carrito';
import NoEncontrado from '../pages/NoEncontrado';
import ResultadoBusquedaPage from '../pages/ResultadoBusquedaPage';

const Rutas = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Inicio />,
    },
    {
      path: '/alta',
      element: <Alta />,
    },
    {
      path: '/nosotros',
      element: <Nosotros />,
    },
    {
      path: '/contacto',
      element: <Contacto />,
    },
    {
      path: '/cuenta',
      element: <Cuenta />,
    },
    {
      path: '/carrito',
      element: <Carrito />,
    },
    {
      path: '/busqueda',
      element: <ResultadoBusquedaPage />,
    },
    {
      path: '/*',
      element: <NoEncontrado />,
    },
  ]);
  return routes;
};

export default Rutas;
