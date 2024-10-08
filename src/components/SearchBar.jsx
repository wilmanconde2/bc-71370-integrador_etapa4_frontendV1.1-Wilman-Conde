import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CarritoContext from '../context/CarritoContext';
import ProductosContext from '../context/ProductosContext';
import ResultadoBusqueda from './resultadoBusqueda';

const SearchBar = () => {
  const { carrito } = useContext(CarritoContext);
  const { productos } = useContext(ProductosContext);
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const badgeCarrito = [];
  badgeCarrito.push(carrito.reduce((acc, producto) => acc + producto.cantidad, 0));

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Productos filtrados:', productosFiltrados);
    const productosFiltrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()),
    );
    navigate('/busqueda', { state: { productosFiltrados } });

    // setProductosFiltrados(productosFiltrados);
  };

  return (
    <div className='search-bar'>
      <div className='search-bar__logo-container'>
        <img src='./img/logo-color-bg-transparent.svg' className='search-bar__logo-container__image' alt='logo' />
      </div>

      {/* Formulario de búsqueda */}
      <form className='search-bar__form-container' onSubmit={handleSubmit}>
        <label htmlFor='busqueda' className='search-bar__form-label'>
          Toyland
        </label>
        <input
          type='text'
          className='search-bar__form-search'
          placeholder='¿Qué estás buscando?'
          value={busqueda}
          onChange={handleSearch}
        />
        <input type='submit' value='Buscar' className='search-bar__form-submit' />
      </form>

      {/* Carrito */}
      <div className='search-bar__carrito-container'>
        <Link to='carrito'>
          <img src='./img/cart.svg' alt='carrito' />
          {!carrito.length <= 0 && <span className='carrito-count'>{badgeCarrito}</span>}
        </Link>
      </div>

      <div className='menu-toogle'>
        <label htmlFor='menu' className='menu-toogle__label'>
          <span className='menu-toogle__top-bread'></span>
          <span className='menu-toogle__meat'></span>
          <span className='menu-toogle__bottom-bread'></span>
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
