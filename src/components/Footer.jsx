import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import "../assets/css/footer.css";

const Footer = () => {

    return(
        <footer className='pt-5 pb-3 my-4 px-3 mb-0 footer-container'>
            <div className="row mx-auto">
                <div className="col-12 text-center">
                    <h3>Pasos para iniciar un intercambio</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <p>1.Paso numero uno</p>
                    Inicia sesión
                </div>
                <div className="col-md-4">
                    <p>2.Paso numero dos</p>
                    crea una sala de intercambio e invita a tus amigos y familiares
                </div>
                <div className="col-md-4">
                    <p>3.Paso numero tres</p>
                    Mira a quien le vas a regalar y comprale un obsequio

                </div>
            </div>
            <div className="row">
                <div className="col-12 mx-auto text-center">
                    <span className='icon-fb-footer'><FaFacebookSquare /></span>
                    <span className='icon-ig-footer'><BsInstagram /></span>
                </div>
            </div>
            <hr />
            <p className='text-center text-muted'>2022 Company, Inc</p>
            
        </footer>
    )

}

export default Footer;