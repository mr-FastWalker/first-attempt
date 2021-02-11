import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return <nav className={classes.nav}>
        <div className = {`${classes.item} ${classes.active}`}>
            <NavLink to='/profile' activeClassName={classes.active}a> Profile</NavLink>
        </div>
        <div className = {`${classes.item} ${classes.active}`}>
            <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className = {`${classes.item} ${classes.active}`}>
            <NavLink to='/News' activeClassName={classes.active}>News</NavLink>
        </div>
        <div className = {classes.item}>
            <NavLink to='/Music' activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className = {classes.item}>
            <NavLink to='/Settings' activeClassName={classes.active}>Settings</NavLink>
        </div>
    </nav>
};

export default Nav;