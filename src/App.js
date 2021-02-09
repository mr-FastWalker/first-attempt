//import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

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
