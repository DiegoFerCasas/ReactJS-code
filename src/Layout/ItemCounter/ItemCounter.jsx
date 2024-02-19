import React, { useState } from 'react'
import './ItemCounter.css'

const ItemCounter = ({ initial, stock }) => {

    const [contador, setContador] = useState(1);

    const decrementar = () => {
        if (contador > initial) {
            setContador(contador - 1)
        }

    }
    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }

    }
    const agregarCarro = () => {
        alert("agregaste " + contador + "titulos")
    }


    return (
        <div className='contador'>
           
            <button onClick={decrementar}>-</button>

            <p>{contador}</p>

            <button onClick={incrementar}>+</button>
            <br />
            <br />

            <button onClick={agregarCarro}>Agregar al carro</button>
        </div>
    )
}

export default ItemCounter;