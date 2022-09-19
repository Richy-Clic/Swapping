import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Logo from '../assets/img/logo.png'


const Header = () => {
  return (
<<<<<<< HEAD
    <nav className="navbar navbar-expand-lg navbar-light bg-dark px-5 py-4">
      <Link className="nav-link" to="/"><img src={Logo} alt="Logo swapping" width={90}/> </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link text-white" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/register">Profile</Link>
          </li>
       
        </ul>
      </div>
    </nav>
=======
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark px-5 py-4">
        <Link className="nav-link" to="/"><img src={Logo} alt="Logo swapping" width={90}/> </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/register">Register</Link>
            </li>
        
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
>>>>>>> 782df6364df2571922088f7d4eb75d55fc600c34
  )
}

export default Header