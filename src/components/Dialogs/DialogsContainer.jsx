import React from "react";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  // debugger;
  let state = props.store.getState();
  
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    let action = updateMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (<Dialogs
    addMessage={addMessage}
    updateNewMessageText={onMessageChange}
    dialogs={state.dialogsPage.dialogs}
    messages={state.dialogsPage.messages}
    newMessageText={state.dialogsPage.newMessageText}
  />);
};

export default DialogsContainer;
