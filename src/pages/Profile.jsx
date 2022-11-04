import React from 'react'
import userUnknown from "../assets/img/user-unknown.png";
const Profile = () => {

  const img_profile = false ? "../" : userUnknown
  return (
    <div className='row'>
      <div className="col-md-6 px-4 mt-3 mx-auto wrapping-color-grey color-white">

        <div className='text-center'>
          <img src={img_profile} alt="" placeholder='avatar profile' width={"20%"}/>
        </div>
        <br />
        <label htmlFor="">Nombre</label>
        <input className='custom-input' type="text" />
        <label htmlFor="">Detalle de mis obsequios favoritos</label>
        <textarea className='custom-input' name="" id="" rows="5"></textarea>
        <button className='btn btn-primary'>Guardar Cambios</button>
      </div>
     
    </div>
  )
}

export default Profile