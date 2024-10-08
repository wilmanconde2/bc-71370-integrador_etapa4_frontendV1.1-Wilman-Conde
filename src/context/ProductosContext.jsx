import { createContext, useEffect, useState } from 'react';
import { helperPeticionesHttp } from '../helpers/helper-peticiones-http';
import urls from '../main.jsx';

const ProductosContext = createContext();
const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [productoAEditar, setProductoAEditar] = useState(null);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  useEffect(() => {
    getAllProductos();
  }, []);

  const getAllProductos = async () => {
    try {
      // ! petición al servidor local 8080
      const prods = await helperPeticionesHttp(urls.urlPROD, {});
      // ! petición a mockAPI
      // const prods = await helperPeticionesHttp(urls.urlAPI, {});

      setProductos(prods);
    } catch (error) {
      console.error('[getAllProductos]', error);
    }
  };

  const crearProductoContext = async (nuevoProducto) => {
    try {
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(nuevoProducto),
      };

      const newProducto = await helperPeticionesHttp(urls.urlPROD, options);

      setProductos([...productos, newProducto]);
    } catch (error) {
      console.error('[crearProductoContext]', error);
    }
  };

  const actualizarProductoContext = async (productoEditado) => {
    try {
      const options = {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(productoEditado),
      };

      const urlEdicion = urls.urlPROD + productoEditado.id;
      const editedProduct = await helperPeticionesHttp(urlEdicion, options);
      const nuevoEstadoProductos = productos.map((producto) =>
        producto.id === editedProduct.id ? editedProduct : producto,
      );

      setProductos(nuevoEstadoProductos);
    } catch (error) {
      console.error('[actualizarProductoContext]', error);
    }
  };

  const eliminarProductoContext = async (id) => {
    try {
      const options = {
        method: 'DELETE',
      };
      const urlEliminacion = urls.urlPROD + id;
      await helperPeticionesHttp(urlEliminacion, options);
      const nuevoEstadoProductos = productos.filter((productoAEliminar) => productoAEliminar.id !== id);
      setProductos(nuevoEstadoProductos);
      setProductoAEliminar(null);
    } catch (error) {
      console.error('[eliminarProductoContext]', error);
    }
  };

  const data = {
    productos,
    crearProductoContext,
    actualizarProductoContext,
    productoAEditar,
    setProductoAEditar,
    eliminarProductoContext,
    setProductoAEliminar,
    setProductos,
  };

  return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>;
};

export { ProductosProvider };
export default ProductosContext;
