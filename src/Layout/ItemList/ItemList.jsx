import React from 'react'
import './ItemList.css'
import Titulo from '../Titulo/Titulo'

const ItemList = ({ productos }) => {
  return (
    <>
      {
        productos.map((producto) => {
          return (
            <Titulo key={producto.id} producto={producto} />
          )
        })
      }
    </>

  )
}

export default ItemList