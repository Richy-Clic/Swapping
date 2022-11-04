import React from 'react'


const Swappings = () => {
  return (
    <div className='container wrapping-color-grey color-white'>
        <div className="row text-center">
            <h2>Busca tu Intercambio</h2>
            <p>Ingresa el código para unirte al intercambio.</p>
        </div>
        <div className="row">
            <div className="col-8 mx-auto d-grid grid-2">
                <input className='custom-input' type="text" placeholder='Ingresa el código' />
                <button className='btn btn-primary'>Buscar</button>
            </div>
        </div>
        <hr />
      <div className="row text-center">
        <h2>Lista de Intercambios</h2>
        <p>Estos son los intercambios públicos, te puedes unir a cual quiera.</p>
      </div>
    </div>
  )
}

export default Swappings;