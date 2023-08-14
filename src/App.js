import React, {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1)
  };

  function decrement() {
    setCount(count - 1)
  };

  return (
    <div className="App">
      <div className='counter_wrapper'>
        <h1>{count}</h1>
      </div>
      <div className='controls'>
        <button className='controls_btn --increment' onClick={increment}>+</button>
        <button className='controls_btn --decrement' onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default App;
