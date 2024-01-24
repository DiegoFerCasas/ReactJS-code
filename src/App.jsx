import './App.css'
import NavBar from './Layout/NavBar/NavBar'
import CartButton from './Layout/CartButton/CartButton'
import NavForm from './Layout/NavForm/NavForm'
import ItemList from './Layout/ItemList/ItemList'

function App() {

  return (
    <>
    <NavBar/>
    <CartButton/>
    <NavForm/>
    <ItemList saludo={"Bienvenido a Draven's bookstore !!"}/>
    </>
  )
}

export default App
