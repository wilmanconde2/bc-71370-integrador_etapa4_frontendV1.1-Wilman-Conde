import { useContext } from 'react';
import useTitulo from '../hooks/useTitulo';
import Card from '../components/Card';
import ProductosContext from '../context/ProductosContext';

const Inicio = () => {
  useTitulo('Inicio');

  const { productos } = useContext(ProductosContext);

  return (
    <>
      <main>
        <section className='section-cards'>
          <header className='section-cards__header'>
            <div className='img-top'>
              <span>(This page will render products from the backend in about a minute)</span>
              <span>
                (Esta pagina renderizará productos desde el backend en un minuto aproximadamente)
              </span>
              <img src='./img/niño.webp' alt='niños' />
            </div>
            <h1>Toyland... Just for fun!!</h1>
            <h2>Envío gratis por ordenes mayores a $39!</h2>
          </header>

          <div className='cards-container' id='contenedorCards'>
            {productos &&
              productos.map((producto) => <Card key={producto.id} producto={producto} />)}
          </div>
        </section>
      </main>
    </>
  );
};

export default Inicio;
