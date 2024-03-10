import React, { createContext, useState } from 'react';

export const ShoppingContext = createContext()

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const agregarCarroDeCompras = (producto,cantidad) => {
console.log (producto)
console.log (cantidad)
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
      cart

    }} >
      {children}
    </ShoppingContext.Provider>
  )
}




export default CartProvider