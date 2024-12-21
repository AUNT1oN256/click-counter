import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  if(count < 0) {
    alert("Error, you cant do this");
    reset();
  }

  return(
  <div style={styles.container}>
  <h1 style={styles.heading}>Clicker</h1>
  <p style={styles.counter}>Score: {count}</p>
  <div>
    <button style={styles.button} onClick={increase}>+</button>
    <button style={styles.button} onClick={decrease}>-</button>
    <button style={styles.button} onClick={reset}>Restar</button>
  </div>
  </div>
)
}


//Simple styles
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px'
  },
  heading: {
    color: '#007bff'
  },
  counter: {
    fontSize: '36px',
    margin: '20px'
  },
  button: {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '16px',
    border: 'none',
    boredRadius: '5px',
    cursor: 'pointer',
    background: '#007bff',
    color: '#fff'
  }
}

export default App;
