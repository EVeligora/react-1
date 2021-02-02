import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((d) => <DialogItem id={d.id} name={d.name} img={d.img} />);
  let messageElements = props.state.messages.map((m) => (
    <Message id={m.id} message={m.message} />
  ));

  return (
    <div className={s.dialogs_wrap}>
      <div className={s.dialog_list}>{dialogElements}</div>
      <div className={s.messages_list}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
