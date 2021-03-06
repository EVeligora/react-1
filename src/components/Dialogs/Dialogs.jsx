import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  //debugger;
  let dialogElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem id={d.id} key={d.id} name={d.name} img={d.img} />
  ));

  let messageElements = props.dialogsPage.messages.map((m) => (
    <Message id={m.id} key={m.id} message={m.message} />
  ));

  //let newMessageEl = React.createRef();
  let addMessageClick = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs_wrap}>
      <div className={s.dialog_list}>{dialogElements}</div>
      <div className={s.messages}>
        <div className={s.messages_list}>{messageElements}</div>
        <form className={s.messages_form} action="">
          <textarea
            onChange={onMessageChange}
            //ref={newMessageEl}
            value={props.dialogsPage.newMessageText}
            className={s.messages_textarea}
            placeholder='New message'
          ></textarea>
          <button type="button" onClick={addMessageClick}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;
