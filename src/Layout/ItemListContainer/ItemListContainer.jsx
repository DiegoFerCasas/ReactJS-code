import React, { useState, useEffect } from 'react'
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { formatoType } = useParams();

    useEffect(() => {

        const db = getFirestore()
        const misTitulos =
            formatoType ?
                query(collection(db, "library"), where("format", '==', formatoType))
                :
                collection(db, 'library');

        getDocs(misTitulos)
            .then((res) => {
                const newTitle = res.docs.map((doc) => {
                    const data = doc.data()
                    return { id: doc.format, ...data }
                })
                setProductos(newTitle)
            })

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