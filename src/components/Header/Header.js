import React, {useState,useContext} from 'react';
import {CartContext} from '../../CartContext';
import swal from 'sweetalert';

import logo from '../../img/logo.png';
import './Header.css';
import {Link} from 'react-router-dom';
import {Modal,Button,Container,Row,Col,Form} from 'react-bootstrap';
import {Badge} from 'react-bootstrap';


export default function Header() {

  let[showCarrito,setshowCarrito]=useState(false);
  let[showLogin,setshowLogin]=useState(false);
  let[showCrear,setshowCrear]=useState(false);

  let[items,setItems]=useContext(CartContext);

  let[factura,setFactura]=useState(0);
  let[totalItems,setTotalItems]=useState(0);

  function facturar(){
    let total=0;
    let tp=0;
    for (let i = 0; i < items.length; i++) {
      total=total+items[i].subtotal;
      tp=tp+items[i].cantidad;
    }
    setTotalItems(tp);
    setFactura(total);
  }

  function eliminar(pos){
    const prods=items;
    setTotalItems(totalItems-(items[pos].cantidad));
    let news= prods.splice(pos,1)
    setItems(items,news);
    setshowCarrito(false);
  }

  function login(event){
    event.preventDefault();
    console.log('usuario entrando');
    console.log(event.target.elements.correo.value);
    console.log(event.target.elements.clave.value);
  }

  function crearCuenta(event){
    event.preventDefault();
    console.log('usaurio Creado');
    console.log(event.target.elements.correo.value);
    console.log(event.target.elements.clave.value);
    console.log(event.target.elements.clave2.value);
  }

    return (
        <>
        <header>
          <nav className="container navbar navbar-expand-md justify-content-between">
            <Link className="navbar-brand" to='/'>
                <img className="logo" src={logo} alt='vapeando logo'/>
            </Link>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="itemNav" to='/'><strong>Home</strong></Link>
                </li>
                <li className="nav-item">
                    <Link className="itemNav" to='/membresia'><strong>Membresia</strong></Link>
                </li>
                <li className="nav-item">
                    <Link className="itemNav" to='nosotros'><strong>Nosotros</strong></Link>
                </li>
                <li className="nav-item">
                    <Link className="itemNav" to='contacto'><strong>Contacto</strong></Link>
                </li>
              </ul>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li><button onClick={()=>{setshowLogin(true)}} id="btn-ingresar" type="button">Ingresar</button></li>
                <li><button onClick={()=>{setshowCrear(true)}} id="btn-crear" type="button" >Crear Cuenta</button></li>
                <li><button onClick={()=>{setshowCarrito(true)}} type="button">Mi Carrito <i className="fa fa-cart-plus"></i></button></li> 
              </ul>
          </nav>
        </header>
        
      {/* Modal Carrito  */}
        <Modal  show={showCarrito}
                onHide={()=>{setshowCarrito(false)}}
                onEnter={()=>{facturar()}}
                onExit={()=>{setTotalItems(0)}}
                size="lg"
                centered>
          <Modal.Header closeButton>
            <Modal.Title>Productos en carrito: <Badge className='bg-primary text-with'>{totalItems}</Badge></Modal.Title>
          </Modal.Header>
          <Modal.Body scrollable>
            <Container>
              <Row>
                <Col xs='3' md='3'>Producto</Col>
                <Col xs='3' md='3'>Precio</Col>
                <Col xs='3' md='3'>Cantidad</Col>
                <Col xs='3' md='3'>SubTotal</Col>
              </Row>
              {items.length===0? <Row><Badge className='bg-primary text-with'>Agrega productos al carrito</Badge></Row>:null}
              {items.map((item,index)=>{
                return <>
                  <Row>
                    <Col xs='3' md='3'> <img src={item.imagen} className="w-100" alt='imgcarrito'></img>
                     {item.nombre}
                    </Col>
                    <Col xs='3' md='3'>{item.precio}</Col>
                    <Col xs='3' md='3'>{item.cantidad}</Col>
                    <Col xs='3' md='3'>{item.subtotal} <Button variant='danger' onClick={()=>{eliminar(index)}}>X</Button></Col>
                  </Row>
                </>
              })}
              
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='warning' onClick={()=>{setshowCarrito(false)}}>Cerrar</Button>
            {items.length!==0?
            <Button variant='success' onClick={()=>{setshowCarrito(false);swal({title: "Facturado",icon: "success",});setItems([])}}>
              Pagar: {factura}
            </Button>:null}
          </Modal.Footer>
        </Modal>

      {/* Modal Login */}
        <Modal  show={showLogin}
                onHide={()=>{setshowLogin(false)}}>
          <Modal.Header closeButton>
            <Modal.Title>Iniciar Sesión</Modal.Title>
          </Modal.Header>
          <Form onSubmit={(e)=>{login(e)}}>
            <Modal.Body >
              <Container>
                <Form.Group controlId="correo">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control type="email" placeholder="ingresa tu correo" />
                </Form.Group>

                <Form.Group controlId="clave">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='danger' onClick={()=>{setshowLogin(false)}}>Cerrar</Button>
              <Button variant="success" type="submit">ingresar</Button>
            </Modal.Footer>
          </Form>
        </Modal>

      {/* Modal CreateAcount */}
      <Modal  show={showCrear}
                onHide={()=>{setshowCrear(false)}}>
          <Modal.Header closeButton>
            <Modal.Title>Crear Cuenta</Modal.Title>
          </Modal.Header>
          <Form onSubmit={(e)=>{crearCuenta(e)}}>
            <Modal.Body >
              <Container>
                <Form.Group controlId="correo">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control type="email" placeholder="ingresa tu correo" />
                </Form.Group>

                <Form.Group controlId="clave">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Form.Group controlId="clave2">
                  <Form.Label>Confirmar contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Confirmar Contraseña" />
                </Form.Group>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='danger' onClick={()=>{setshowCrear(false)}}>Cerrar</Button>
              <Button variant="success" type="submit">Crear cuenta</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      
        </>
    )
}
