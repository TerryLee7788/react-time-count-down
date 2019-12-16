import React from 'react';
import TimeCountDown from './Components/TimeCountDown';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TimeCountDown: <TimeCountDown
            second={600}
            format="MM:SS"
            className="font-color-primary-medium m-left-xs m-right-xs"
            handleTimeExpired={() => {

              console.log('TimeExpired!!');

            }}
          />
        </a>
      </header>
    </div>
  );
}

export default App;
