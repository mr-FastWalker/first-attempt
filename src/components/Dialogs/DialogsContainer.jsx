import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//     return (
//         <storeContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState();
//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator())
//                 };
//                 let onMessageChange = (text) => {
//                     store.dispatch(onMessageChangeActionCreator(text))
//                 };
//
//                 return <Dialogs
//                     addMessage={addMessage}
//                     onMessageChange={onMessageChange}
//                     DialogElements={state.DialogsPage.DialogsData}
//                     MessagesElements={state.DialogsPage.messagesData}
//                     newMessageText={state.DialogsPage.newMessageText}
//                 />
//             }
//         }
//         </storeContext.Consumer>
//     )
// };

let mapStateToProps = (state) => {
    debugger
    return {
        DialogElements: state.DialogsPage.DialogsData,
        MessagesElements: state.DialogsPage.messagesData,
        newMessageText: state.DialogsPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;