import { helperPeticionesHttp } from '../../helpers/helper-peticiones-http';

const dragDrop = ({ setFoto, srcImagen, setSrcImagen }) => {
  const arrayEventos = ['dragenter', 'dragleave', 'dragover', 'drop'];

  arrayEventos.forEach((eventName) => {
    document.body.addEventListener(eventName, (e) => e.preventDefault());
  });

  const handleDrop = (e) => {
    const dataTransfer = e.dataTransfer;
    const files = dataTransfer.files;
    handleFiles(files); // promesa
  };

  const handleChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = async (files) => {
    try {
      const file = files[0];
      await uploadFile(file);
      previewFile(file);
    } catch (error) {
      console.error('[handleFiles]:', error);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.addEventListener('loadend', () => {
      setSrcImagen(reader.result);
    });
  };

  const uploadFile = async (file) => {
    const formData = new FormData();

    try {
      formData.append('foto', file);

      const url = import.meta.env.VITE_BACKSERVER_UPLOAD;

      const options = {
        method: 'POST',
        body: formData,
      };

      const imageUp = await helperPeticionesHttp(url, options);
      setFoto(imageUp);
    } catch (error) {
      console.error('[uploadFile]:', error);
    }
  };

  return (
    <div className='drop-area' onDrop={handleDrop}>
      <input type='file' id='lbl-foto' accept='image/*' onChange={handleChange} />
      <label className='drop-area-button' htmlFor='lbl-foto'>
        Selecciona o
      </label>
      <p>
        arrastra la imagen <b>aquí</b> *
      </p>

      {srcImagen && (
        <div className='drop-area-image'>
          <img src={srcImagen} alt='' />
        </div>
      )}
    </div>
  );
};

export default dragDrop;
