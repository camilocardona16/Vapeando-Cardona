import React, { useState } from 'react'

const styleCard={
  display:'inline-block',
  width:'18rem',
  
}

export default function Product({title,price}) {

  const [cantidad,setCantidad]= useState(0);
  return (
      <>
        <div className="card m-2" style={styleCard} >
          <img src="https://via.placeholder.com/150x150.png" className="card-img-top" alt='palceholder150x150'/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">${price}</p>
            <div className="row">
              <div className="col text-center">
                <button onClick={()=>setCantidad(cantidad+1)} className="btn btn-primary"href="/#">+</button>
              </div>
              <div className="col text-center">
                <p>{cantidad}</p>
              </div>
              <div className="col text-center">
                <button onClick={()=>setCantidad(cantidad-1)} className="btn btn-danger"href="/#">-</button>
              </div>
            </div>
            <div className="row">
            <button onClick={()=>alert(`${cantidad} agregados al carrito`)}href="/#" className="btn btn-outline-primary  btn-lg btn-block">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </>
  )
}


