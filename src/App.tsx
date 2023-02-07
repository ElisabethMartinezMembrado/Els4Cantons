import React from 'react';
import './App.css';
import Home from './Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Contacto from './Components/Contacto';
import Delivery from './Components/Delivery';
import Botbotom from './Components/Botbotom';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="Components/" element={<Home/>} />
          <Route path="Components/Home" element={<Home/>} />
          
        </Routes>
      </HashRouter>
      <Home/>
      
      <Menu/>
      <Contacto/>
      <Delivery/>
      <Botbotom/>
      
    </div>
  );
}

export default App;
