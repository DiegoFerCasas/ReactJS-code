import React from 'react'
import './Titulo.css'
import { Link } from 'react-router-dom'

const Titulo = ({ producto }) => {
  return (
    <>
  
      <div className="col-5 card mb-3 g-1 d-flex" style={{ "maxWidth": "540px" }}>
        <div className="row justify-content-center g-0 cardCover">
          <div className="col-md-5">
            <img src={producto.cover_image} className="img-fluid mx-auto " alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{producto.title}</h5>
              <p className="card-text"><small className="text-body-secondary">{producto.author}</small></p>
              <h6>{producto.book}</h6><p className="card-text">{producto.description}</p>
              <div className='d-flex mb-3 priceDetailContainer'>
                <h6>${producto.price}</h6><Link to={`/detalle/${producto.id}`}><button type="button" className="btn btn-success btn-sm">Detalles</button></Link>
              </div>
              <p className="card-text"><small className="text-body-secondary">Unidades disponibles {producto.stock}</small></p>
              
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Titulo