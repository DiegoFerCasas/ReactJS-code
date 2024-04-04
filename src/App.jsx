import './App.css'
import NavBar from './Layout/NavBar/NavBar'
import ItemListContainer from './Layout/ItemListContainer/ItemListContainer'
import TitleDetailcontainer from './Layout/TitleDetailContainer/TitleDetailcontainer'
import ShopingCart from './Layout/ShopingCart/ShopingCart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Layout/Error/Error'
import CartProvider from './context/ShoppingContext'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
//import { getFirestore, doc, getDoc } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'


function App() {
  const [product, setProduct] = useState(null)


  return (
    <>

      <BrowserRouter>

        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/formato/:formatoType' element={<ItemListContainer />} />
            <Route path='/detalle/:id' element={<TitleDetailcontainer />} />
            <Route path='*' element={<Error />} />
            <Route path='/cart' element={<ShopingCart />} />
          </Routes>
        </CartProvider>

      </BrowserRouter>

    </>
  )
}

export default App
