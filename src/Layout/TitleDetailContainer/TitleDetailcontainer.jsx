import React, { useState, useEffect } from 'react'
import TitleDetail from '../TitleDetail/TitleDetail';
import { useParams } from 'react-router-dom';
import './TitleDetailContainer.css'
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const TitleDetailcontainer = () => {

  const [producto, setProducto] = useState([]);
  const { id } = useParams()

  useEffect(() => {

    const db = getFirestore()
    const newDoc = doc(db, 'library',id)

    getDoc(newDoc)
      .then(res => {
        const data = res.data()
        const newProduct = { id: res.id, ...data }
        setProducto(newProduct)
      })

  }, [])

  return (
    <div>
      <TitleDetail producto={producto} />
    </div>
  )
}

export default TitleDetailcontainer