import React, { useState, useEffect } from 'react'
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { formatoType } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/articles.json");
                const data = await response.json();
                
               
                if (formatoType) {
                    const filterProducts = data.filter((p) => p.format == formatoType)
                    setProductos(filterProducts)
                } else {
                    setProductos(data)
                    
                }
            } catch (error) {
            console.log("error")
            }
        }
        
        fetchData()
    }, [formatoType]
    )
    
    return (
        <main className='container-fluid cardContainer'>
            <h1>Draven's Bookstore</h1>
            <div className='container'>
                <div className='row d-flex titleCardContainer'>
                    {productos.length == 0 ? <h1>CARGANDO</h1> : <ItemList productos={productos} />}
                </div>
            </div>
        </main>
    )
}

export default ItemListContainer