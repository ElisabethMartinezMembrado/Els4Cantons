import React from 'react';
import './Home.css';
import HomeWelcome from './Components/HomeWelcome';
import Navbar from './Components/Navbar';
import { Carousel } from './Components/Carousel';






function Home() {
  return (
    
      <header className="App-header">
        <Navbar/>
        <Carousel/>
        <HomeWelcome/>
       
        
      </header>
   
  );
}

export default Home;
