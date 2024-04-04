import React, { useContext } from 'react'
import './ShopingCart.css'
import { ShoppingContext } from '../../context/ShoppingContext'
import { Link } from 'react-router-dom'

const ShopingCart = () => {
  const { cart } = useContext(ShoppingContext)


  return (

    <>

      {cart.length == 0
        ?
        <>
          <main id="productoComprasPage">
            <section id="seccionCompras" className="h-100">
              <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12">
                    <div className="card card-registration card-registration-2" style={{ "border-radius": " 15px" }} >
                      <div className="card-body p-0">
                        <div className="row g-0">
                          <div id="seccionCompras-carritoVacio" className="col-lg-8">
                            <div className="p-5">
                              <div className="d-flex justify-content-between align-items-center mb-5">
                                <h1 className="fw-bold mb-0 text-black">No tienes items en el carrito <i className="fa fa-frown-o"
                                  aria-hidden="true"></i> </h1>
                                <h6 className="mb-0 text-muted">0 items</h6>
                              </div>
                              <hr className="my-4" />

                              <div className="pt-5">
                                <h6 className="mb-0">
                                  <Link to={'/'} className="text-body"><i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</Link>
                                </h6>
                              </div>
                            </div>
                          </div>

                          <div id="seccionCompras-carrito-resumen" className="col-lg-4 bg-grey">

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
        :
        <main id="productoComprasPage">
          <section id="seccionCompras" className="h-100">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12">
                  <div className="card card-registration card-registration-2" style={{ "border-radius": " 15px" }} >
                    <div className="card-body p-0">
                      <div className="row g-0">
                        <div id="seccionCompras-carritoVacio" className="col-lg-8">
                          <div className="p-5">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                              <h1 className="fw-bold mb-0 text-black">No tienes items en el carrito <i className="fa fa-frown-o"
                                aria-hidden="true"></i> </h1>
                              <h6 className="mb-0 text-muted">0 items</h6>
                            </div>
                            <hr className="my-4" />
                            <div id="seccionCompras-carrito-items">
                              <div className='p-5'>
                                <div className="col-md-2 col-lg-2 col-xl-2">
                                  <img
                                    src=".${element.titulo.image}"
                                    className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-3">
                                  <h6 className="text-muted">${element.titulo.type.capitalize()}</h6>
                                  <h6 className="text-black mb-0">${element.titulo.name}</h6>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">


                                  <input min="0" name="quantity" value="${element.cantidad}" type="number"
                                    className="form-control form-control-sm" />


                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                  <h6 className="mb-0">COP$${element.precio * element.cantidad}</h6>
                                </div>
                                <button id="${element.titulo.id}" className="col-md-1 col-lg-1 col-xl-1 text-end elimina-item text-muted"><i className="fas fa-times"></i></button>
                                <hr className="my-4" />
                              </div>
                            </div>
                            <div className="pt-5">
                              <h6 className="mb-0">
                                <Link to={'/'} className="text-body"><i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</Link>
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div id="seccionCompras-carrito-resumen" className="col-lg-4 bg-grey">
                          <div className='seccionComprasRow row mb-4'>
                            <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                            <hr className="my-4" />

                            <div className="d-flex justify-content-between mb-4">
                              <h5 className="text-uppercase">items VAR</h5>
                              <h5 id="subtotalPrice">COP$ 0.00</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-4">
                              <h5 className="text-uppercase">Taxes</h5>
                              <h5>19%</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-4">
                              <h5 className="text-uppercase">Shipping</h5>
                              <h5 id="ship"></h5>
                            </div>
                            <h5 className="text-uppercase mb-3">Give code</h5>

                            <div className="mb-5">
                              <div className="form-outline">
                                <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                                <label className="form-label" for="form3Examplea2">Enter your code</label>
                              </div>
                            </div>

                            <hr className="my-4" />

                            <div className="d-flex justify-content-between mb-5">
                              <h5 className="text-uppercase">Total price</h5>
                              <h5 id="totalPrice" >COP$ 0.00</h5>
                            </div>

                            <button type="button" className="boton btn btn-outline-success"
                              data-mdb-ripple-color="dark">Register</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      }
    </>
  )
}

export default ShopingCart