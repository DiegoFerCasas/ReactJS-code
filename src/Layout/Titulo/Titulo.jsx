import React from 'react'
import { Link } from 'react-router-dom'

const Titulo = ({producto}) => {
  return (
    <Link to={`/detalle/${producto.id}`}>

      <div key={producto.id} className='container'>
          <h2>{producto.title}</h2>
          <img src={producto.cover_image} alt={producto.title} />
      </div> 

    </Link>
  )
}

export default Titulo