import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let addMessage = () => { props.dispatch(addMessageActionCreator()) };
    let onMessageChange = (text) => { props.dispatch(onMessageChangeActionCreator(text)) };

    return (
        <Dialogs
            addMessage = {addMessage}
            onMessageChange = {onMessageChange}
            DialogElements = {props.state.DialogsPage.DialogsData}
            MessagesElements = {props.state.DialogsPage.messagesData}
            newMessageText = {props.state.DialogsPage.newMessageText}
        />
    )
};

export default DialogsContainer;