import React from 'react';
import logo from '../assets/img/logo.png';
import { BtnLoginFacebook } from '../components/BtnFacebookLogin'
import '../assets/css/login.css'
import "../assets/css/custom-input.css";

const Login = () => {
    
   
    return (
        <div className="row pt-3 pb-5">
            <div className="col-lg-6 col-xl-5 wrapping-color-blue text-center">
                <img src={logo} alt="Logo swapping" width={"60%"}/>
                <div className="px-5 pt-3">

                    <form>
                        <input type="text" className='custom-input' placeholder='Nombre de usuario'/>
                        <input type="text" className='mb-2 custom-input' placeholder='Password' />
                        <div className="d-grid mt-3">
                            <button className='btn btn-success'>INICIA SESION</button>
                        </div>
                    </form>

                    <div className='strike'>
                        <span className='text-middle-line'>O</span>
                    </div>
                        <BtnLoginFacebook />
                    <div className='row'>
                  
                    </div>

                    <div className='row mt-2 mb-4'>
                    {/* //google button */}
                    </div>

                    <div className='text-center mt-3'>
                        <p className='registrate'>No tienes una cuenta aún? <a href='#'>Registrate</a></p>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Login;