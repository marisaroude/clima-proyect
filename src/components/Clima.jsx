import React from 'react'

export const Clima = ({resultado}) => {
    const {name,wind,main} = resultado

    if(!name) return null 


    //agregar logica de vaciar el form

  return (
    <div className='card-panel white col s12'>
        <div className='black-text'>
           <h2>El clima de { name } es: </h2>
           <p className='temperatura'>
               {main.temp} C°
           </p>
        </div>
    </div>
  )
}

