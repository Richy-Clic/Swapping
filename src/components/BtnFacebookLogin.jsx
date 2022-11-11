import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../assets/Firebase/firebase-config";

import {redirect} from 'react-router-dom';
import '../assets/css/btnFacebook.css'

const singInWithFacebook = () => {
alert()
    redirect("../pages/Home.jsx")
    // const provider = new FacebookAuthProvider();
    // signInWithPopup(auth, provider)
    // .then(response => {
    //     console.log(response.user.email, response.user.displayName, response.user.photoURL);
    // })
    // .catch(err => {
    //     console.log(err.message);
    // })
    
}




export const BtnLoginFacebook = () => {

    return (
        <>
            <button 
                className='facebook-btn' 
                onClick={singInWithFacebook}>
                <span className='tag-btn-facebook'><BsFacebook /></span>
                <span className='tag-facebook'>Continuar con Facebook</span>
            </button>
        </>
    );
};
