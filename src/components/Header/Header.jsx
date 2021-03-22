import React from 'react';
import classes from './Header.module.css';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img src='https://www.tetrad.ru/wp-content/uploads/2018/09/%D0%A1%D0%BC%D0%B0%D0%B9%D0%BB.jpg'
             alt='logo'/>
        Social Network
        <div className={s.loginBlock}>
            {props.isAuth ?
                <div>
                    <div>
                        {/*<img src={props.profile.photos.small} alt='userAvatar'/>*/}
                    </div>
                    {props.login}
                </div> :
                <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;