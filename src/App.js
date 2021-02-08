//import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

const App = () => {
  return (
      <div className='app-wraper'>
        <Header/>
        <Nav/>
        <Profile/>
        <Footer/>
      </div>
  );
}

export default App;
