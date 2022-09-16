import React from 'react';
import logo from '../assets/img/logo.png';
import { BtnLoginFacebook } from '../components/BtnFacebookLogin';
import { BtnLoginGoogle } from '../components/BtnGoogleLogin';
import '../assets/css/login.css'

const Login = () => {
    
   
    return (
        <div className="row">

            <div className="col-12 text-center">
                <img src={logo} alt="Logo swapping"/>
                {/* <h4>Intercambio navideño</h4> */}
            </div>
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8 mx-auto text-center">
                <form>
                    <input type="text" className='form-control mb-1' placeholder='Nombre de usuario'/>
                    <input type="text" className='form-control mb-2' placeholder='Password' />
                    <button className='btn btn-success'>INICIA SESION</button>
                </form>


                {/* <div className='strike'>
                    <span className='text-middle-line'>O</span>
                </div> */}
                <div className='strike'>
                    <span className='text-middle-line'>O</span>
                </div>

                <div className='row'>
                <BtnLoginFacebook/>
                </div>

                <div className='row mt-2 mb-4'>
                <BtnLoginGoogle/>
                </div>
                
            </div>

            {/* <div className='text-center mt-3'>
                <p className='registrate'>No tienes una cuenta aún? <a href='#'>Registrate</a></p>
            </div> */}

        </div>
    );
};

export default Login;