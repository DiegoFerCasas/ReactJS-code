import React, { useState, useContext } from 'react'
import ItemCounter from '../ItemCounter/ItemCounter';
import './TitleDetail.css'
import { ShoppingContext } from '../../context/ShoppingContext';
import { Link } from 'react-router-dom';

const TitleDetail = ({ producto }) => {

  const [cart, setCart] = useState(false)

  const { agregarCarroDeCompras } = useContext(ShoppingContext)

  const adiciona = (count) => {

    setCart(true)
    agregarCarroDeCompras(producto, count)

  }

  return (
    <>
      <main className="container-fluid">
        <section className="py-5">
          <div id="productCardContainer" className="container">

            <div className="gx-5 border rounded-4"><div className="row gx-5">
              <aside id="productImages" className="col-lg-6 orderImgContainer ">

                <img className="rounded-4 fit mx-auto d-block orderImg" src={producto.cover_image} />

              </aside>
              <div id="productInformation" className="col-lg-6 border-start">
                <div className="ps-lg-3">
                  <h4 className="title text-dark">
                    {producto.title} <br />
                    <span>{producto.book}</span>
                  </h4>
                  <div className="d-flex flex-row my-3">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fas fa-star-half-alt" aria-hidden="true"></i>
                      <span className="ms-1">
                        4.5
                      </span>
                    </div>
                    <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1" aria-hidden="true"></i>0 orders</span>
                    <span className="text-success ms-2">En stock { }</span>
                  </div>

                  <div className="mb-3">
                    <span className="h5">COP${producto.price}</span>
                    <span className="text-muted">/per unit</span>
                  </div>

                  <p>
                    {producto.description}
                  </p>

                  <div className="row">
                    <dt className="col-3">Formato:</dt>
                    <dd className="col-9">{producto.format}</dd>

                    <dt className="col-3">Serie</dt>
                    <dd className="col-9">{producto.title}</dd>

                    <dt className="col-3">Autor</dt>
                    <dd className="col-9">{producto.author}</dd>

                  </div>

                  <hr />
                  {cart ? <Link to={'/cart'} className="btn btn-warning shadow-0" >Buy now</Link> : <ItemCounter initial={1} stock={producto.stock} onAdd={adiciona} />}



                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

      </main>

    </>
  )
}

export default TitleDetail