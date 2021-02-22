import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} img={d.img} />
  ));
  let messageElements = props.dialogsPage.messages.map((m) => (
    <Message id={m.id} message={m.message} />
  ));
  let newMessageEl = React.createRef();
  let addMessage = () => {
    // props.addMessage();
    props.dispatch({ type: "ADD-MESSAGE" });
  };

  let onMessageChange = () => {
    let text = newMessageEl.current.value;
    //props.updMessageText(text);
    let action = { type: "UPDATE-MESSAGE-TEXT", newText: text };
    props.dispatch(action);
  };

  return (
    <div className={s.dialogs_wrap}>
      <div className={s.dialog_list}>{dialogElements}</div>
      <div className={s.messages}>
        <div className={s.messages_list}>{messageElements}</div>
        <form className={s.messages_form} action="">
          <textarea
            onChange={onMessageChange}
            ref={newMessageEl}
            value={props.newMessageText}
            className={s.messages_textarea}
          />
          <button type="button" onClick={addMessage}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;
