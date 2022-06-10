
import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import BelowNav from './components/BelowNav'
import Home from './components/Home'
import Product from './components/Product'




function App() {
  return (
    <div className="App">
      <Navbar/>
      <BelowNav/>
      <Home/>
      <Product/>
      
    </div>
  );
}

export default App;
