import React from 'react'

const Register = () => {
  return (
    <div className='row'>
      <div className="col-12 text-center">


        <form>
          <input type="text" className='form-control mb-1' placeholder='Nombre de usuario'/>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button className='btn btn-success'>INICIA SESION</button>
        </form>
        {/* <form>
          <input type="text" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button type="submit">Register</button>
        </form> */}
      </div>
     
    </div>
  )
}

export default Register