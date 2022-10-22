import { useEffect, useState } from 'react'

import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import './App.css'

function App() {

  // state del formulario
  const [ busqueda, guardarBusqueda ] = useState ({
    ciudad: '',
    pais: ''
  })

  const {ciudad, pais } = busqueda

  useEffect(() => {
    console.log(ciudad)
  }, [ciudad, pais])

  return (
    
        <>
          <Header
            titulo='Clima App'
          />

          <div className="container-form">
            <div className="container">
              <div className="col m6 s12">
                <Formulario 
                  busqueda={busqueda}
                  guardarBusqueda={guardarBusqueda}
                />
              </div>

              <div className="col m6 s12">
                columna 2
              </div>
            </div>
          </div>
        </>
  )
}

export default App
