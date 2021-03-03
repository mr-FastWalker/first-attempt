import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    let DialogElements = props.state.DialogsData.map ( Dialog => <DialogItem name={Dialog.name} DialogId={Dialog.id} avatar={Dialog.avatar}/> );
    let MessagesElements = props.state.messagesData.map ( message => <Message text={ message.text }/> );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(onMessageChangeActionCreator(text));
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {DialogElements}
            </div>

            <div className="messages">
                {MessagesElements}
                <div>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText}/>
                    </div>
                    <button onClick={ addMessage }>Add message</button>
                </div>

            </div>

        </div>
    )
};

export default Dialogs;