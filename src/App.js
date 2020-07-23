import React, { useState } from 'react';
import { } from './fizzbuzz'
import './App.css';

function DisplayImage () {

  const [ state, setState ] = useState([])

  const onSubmit = () => {
    const result = fizzbuzz()
    setState(result)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={() => onSubmit()} className="button">
             Execute FizzBuzz
          </button>

          <button onClick={() => setState([])} className="button">
             Clear FizzBuzz
          </button>
        <div>
            {
              state.length > 0 ? 
              state.map(item => 
               <p>{item}</p>  
              ) : ''
            }
          </div>
        </div>
      </header>
    </div>
  );
}

export default DisplayImage;
