import React from 'react'
import CartItem from '../CartItem/CartItem'


const CartList = ({cart}) => {
  return (
    <>
    {
      cart.map((item) => {
        return (
          <CartItem key={item.id} item={item} />
        )
      })
    }
  </>
  )
}

export default CartList