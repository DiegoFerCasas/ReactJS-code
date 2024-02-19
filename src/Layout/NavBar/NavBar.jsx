import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (

    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img id="logo" src="./image.jpg"/> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Quienes somos</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                aria-expanded="false">Tienda</a></li>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Audiolibros</a></li>
                <li><a className="dropdown-item" href="#">Ebook</a></li>
                <li><a className="dropdown-item" href="#">Libros físicos</a></li>
              </ul>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="cart" href="#"><span><img src="./icon-car.png" width="20"
                    alt="carrito de compras"/></span><span id="numeroPeque" width="10">0</span>Carrito de compra</a>
            </li>
          </ul>
          <form id="searchContainer" className="d-flex" role="search">
            <div id="searchInputBox">
              <input id="searchBarMain" className="form-control me-2" type="search"
                placeholder="Book Search" aria-label="Search"/>
                <ul id="datalistSuggestions">
                </ul>
            </div>
            <a id="searchButton" href="#" className="boton btn btn-outline-success" role="button" aria-pressed="true">Search</a>
          </form>
        </div>
      </div>
      </nav>
    </>
  )
}

export default NavBar