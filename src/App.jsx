import { useEffect, useState } from 'react'

import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"


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
                  <div className="row">
                      <div className="col m6 s12">
                          <Formulario 
                            busqueda={busqueda}
                            guardarBusqueda={guardarBusqueda}
                       
                          />
                      </div>
                      <div className="col m6 s12">
                       Contenedor cards
                      </div>
                  </div>
              </div>
          </div>
        </>
  )
}

export default App
