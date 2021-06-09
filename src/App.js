import React, {Component} from 'react';
import './App.css';

// componentes
import Header from './components/Header/Header';
import Product from './components/Product/Product';


// componentes de tipo clase
// componentes de tipo function, dummy
// las clases tienen un metodo aprticular llamado "render"
// un fragmento se puede escribir asi <></>
class App extends Component{

  render(){

    return(
      <>
      <Header />
      <div className='container text-center mt-3'>
        <Product title='Producto 1' price='100'/>
        <Product title='Producto 2' price='200'/>
        <Product title='Producto 3' price='300'/>
      </div>
      </>
    );
  }
}

export default App;