import React from 'react'

const NavForm = () => {
  return (
    <>
    <form id="searchContainer" class="d-flex" role="search">
              <div id="searchInputBox">
                <input id="searchBarMain" class="form-control me-2" type="search"
                  placeholder="Book Search" aria-label="Search" />
                <ul id="datalistSuggestions">
                </ul>
              </div>
              <a id="searchButton" href="#" class="boton btn btn-outline-success" role="button" aria-pressed="true">Search</a>
            </form>
    </>
  )
}

export default NavForm