import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {

    return {
        // DialogsPage: state.DialogsPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, mapDispatchToProps), // 3) результат withAuthRedirect отдаем connect (первая часть)
    withAuthRedirect // 2) передаем на выполнение в withAuthRedirect
)(Dialogs); // 1) берем компоненту Dialogs;