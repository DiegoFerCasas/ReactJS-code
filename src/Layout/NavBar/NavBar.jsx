import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (

    <>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img id="logo" src="./image.jpg" /> </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index2.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./pages/about.html">Quienes somos</a>
              </li>
              <li class="nav-item dropdown"></li>
              <a class="nav-link dropdown-toggle" href="./shop.html" data-bs-toggle="dropdown"
                aria-expanded="false">Tienda</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="./pages/shop.html">Audiolibros</a></li>
                <li><a class="dropdown-item" href="./pages/shop.html">Ebook</a></li>
                <li><a class="dropdown-item" href="./pages/shop.html">Libros físicos</a></li>
              </ul>
              <li class="nav-item">
                <a class="nav-link" href="./pages/contacto.html">Contacto</a>
              </li>

            </ul>

          </div>
        </div>
      </nav>
      <br/>
    </>
  )
}

export default NavBar