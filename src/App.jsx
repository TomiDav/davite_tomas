import { useState } from 'react'
import Card from './components/card/Card'
import Form from './components/form/Form'

function App() {
  const [grupo, setGrupo] = useState({});

  function guardarGrupo(artista, cancion, album) {
    setGrupo({artista, cancion, album})
    
  }

  return(
  <>
    <Form guardarGrupo= {guardarGrupo}/>
    {
      Object.keys(grupo).length === 0 ? undefined : (
          <Card artista={grupo.artista} cancion={grupo.cancion} album={grupo.album}  />
      )
    }
   
  </>
  )
}

export default App
