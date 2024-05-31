import React from 'react';
import CalculatorForm from './calculator/CalculatorForm';
import './App.css';

const title = "React kalkulačka";

function App() {
  return (
    <div className="App text-center mx-auto mt-2">
      {/* Flex container pro zarovnání obrázku a nadpisu vedle sebe */}
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={`${process.env.PUBLIC_URL}/logo192.png`}
          alt="logo"
          className="logoreact img-fluid p-0 m-0"
          style={{ maxHeight: '50px' }} // Volitelné: upravit velikost obrázku
        />
        <h1 className='text-center text-info ml-3 mt-2'>{title}</h1>
      </div>
      <CalculatorForm />
    </div>
  );
}

export default App;