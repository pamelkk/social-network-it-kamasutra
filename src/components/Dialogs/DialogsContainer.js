import React from "react";
import { sendMessageAction, updateNewMessageTextAction } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(sendMessageAction());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextAction(text));
    }

    return (
        <Dialogs addMessage={addMessage} updateNewMessageText={onMessageChange} dialogsPage={state} />
    );
};

export default DialogsContainer;