import React from 'react'

const styleCard={
  display:'inline-block',
  width:'18rem',
  
}

export default function Product({title,price}) {
    return (
        <>
          <div className="card" style={styleCard} >
            <img src="https://via.placeholder.com/150x150.png" class="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">${price}</p>
              <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>
        </>
    )
}


