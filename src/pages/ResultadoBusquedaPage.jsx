import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card.jsx'

const ResultadosBusquedaPage = () => {
  const location = useLocation();
  const { productosFiltrados } = location.state || { productosFiltrados: [] };

  return (
    <>
      <div className='resultados-busqueda'>
        <h1>Resultados de la Búsqueda</h1>
        <div className='resultados-busqueda'>
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => <Card key={producto.id} producto={producto} />)
          ) : (
            <p>No se encontraron resultados para tu búsqueda.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ResultadosBusquedaPage;
