//import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Bottom from "./components/Bottom";

const App = () => {
  return (
      <div className='app-wraper'>
        <Header/>
        <Nav/>
        <Profile/>
        <Bottom/>
      </div>
  );
}

export default App;



/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing 123 Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}*/