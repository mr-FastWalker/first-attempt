import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let DialogElements = props.state.DialogsData.map ( Dialog => <DialogItem name={Dialog.name} DialogId={Dialog.id} /> );
    let MessagesElements = props.state.messagesData.map ( message => <Message text={ message.text}/> );

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