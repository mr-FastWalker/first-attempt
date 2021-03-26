import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let DialogElements = props.DialogElements.map ( Dialog => <DialogItem name={Dialog.name} key={Dialog.id} DialogId={Dialog.id} avatar={Dialog.avatar}/> );
    let MessagesElements = props.MessagesElements.map ( message => <Message text={ message.text } key={message.id}/> );
    let newMessageElement = React.createRef();
    let addMessage = () => { props.addMessage() }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text)
    }

     // if (!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {DialogElements}
            </div>

            <div className="messages">
                {MessagesElements}
                <div>
                    <div>
                        <textarea
                            onChange={onMessageChange}
                            ref={newMessageElement}
                            value={props.newMessageText}
                        />
                    </div>
                    <button onClick={ addMessage }>Add message</button>
                </div>
            </div>

        </div>
    )
};

export default Dialogs;