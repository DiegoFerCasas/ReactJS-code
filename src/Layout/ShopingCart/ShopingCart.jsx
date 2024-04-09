import React, { useContext } from 'react'
import './ShopingCart.css'
import CartList from '../CartList/CartList'
import { ShoppingContext } from '../../context/ShoppingContext'
import { Link } from 'react-router-dom'

const ShopingCart = () => {
  const { cart } = useContext(ShoppingContext)


  return (

    <>

      {cart.length === 0
        ?
        <>
          <main id="productoComprasPage">
            <section id="seccionCompras" className="h-100">
              <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12">
                    <div className="card card-registration card-registration-2" style={{ "borderRadius": " 15px" }} >
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
                  <div className="card card-registration card-registration-2" style={{ "borderRadius": " 15px" }} >
                    <div className="card-body p-0">
                      <div className="row g-0">
                        <div id="seccionCompras-carritoVacio" className="col-lg-8">
                          <div className="p-5">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                              <h1 className="fw-bold mb-0 text-black">Shopping cart</h1>
                              <h6 className="mb-0 text-muted">0 items</h6>
                            </div>
                            <hr className="my-4" />
                            <div id="seccionCompras-carrito-items">
                              {<CartList cart={cart}/>}
                              
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