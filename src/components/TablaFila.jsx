import { useContext } from 'react';
import ProductosContext from '../context/ProductosContext';

const TablaFila = ({ producto }) => {
  if (!producto || !producto.id) {
    console.error("Producto inválido:", producto);
    return null; 
  }

  const { setProductoAEditar } = useContext(ProductosContext);
  const handleEditar = (producto) => {
    setProductoAEditar(producto);
  };

  const { eliminarProductoContext, setProductoAEliminar } = useContext(ProductosContext);
  const handleEliminar = () => () => {
    if (window.confirm(`¿Estás seguro de eliminar el producto ${producto.nombre}?`)) {
      eliminarProductoContext(producto.id);
    } else {
      setProductoAEliminar(null);
    }
  };

  return (
    <tr>
      <td>
        <img className='img-row' src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.marca}</td>
      <td className='min-width'>{producto.stock}</td>
      <td className='min-width'>{producto.categoria}</td>
      <td className='min-width'>{producto.detalles}</td>
      <td>
        <button className='btn-items editar' onClick={() => handleEditar(producto)}>
          Editar
        </button>
        <button className='btn-items borrar' onClick={handleEliminar(producto)}>
          Borrar
        </button>
      </td>
    </tr>
  );
};

export default TablaFila;
