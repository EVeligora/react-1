import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  
  let dialogElements = props.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} img={d.img} />
  ));

  let messageElements = props.messages.map((m) => (
    <Message id={m.id} message={m.message} />
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
            value={props.newMessageText}
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
