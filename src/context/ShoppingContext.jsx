import React, { createContext, useState } from 'react';
import CartButton from '../Layout/CartButton/CartButton';

export const ShoppingContext = createContext()

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const agregarCarroDeCompras = (producto, cantidad) => {
    setCart([...cart, producto])
  
  }
    

  const eliminarTitulo = () => {

  }
  const vaciarCarro = () => {

  }

  const cantidadCarro = () => {

  }
  const totalCarro = () => {

  }

  return (
    <ShoppingContext.Provider value={{
      cart,
      total,
      quantity,
      agregarCarroDeCompras

    }} >
      {children}
    </ShoppingContext.Provider>
  )
}




export default CartProvider