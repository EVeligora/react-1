import React from "react";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  //debugger;
  return (
  <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState();

        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onMessageChange = (text) => {
          let action = updateMessageTextActionCreator(text);
          store.dispatch(action);
        };
        return <Dialogs
          addMessage={addMessage}
          updateNewMessageText={onMessageChange}
          dialogs={state.dialogsPage.dialogs}
          messages={state.dialogsPage.messages}
          newMessageText={state.dialogsPage.newMessageText}
        />
      }}
  </StoreContext.Consumer>
  );
};

export default DialogsContainer;
