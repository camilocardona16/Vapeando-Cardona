import React from 'react'

import logo from '../../img/logo.png';
import './Header.css'


export default function Header() {
    return (
        <>
        <header>
          <nav className="navbar navbar-expand-md justify-content-between">
            <a className="navbar-brand" href="index.html">
                <img className="logo" src={logo}/>
            </a>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" className='itemNav' href="index.html"><strong>Home</strong></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" className='itemNav' href="membresia.html"><strong>Membresia</strong></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" className='itemNav' href="acerca.html"><strong>Nosotros</strong></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" className='itemNav' href="productos.html"><strong>Productos</strong></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" className='itemNav' href="contacto.html"><strong>Contacto</strong></a>
                </li>
              </ul>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li><button id="btn-ingresar" type="button">Ingresar</button></li>
                <li><button id="btn-crear" type="button" >Crear Cuenta</button></li>
                <li><button type="button">Mi Carrito <i className="fa fa-cart-plus"></i></button></li> 
              </ul>
          </nav>
        </header>
        </>
    )
}
