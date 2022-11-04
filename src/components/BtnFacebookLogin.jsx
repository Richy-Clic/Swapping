import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { BsFacebook } from "react-icons/bs";
import '../assets/css/btnFacebook.css'

export const BtnLoginFacebook = () => {

    // const componentClicked = (response) => {
    //     console.log(response);               
    // }

    const responseFacebook = (response) => {
        console.log(response);               
    }
    return (
        <>
            <FacebookLogin
                appId="612652996670051"
                // autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook} 
                render={renderProps => (
                    <button className="facebook-btn" onClick={renderProps.onClick}>
                        {<BsFacebook /> } <span className='tag-btn-facebook'>Continuar con Facebook</span>
                    </button>
                )}            
            />
        </>
    );
};
