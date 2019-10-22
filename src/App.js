import React from 'react';
import './App.css';

function App() {
  const addItem = (param) => {
    console.log(param)
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Josh's Wish List "project"
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() => addItem("Thing I want")}>
        Button that will add another wishlist item
      </button>
    </div>
  );
}


export default App;
