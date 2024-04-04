import React, { useContext } from 'react'
import './CartButton.css'
import { ShoppingContext } from '../../context/ShoppingContext'

const CartButton = () => {
  const{totalQuantity}=useContext(ShoppingContext)
  return (
    <>
      <li class="nav-item">
        <a class="nav-link" id="cart" href="#"><span><img src="./icon-car.png" width="20"
          alt="carrito de compras" /></span><span id="numeroPeque" width="10">{totalQuantity == 0 ? null : totalQuantity}</span>Carrito de compra</a>
      </li>
      <br />
      </>
      )
    }

export default CartButton