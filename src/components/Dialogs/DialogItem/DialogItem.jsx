import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import classes from "../../Profile/MyPosts/Post/Post.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.DialogId;
    // debugger;
    return <div     className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>
            <div className={s.item}>
                <img src={props.avatar} alt='avatar' />
                {props.name}
            </div>
        </NavLink>
    </div>
}

export default DialogItem;