import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let DialogElements = props.state.DialogsData.map ( Dialog => <DialogItem name={Dialog.name} DialogId={Dialog.id} avatar={Dialog.avatar}/> );
    let MessagesElements = props.state.messagesData.map ( message => <Message text={ message.text }/> );

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
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
                        <textarea ref={newMessageElement}></textarea>
                    </div>
                    <button onClick={ addMessage }>Add message</button>
                </div>

            </div>

        </div>
    )
};

export default Dialogs;