import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRouter from './AllRouter';
import Navbar from '../src/components/Navbar';


function App() {
  return (
      <div> 
        <Router>
          <Navbar/>          
          <AllRouter/>
        </Router>
        
      </div>
  );
}

export default App;
