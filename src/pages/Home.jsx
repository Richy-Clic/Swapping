import React from 'react'
<<<<<<< HEAD
import NewSwappings from '../components/NewSwappings'
import PublicSwappings from '../components/PublicSwappings'
import { Link } from "react-router-dom";
export const Home = () => {
=======
import Logo from '../assets/img/logo.png'

const Home = () => {
>>>>>>> 782df6364df2571922088f7d4eb75d55fc600c34
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-6 bg-primary px-4 py-2">
          <h2>Swapping public list</h2>
            <p>En esta parte habrá dos apartados en la misma tabla, iniciando con los intercambios en los que estoy, después los publicos o en los que no estás participando.</p>
            <PublicSwappings />
        </div>
        <div className="col-6 bg-danger px-4 py-2">
        <h2>My swappings</h2>
            <Link to="/newswapping"><button type="" className='btn btn-primary'>Nuevo intercambio</button></Link>
            <p>Aqui puedes crear nuevos intercambios y se visualizarán en este apartado</p>
            <hr />
           <NewSwappings />

        </div>
<<<<<<< HEAD
        
=======
      </div>
>>>>>>> 782df6364df2571922088f7d4eb75d55fc600c34
    </div>
  )
}

export default Home;
