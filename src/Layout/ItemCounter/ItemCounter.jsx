import React, { useState } from 'react'
import './ItemCounter.css'
import { Link } from 'react-router-dom'

const ItemCounter = ({ initial, stock, onAdd }) => {

  const [contador, setContador] = useState(1);

  const decrementar = () => {
    if (contador > initial) {
      setContador(contador - 1)
    }

  }
  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }

  }
  const agregarCarro = () => {
    onAdd(contador)
  }


  return (
    <>
      <div className="row mb-5">
        <div className="col-md-4 col-6 mb-3">
          <label className="mb-2 d-block">Cantidad</label>
          <div className="input-group mb-3" style={{ "width": "170px;" }}>

            <button onClick={decrementar} className="btn btn-white border border-secondary px-2" type="button" id="button-addon1" data-mdb-ripple-color="dark">
              <i className="fas fa-minus" aria-hidden="true"></i>
            </button>

            <input type="text" className="form-control text-center border border-secondary" placeholder={contador} aria-label="Example text with button addon" aria-describedby="button-addon1" />

            <button onClick={incrementar} className="btn btn-white border border-secondary px-2" type="button" id="button-addon2" data-mdb-ripple-color="dark">
              <i className="fas fa-plus" aria-hidden="true"></i>
            </button>

          </div>
        </div>
        <div className='col-md-7'>
          <label className="mb-2 d-block ">Orden</label>
          <div className='d-flex orderButtons'>
            <Link to={'/cart'} className="btn btn-warning shadow-0" >Buy now</Link>
            <button onClick={agregarCarro} className="btn btn-primary shadow-0"><i className="me-1 fa fa-shopping-basket" aria-hidden="true"></i>Add to cart</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default ItemCounter;