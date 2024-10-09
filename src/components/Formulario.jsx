import { useContext, useEffect, useState } from 'react';
import ProductosContext from '../context/ProductosContext';
import DragDrop from '../components/DragDrop/DragDrop.jsx';

const Formulario = () => {
  const [foto, setFoto] = useState('');
  const [srcImagen, setSrcImagen] = useState('');
  const formInit = {
    id: null,
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    detalles: '',
    foto: '',
  };

  const [form, setForm] = useState(formInit);

  const { crearProductoContext, actualizarProductoContext, productoAEditar, setProductoAEditar } =
    useContext(ProductosContext);

  useEffect(() => {
    if (productoAEditar) {
      setForm(productoAEditar);
      setSrcImagen(productoAEditar.foto);
    } else {
      setForm(formInit);
    }
  }, [productoAEditar, setProductoAEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.id === null) {
        const productoNuevoConImagen = { ...form, ...foto };
        await crearProductoContext(productoNuevoConImagen);
      } else {
        const productoEditadoConImagen = { ...form, ...foto };
        await actualizarProductoContext(productoEditadoConImagen);
      }
      handleReset();
    } catch (error) {
      console.error('[handleSubmit]', error);
    }
  };

  const handleChange = (e) => {
    const { type, name, checked, value } = e.target;

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value ?? '',
    });
  };

  const handleReset = () => {
    setForm(formInit);
    setFoto('');
    setSrcImagen('');
    setProductoAEditar(null);
  };

  return (
    <>
      <h3 className='h3-formulario'>{productoAEditar ? 'Editar Producto' : 'Agregar Producto'}</h3>
      <div className='contenedor-form'>
        <form className='contenedor-form__alta' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='lbl-nombre'>Nombre: *</label>
            <input
              type='text'
              name='nombre'
              id='lbl-nombre'
              value={form.nombre}
              onChange={handleChange}
              placeholder='Nombre'
              required
            />
          </div>
          <div>
            <label htmlFor='lbl-precio'>Precio: *</label>
            <input
              type='text'
              name='precio'
              id='lbl-precio'
              value={form.precio}
              onChange={handleChange}
              placeholder='Precio'
              required
            />
          </div>
          <div>
            <label htmlFor='lbl-stock'>Stock: *</label>
            <input
              type='text'
              name='stock'
              id='lbl-stock'
              value={form.stock}
              onChange={handleChange}
              placeholder='Stock'
              required
            />
          </div>
          <div>
            <label htmlFor='lbl-marca'>Marca: *</label>
            <input
              type='text'
              name='marca'
              id='lbl-marca'
              value={form.marca}
              onChange={handleChange}
              placeholder='Marca'
              required
            />
          </div>
          <div>
            <label htmlFor='lbl-categoria'>Categoría: *</label>
            <input
              type='text'
              name='categoria'
              id='lbl-categoria'
              value={form.categoria}
              onChange={handleChange}
              placeholder='Categoria'
              required
            />
          </div>
          <div>
            <label htmlFor='lbl-detalles'>Detalles: *</label>
            <input
              type='text'
              name='detalles'
              id='lbl-detalles'
              value={form.detalles}
              onChange={handleChange}
              placeholder='Detalles'
              required
            />
          </div>
          {/* <div className='div-foto' >
            <label htmlFor='lbl-foto'>Foto: *</label>
            <input
              type='text'
              name='foto'
              id='lbl-foto'
              value={form.foto}
              onChange={handleChange}
              placeholder='Arrastrar aquí'
              required
            />
          </div> */}
          <DragDrop setFoto={setFoto} srcImagen={srcImagen} setSrcImagen={setSrcImagen} />

          <input className='btn-form-alta guardar' type='submit' value={productoAEditar ? 'Actualizar' : 'Guardar'} />
          <button className='btn-form-alta limpiar' type='reset' onClick={handleReset}>
            Limpiar
          </button>
        </form>
      </div>
    </>
  );
};

export default Formulario;
