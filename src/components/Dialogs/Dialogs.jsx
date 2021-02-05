import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} img={d.img} />
  ));
  let messageElements = props.state.messages.map((m) => (
    <Message id={m.id} message={m.message} />
  ));
  let newMessageEl = React.createRef();
  let addMessage = () => {
    let text = newMessageEl.current.value;
    alert(text);
  }

  return (
    <div className={s.dialogs_wrap}>
      <div className={s.dialog_list}>{dialogElements}</div>
      <div className={s.messages}>
        <div className={s.messages_list}>{messageElements}</div>
        <div className={s.messages_form}>
          <textarea ref = {newMessageEl} className={s.messages_textarea}></textarea>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
