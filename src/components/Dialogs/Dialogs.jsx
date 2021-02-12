import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let DialogsData = [
        {id: 1, name: 'Serg'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Lex'},
        {id: 4, name: 'Olya'},
        {id: 5, name: 'Miha'}
    ];

    let messagesData = [
        {id: 1, text: 'Привет!'},
        {id: 2, text: 'Как дела?'},
        {id: 3, text: 'Тренируемся печатать буквы'},
        {id: 4, text: 'расскажи анекдот'},
        {id: 5, text: 'новое сообщение'}
    ];

    let DialogElements = DialogsData.map ( Dialog => <DialogItem name={Dialog.name} DialogId={Dialog.id} /> );
    let MessagesElements = messagesData.map ( message => <Message text={ message.text}/> );

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {DialogElements}
            </div>

            <div className="messages">
                {MessagesElements}
            </div>

        </div>
    )
};

export default Dialogs;