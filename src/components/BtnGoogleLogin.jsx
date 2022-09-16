import React from 'react';
import GoogleLogin from 'react-google-login';
import '../assets/css/btnGoogle.css'
import { FcGoogle } from "react-icons/fc";

export const BtnLoginGoogle = () => {
    
    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <>
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                render={renderProps => (
                    <button className="google-btn"  onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <FcGoogle/> 
                        <span className='tag-btn-google'>Continue with Google</span>
                    </button>
                )}

            />
        </>
    );
};
