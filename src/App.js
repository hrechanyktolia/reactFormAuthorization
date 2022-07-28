import './App.css';
import React from 'react';
import SimpleFormValidation from "./components/SimpleFormValidation";
import logo from  './img/logo.png'

function App() {
    return (
    <div className="App">
        <img src={logo} alt="Logo git hub"/>
        <SimpleFormValidation/>
    </div>
  );
}

export default App;
