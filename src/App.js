import React from "react";
import Route from "react-router-dom/es/Route";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/login";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer /> } />
                <Route path="/dialogs" render={() => <DialogsContainer />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/users" render={() => <UsersContainer />}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/login" render={() => <LoginPage />}/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
