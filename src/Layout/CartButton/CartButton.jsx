import React from 'react'

const CartButton = () => {
  return (
    <>
      <li class="nav-item">
        <a class="nav-link" id="cart" href="#"><span><img src="./icon-car.png" width="20"
          alt="carrito de compras" /></span><span id="numeroPeque" width="10">0</span>Carrito de compra</a>
      </li></>
  )
}

export default CartButton