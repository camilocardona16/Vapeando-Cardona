import React, {useState,useEffect} from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import axios from 'axios';

function Home() {

  const[productos,setProductos]=useState([]);

  useEffect(()=>{
    setTimeout(() => {
      axios.get('./productos.json').then((res)=>{setProductos(res.data)});
    }, 2000);

    
  },[productos]);

    return (
        <>
      <Header />
      <div className='container align-content-center row'>
        {productos.map((product,index)=>{
          return <Product key={index} title={product.name} price={product.precio} img={product.imagen} desc={product.descripcion} puntuacion={product.puntuacion} />
        })}
      </div>
      </>
    )
}

export default Home
