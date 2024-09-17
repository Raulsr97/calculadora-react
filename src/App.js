import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import Clear from './components/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const agregarInput = val => {
    setInput(input + val)
  }

  const resolverInput = () => {

    if (input) {
      setInput(evaluate(input))
    } else {
      alert('porfavor ingrese valores para realizar los calculos.')
    }
    
  }


  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Screen 
          input={input}
        />
        <div className='fila'>
          <Button manejarClic={agregarInput}>1</Button>
          <Button manejarClic={agregarInput}>2</Button>
          <Button manejarClic={agregarInput}>3</Button>
          <Button manejarClic={agregarInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput}>4</Button>
          <Button manejarClic={agregarInput}>5</Button>
          <Button manejarClic={agregarInput}>6</Button>
          <Button manejarClic={agregarInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput}>7</Button>
          <Button manejarClic={agregarInput}>8</Button>
          <Button manejarClic={agregarInput}>9</Button>
          <Button manejarClic={agregarInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={resolverInput}>=</Button>
          <Button manejarClic={agregarInput}>0</Button>
          <Button manejarClic={agregarInput}>.</Button>
          <Button manejarClic={agregarInput}>/</Button>
        </div>
        <Clear manejarClear={() => setInput('')}>Clear</Clear>
      </div>
    </div>
  );
}

export default App;
