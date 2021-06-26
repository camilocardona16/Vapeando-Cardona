import React, {useState,useEffect} from 'react';
import Product from '../../components/Product/Product';
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
      <section className="container mt-3">
      <div className='text-center row'>
        {productos.map((product,index)=>{
          return <Product key={index} title={product.nombre} price={product.precio} img={product.imagen} desc={product.descripcion} puntuacion={product.puntuacion} />
        })}
      </div>
      </section>
      </>
    )
}

export default Home