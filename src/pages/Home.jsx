import React from 'react'
import Logo from '../assets/img/logo.png'

export const Home = () => {
  return (
    <div className="row mt-3">
        <div className="col-6 bg-primary px-4 py-2">
            <h2>My swappings</h2>
        </div>
        <div className="col-6 bg-danger px-4 py-2">
            <h2>New swappings</h2>
        </div>
        <div className="col-12 bg-warning py-2 px-4">
            <h2>Swapping public list</h2>
        </div>
    </div>
  )
}
