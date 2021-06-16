import React, { useState } from 'react'
import './Product.css'
import swal from 'sweetalert';

export default function Product({title,price,img,puntuacion,desc}) {

  const [cantidad,setCantidad]= useState(1);
  
  return (
      <>
        <div className="col-md-6 col-lg-4">
          <div className="profile-card-4 text-center">
            <a href="/#"> <img src={img} className="img img-responsive" alt='imagen'/></a>
            <div className="profile-content">
            <div className="profile-name">{title}</div>
              <div className="profile-description">{desc}</div>
              <div className="row">
                <div className="col">
                  <div className="profile-overview">
                      <p>Precio</p>
                      <h4>{price}</h4>
                  </div>
                </div>
                <div className="col">
                    <div className="profile-overview">
                        <p>Puntuacion</p>
                        <h4>10/{puntuacion}</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="profile-overview">
                        <p >Agregar: {cantidad}</p>
                        <a href='/#' className="btn btn-info" onClick={()=>{
                          if(cantidad===5){
                            swal({
                              title: "Lo sentimos",
                              text: "No puedes agregar mas de 5 productos",
                              icon: "warning",
                            });
                          }else{
                            setCantidad(cantidad+1)
                          }
                          }} type="button">+
                        </a>
                        <a href='/#' className="btn btn-info" onClick={()=>{
                          if(cantidad===1){
                            swal({
                              title: "Lo sentimos",
                              text: "No puedes tener menos de 1 producto",
                              icon: "warning",
                            });
                          }else{
                            setCantidad(cantidad-1)
                          }
                          }}type="button">-
                        </a>
                        <a href='/#' className="btn btn-info" onClick={()=>{
                          // alerta(`Agregaste ${cantidad} al carrito`)
                          swal({
                            title: "Bien",
                            text: `Agregaste ${cantidad} al carrito`,
                            icon: "success",
                          });
                          }}type="button">agregar
                        </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}


