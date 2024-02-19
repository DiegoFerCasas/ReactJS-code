import './App.css'
import NavBar from './Layout/NavBar/NavBar'
import ItemListContainer from './Layout/ItemListContainer/ItemListContainer'
import TitleDetailcontainer from './Layout/TitleDetailContainer/TitleDetailcontainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Layout/Error/Error'

function App() {

  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/formato/:categoryId' element={<ItemListContainer />} />
          <Route path='/detalle/:id' element={<TitleDetailcontainer />} />
          <Route path='*' element={<Error />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
