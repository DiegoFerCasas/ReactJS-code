import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (

    <>
    
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
          <Link to={'/'}><img id="logo" src="./image.png" /></Link>       
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                <NavLink className="nav-link" to={'/'}> Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to={'formato/audio'}> Audiolibros</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to={'formato/ebook'}> Ebook</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to={'formato/fisico'}> Audiolibros</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" id='cart' to={'/Cart'}><span style={{"margin-right":"8px"}}><img src="./icon-car.png" width="20"
                    alt="carrito de compras" /></span><span id="numeroPeque" width="10">0</span>Carrito de compra</NavLink>
                </li>
              </ul>
              <form id="searchContainer" className="d-flex" role="search">
                <div id="searchInputBox">
                  <input id="searchBarMain" className="form-control me-2" type="search"
                    placeholder="Book Search" aria-label="Search" />
                  <ul id="datalistSuggestions">
                  </ul>
                </div>
                <a id="searchButton" href="#" className="boton btn btn-outline-success" role="button" aria-pressed="true">Search</a>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar