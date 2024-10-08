import { useContext } from 'react';
import TablaFila from './TablaFila';
import ProductosContext from '../context/ProductosContext';

const Tabla = () => {
  const { productos } = useContext(ProductosContext);

  return (
    <>
      <table className='tabla-alta'>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Marca</th>
            <th className='min-width'>Stock</th>
            <th className='min-width'>Categoría</th>
            <th className='min-width'>Detalles</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos && productos.map((producto, idx) => <TablaFila key={producto.id + idx} producto={producto} />)}
        </tbody>
      </table>
    </>
  );
};

export default Tabla;
