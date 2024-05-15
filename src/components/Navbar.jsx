import React from 'react';
import CartWidget from "../components/CartWidget";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand"><img width={100} src="img/logo.png" alt="" /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">Inicio</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</NavLink>
                <ul className="dropdown-menu">
                  <li className="dropdown-item"><NavLink to="/category/computacion">Computacion</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/category/celulares">Celulares</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/category/tablet">Tablet</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/category/smartwatch">SmartWatch</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/ofertas" className="nav-link active" aria-current="page">Ofertas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacto" className="nav-link active" aria-current="page">Contacto</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/info" className="nav-link active" aria-current="page">Acerca de Nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link active" aria-current="page">< CartWidget /></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar