import React from 'react';
import logo from '../assets/logo.png';
// import { BtnLoginFacebook } from '../components/BtnLoginFacebook';
// import { BtnLoginGoogle } from '../components/BtnLoginGoogle';
// import '../assets/css/form-login.css'
// import { MdOutlineAddReaction, MdAddCircle } from "react-icons/md";

const Login = () => {
    
   
    return (
        <div className="row">

            <div className="col-12 text-center">
                <img src={logo} alt="Logo swapping"/>
                {/* <h4>Intercambio navideño</h4> */}
            </div>
            <div className="col-md-4 offset-md-3 mx-auto text-center">
                <form>
                    <input type="text" className='form-control mb-1' placeholder='Nombre de usuario'/>
                    <input type="text" className='form-control mb-2' placeholder='Password' />
                    <button className='btn btn-success'>INICIA SESION</button>
                </form>


                {/* <div className='strike'>
                    <span className='text-middle-line'>O</span>
                </div> */}
                {/* <div className='mb-1'>
                    <BtnLoginFacebook/>
                </div>
                <div className="mb-1">
                    <BtnLoginGoogle />
                </div> */}
            </div>

            {/* <div className='text-center mt-3'>
                <p className='registrate'>No tienes una cuenta aún? <a href='#'>Registrate</a></p>
            </div> */}

        </div>
    );
};

export default Login;