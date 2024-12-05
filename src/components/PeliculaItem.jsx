import React from 'react';

const PeliculaItem = ({ pelicula, editarPelicula, eliminarPelicula }) => {
  return (
    <div className="pelicula-item">
      <img
        src={pelicula.image}
        alt={`Imagen de ${pelicula.title}`}
        className="imagen"
      />
      <h3>{pelicula.title}</h3>
      <p>Fecha de Estreno: {pelicula.date}</p>
      <p>Director: {pelicula.director}</p>
      <button onClick={() => editarPelicula(pelicula)}>Editar</button>
      <button onClick={() => eliminarPelicula(pelicula.id)}>Borrar</button>
    </div>
  );
};

export default PeliculaItem;
