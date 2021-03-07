import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import storeContext from "../../storeContext";

const DialogsContainer = (props) => {

    return (
        <storeContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                };
                let onMessageChange = (text) => {
                    store.dispatch(onMessageChangeActionCreator(text))
                };

                return <Dialogs
                    addMessage={addMessage}
                    onMessageChange={onMessageChange}
                    DialogElements={state.DialogsPage.DialogsData}
                    MessagesElements={state.DialogsPage.messagesData}
                    newMessageText={state.DialogsPage.newMessageText}
                />
            }
        }
        </storeContext.Consumer>
    )
};

export default DialogsContainer;