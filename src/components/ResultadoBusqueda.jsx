import React from 'react';
import { Link } from 'react-router-dom';

const ResultadoBusqueda = ({ productosFiltrados }) => {
  return (
    <div className='resultados-busqueda'>
      {productosFiltrados.length > 0 ? (
        productosFiltrados.map((producto) => (
          <div key={producto.id} className='resultado-busqueda__item'>
            <Link to={`/producto/${producto.id}`}>
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
            </Link>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ResultadoBusqueda;
