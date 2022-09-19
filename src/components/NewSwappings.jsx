import React from 'react'
import "../assets/css/swapping.css"

const data = [
    {
        id: 1,
        name: "Swapping",
        owner: "Ricardo De anda"
    },
    {
        id: 2,
        name: "Swapping",
        owner: "Lalo"
    },
    {
        id: 3,
        name: "Swapping",
        owner: "Boris el animal"
    }
]

const NewSwappings = () => {
  return (
    <table className='table table-sm table-hover'>
        <thead>
        <tr>
            <th>N</th>
            <th>Nombre del intercambio</th>
            <th>Propietario</th>
        </tr>
        </thead>
        <tbody>
            {
                data.map(swapping => {
                    return <tr className='swapping-tr'>
                        <td>{swapping.id}</td>
                        <td>{swapping.name}</td>
                        <td>{swapping.owner}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
  )
}

export default NewSwappings;