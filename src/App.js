import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Route from "react-router-dom/es/Route";
// import { Route } from "react-router-dom";
import store from "./redux/reduxStore";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path="/profile"
                       render={() => <Profile
                           dispatch={props.dispatch}
                           state = {props.state}
                       />}/>
                <Route path="/dialogs"
                       render={() => <Dialogs
                           dispatch={props.dispatch}
                           state = {props.state}
                       />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
