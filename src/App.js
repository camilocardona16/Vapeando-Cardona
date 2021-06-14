import React, {useState,useEffect} from 'react';
import './App.css';

// componentes
import Header from './components/Header/Header';
import Product from './components/Product/Product';

function App(){

  const[productos,setProductos]=useState([]);

  useEffect(()=>{
    setTimeout(() => {
      fetch('./productos.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then((res)=>{
        res.json().then((data)=>setProductos(data));
      });
    }, 2000);

    
  },[productos]);

    return(
      <>
      <Header />
      <div className='container align-content-center row'>
        {productos.map((product,index)=>{
          return <Product key={index} title={product.name} price={product.precio} img={product.imagen} desc={product.descripcion} puntuacion={product.puntuacion} />
        })}
      </div>
      </>
    );
  }

export default App;