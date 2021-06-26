import React, { useState } from 'react'
import './Product.css'
import swal from 'sweetalert';

import Badge from 'react-bootstrap/Badge';
import {Modal,Button,Container,Row,Col} from 'react-bootstrap';

export default function Product({title,price,img,puntuacion,desc}) {

  const [cantidad,setCantidad]= useState(1);
  let[showDetalle,setshowDetalle]=useState(false);

  return (
      <>
        <div className="col-md-6 col-lg-4">
          <div className="profile-card-4 text-center">
            <img onClick={()=>{setshowDetalle(true)}} src={img} className="img img-responsive" alt='imagen'/>
            <div className="profile-content">
            <div className="profile-name">{title}</div>
              <div className="row">
                <div className="col-md-4">
                  <div className="profile-overview">
                      <p>Precio</p>
                      <h4>{price}</h4>
                  </div>
                </div>
                <div className="col-md-4">
                    <div className="profile-overview">
                        <p>Puntuacion</p>
                        <h4>10/{puntuacion}</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="profile-overview">
                      <p></p>
                      <Button variant='success' onClick={()=>{setshowDetalle(true)}}>
                        Agregar
                      </Button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal  show={showDetalle}
                onHide={()=>{setshowDetalle(false)}}
                centered>
          <Modal.Header closeButton>
            <Modal.Title>Agregar Al Carrito</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col xs='6' md='6'>
                  <img src={img} width='100%'/>
                </Col>
                <Col xs='6' md='6'>
                  <Row>
                    <Col xs='12' md='12'>
                      {title}
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col xs='4' md='4'>
                      <Button block variant="outline-danger"  onClick={()=>{
                        if(cantidad===1){
                          swal({
                            title: "Lo sentimos",
                            text: "No puedes tener menos de 1 producto",
                            icon: "warning",
                          });
                        }else{
                          setCantidad(cantidad-1)
                        }
                      }}>-</Button>
                    </Col>

                    <Col xs='4' md='4'>{cantidad}</Col>

                    <Col xs='4' md='4'>
                      <Button block variant="outline-success" onClick={()=>{
                        if(cantidad===5){
                          swal({
                            title: "Lo sentimos",
                            text: "No puedes agregar mas de 5 productos",
                            icon: "warning",
                          });
                        }else{
                          setCantidad(cantidad+1)
                        }
                        }}>+</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>{desc}</Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button block variant="success" onClick={()=>{
              swal({
                title: "Bien",
                text: `Agregaste ${cantidad} al carrito`,
                icon: "success",
              });
              setshowDetalle();
              }}>
                Agregar
            </Button>
          </Modal.Footer>
        </Modal>

      </>
  )
}


