import logoyohan from './programming.jfif';
import './App.css';
import {useState,useEffect} from "@testing-library/react"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoyohan} className="App-logo" alt="logo" />
        <p>
          Yohan Romero Ayre
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grupo9
        </a>
        
      </header>
    </div>
  );
}

export default App;
