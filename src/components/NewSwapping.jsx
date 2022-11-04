import React from 'react'
import "../assets/css/custom-input.css";

const NewSwapping = () => {
  return (
    <div className='container wrapping-color-grey'>
        <div className='mb-4 row text-center'>
            <h2>Crea tu propio intercambio</h2>
            <label htmlFor="">Llena los campos siguientes y haz clic en el botón <b>"Crear Intercambio"</b></label>
        </div>
        <div className="row">
            <div className="col-8 mx-auto">
            <form>
                <div className="form-group">
                    <label htmlFor="">Nombre del intercambio</label>
                    <input className="custom-input" type="" id="" name="" placeholder="Escribe un nombre" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Numero de participantes</label>
                    <select className='custom-input' defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>Cuántos participan?</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">fecha final de registro</label>
                    <input className="custom-input" type="date" id="" name="" placeholder="" />
                </div>
                <div className="form-group">

                </div>
                <div className="form-group d-grid gap-2">
                    <button className='btn btn-success'>Crear Intercambio</button><br />
                    
                </div>
            </form>  
            </div>
        </div>
    </div>
  )
}

export default NewSwapping;