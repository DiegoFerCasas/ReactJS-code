import React, { useState, useEffect } from 'react'
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("./articles.json");
                const data = await response.json();
                if (categoryId) {
                    const filterProducts = data.filter((p) => p.format == categoryId)
                   
                    setProductos(filterProducts)
                } else {
                    setProductos(data)
                }
            } catch (error) {
                console.log("error")
            }
        }
        fetchData()
    }, [categoryId]
    )

    return (
        <main>
            <div>
                <h1>Draven's Bookstore</h1>
                {productos.length == 0 ? <h1>CARGANDO</h1> : <ItemList productos={productos} />}
            </div>
        </main>
    )
}

export default ItemListContainer