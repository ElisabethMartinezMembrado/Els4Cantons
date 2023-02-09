import React from 'react';
import './Home.css';
import HomeWelcome from './Components/HomeWelcome';
import Navbar from './Components/Navbar';
import { Carousel } from './Components/Carousel';






function Home() {
  return (
    
      <header className="App-header">
        <Navbar/>
        <div className='carouselWrapper'>
            <Carousel/>
        </div>
        <HomeWelcome/>
       
        
      </header>
   
  );
}

export default Home;
