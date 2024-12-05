import React from 'react';

const FormularioPelicula = ({ peliculaEditar, nuevaPelicula, cambio, agregarPelicula, actualizarPelicula }) => {

  // Función para manejar el envío del formulario
  const manejarSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    if (peliculaEditar) {
      actualizarPelicula();
    } else {
      agregarPelicula();
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <h2>{peliculaEditar ? 'Editar Película' : 'Agregar Película'}</h2>
      
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={nuevaPelicula.title}
        onChange={cambio}
        required // Campo obligatorio
      />
      
      <input
        type="text"
        name="director"
        placeholder="Director"
        value={nuevaPelicula.director}
        onChange={cambio}
        required // Campo obligatorio
      />
      
      <input
        type="url"
        name="image"
        placeholder="URL de la Imagen"
        value={nuevaPelicula.image}
        onChange={cambio}
        required // Campo obligatorio
      />
      
      <input
        type="date"
        name="date"
        placeholder="Fecha de Estreno"
        value={nuevaPelicula.date}
        onChange={cambio}
        required // Campo obligatorio
      />
      
      <button type="submit">
        {peliculaEditar ? 'Actualizar Película' : 'Agregar Película'}
      </button>
    </form>
  );
};

export default FormularioPelicula;
