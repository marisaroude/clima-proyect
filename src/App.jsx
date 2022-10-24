import { useEffect, useState } from 'react'

import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { Clima } from "./components/Clima"

function App() {

  // state del formulario
  const [ busqueda, guardarBusqueda ] = useState ({
    ciudad: '',
    pais: ''
  })

  const [consultar, guardarConsulta] = useState(false)
  const [resultado, guardarResultado] = useState({})

  const {ciudad, pais } = busqueda

  useEffect(() => {
    const consultarApi = async () =>{
      const appID = '093cdb1463ea4f36a20f959af9143e38'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}&units=metric`

      const respuesta = await fetch (url)
      const resultado = await respuesta.json()
      guardarResultado(resultado)
    }
    
    consultarApi();
    //funcion async nos tiene q devolver un result dentro de esta funcion
    //probar un console log. dentro de app tengo q ver la info de postman
  }, [consultar])

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
                            guardarConsulta={guardarConsulta}
                          />
                      </div>
                      <div className="col m6 s12">
                        <Clima
                        resultado={resultado}
                        />
                      </div>
                  </div>
              </div>
          </div>
        </>
  )
}

export default App
