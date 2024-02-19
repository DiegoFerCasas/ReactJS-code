import React, { useState, useEffect } from 'react'
import TitleDetail from '../TitleDetail/TitleDetail';
import { useParams } from 'react-router-dom';
import './TitleDetailContainer.css'

const TitleDetailcontainer = () => {

  const [producto, setProducto] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch("/articles.json");
        const data = await response.json();
        const product = data.find((p) => p.id == id)
        setProducto(product);
      } catch (error) {
        console.log("Error en el fetch " + error)
      }
    }

    fetchData()

  }, [])

  return (
    <div>
      <TitleDetail producto={producto} />
    </div>
  )
}

export default TitleDetailcontainer