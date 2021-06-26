import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
// componentes
import Header from './components/Header/Header';
import Foter from './components/Foter/Foter';

// views
import Home from './views/Home/Home'
import Membresia from './views/Membresia/Membresia'
import Nosotros from './views/Nosotros/Nosotros'
import Contacto from './views/Contacto/Contacto'

function App(){


    return(
      <>
        <Router>
          <Header/>
          <body>
            <Switch>
              <Route path='/' exact  component={Home}/>
              <Route path='/membresia' component={Membresia}/>
              <Route path='/nosotros' component={Nosotros}/>
              <Route path='/contacto' component={Contacto}/>
            </Switch>
            <Foter/>  
          </body>
        </Router>
      </>
    );
  }

export default App;