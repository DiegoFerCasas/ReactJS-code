import React from 'react'
import ItemCounter from '../ItemCounter/ItemCounter';
import './TitleDetail.css'

const TitleDetail = ({producto}) => {
  return (
    
    <div className='container_detail'>
        <img src={producto.cover_image} alt={producto.title} />
        <h2>{producto.title}</h2>
        <h2>{producto.price}</h2>
        <p>{producto.description}</p>
        
        <ItemCounter initial={1} stock={producto.stock}/>
    </div>
  )
}

export default TitleDetail