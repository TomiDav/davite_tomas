import { useState } from "react";

export default function Form(props) {
  const [cancion, setCancion] = useState("");
  const [artista, setArtista] = useState("");
  const [album, setAlbum] = useState("");
  const [error, setError] = useState();

  function onChangeCancion(e) {
    setCancion(e.target.value);
  }

  function onChangeArtista(e) {
    setArtista(e.target.value);
  }

  function onChangeAlbum(e) {
    setAlbum(e.target.value);
  }

  function handeSubmit(e) {
    e.preventDefault();
    if ((cancion.length < 3 && cancion[0] === " ") || artista.length < 6) {
      setError("Por favor chequea que la información sea correcta");
    } else {
      setError()
      props.guardarGrupo(cancion, artista,album,error)
    }
  }

  return (
    <>
      <form onSubmit={handeSubmit}>
        <label htmlFor="cancion">Cancion: </label>
        <input
          type="text"
          id="cancion"
          value={cancion}
          onChange={onChangeCancion}
        />

        <label htmlFor="artista">Artista: </label>
        <input
          type="text"
          id="artista"
          value={artista}
          onChange={onChangeArtista}
        />

        <label htmlFor="album">Album: </label>
        <input type="text" id="album" value={album} onChange={onChangeAlbum} />

        <button type="submit">Reproducir</button>
      </form>

      {error && <h1>{error}</h1>}
    </>
  );
}
