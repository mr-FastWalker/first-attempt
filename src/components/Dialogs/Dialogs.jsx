import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.DialogId;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className="message">{props.text}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name='Serg' DialogId='1' />
                <DialogItem name='Sveta' DialogId='2' />
                <DialogItem name='Lex' DialogId='3' />
                <DialogItem name='Olya' DialogId='4' />
                <DialogItem name='Miha' DialogId='5' />
            </div>

            <div className="messages">
                <Message text='Привет!'/>
                <Message text='Как дела?'/>
                <Message text='Тренируемся печатать буквы'/>
                <Message text='расскажи анекдот'/>
                <Message text='новое сообщение'/>
            </div>

        </div>
    )
};

export default Dialogs;