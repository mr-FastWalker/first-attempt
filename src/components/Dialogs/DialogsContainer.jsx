import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    // let DialogElements = props.state.DialogsPage.DialogsData.map ( Dialog => <DialogItem name={Dialog.name} DialogId={Dialog.id} avatar={Dialog.avatar}/> );
    // let MessagesElements = props.state.DialogsPage.messagesData.map ( message => <Message text={ message.text }/> );
    //
    // let newMessageElement = React.createRef();
    //
    // let addMessage = () => {
    //     props.dispatch(addMessageActionCreator());
    // }
    //
    // let onMessageChange = () => {
    //     let text = newMessageElement.current.value;
    //     props.dispatch(onMessageChangeActionCreator(text));
    // }

    return (

        <Dialogs

            newMessageText = {props.state.DialogsPage.newMessageText}
        />
        // <div className={s.dialogs}>
        //
        //     <div className={s.dialogsItems}>
        //         {DialogElements}
        //     </div>
        //
        //     <div className="messages">
        //         {MessagesElements}
        //         <div>
        //             <div>
        //                 <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.DialogsPage.newMessageText}/>
        //             </div>
        //             <button onClick={ addMessage }>Add message</button>
        //         </div>
        //
        //     </div>
        //
        // </div>
    )
};

export default DialogsContainer;