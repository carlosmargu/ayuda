import React from 'react';
import logo from './logo.svg';
import './App.css';
import Simon from "./Componente/Modal";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Simon/>
    </div>
    </BrowserRouter>
  );
}

export default App;
