import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img width={100} src="img/logo.png" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
              </li>
              <li className="nav-item dropdown">
              <Link to="/products" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</Link>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Celulares</a></li>
                  <li><a className="dropdown-item" href="#">PCs</a></li>
                  <li><a className="dropdown-item" href="#">SmartWatch</a></li>
                </ul>
              </li>
              <li className="nav-item">
              <Link to="/ofertas" className="nav-link active" aria-current="page">Ofertas</Link>
              </li>
              <li className="nav-item">
              <Link to="/contacto" className="nav-link active" aria-current="page">Contacto</Link>
              </li>
              <li className="nav-item">
              <Link to="/acercadenosotros" className="nav-link active" aria-current="page">Acerca de Nosotros</Link>
              </li>
              <li className="nav-item">
              <Link to="/cart" className="nav-link active" aria-current="page">< CartWidget /> 1 </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar