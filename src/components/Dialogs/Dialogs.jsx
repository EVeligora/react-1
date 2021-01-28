import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = () => {
  let dialogs = [
    {
      id: 1,
      name: "Jack",
    },
    {
      id: 2,
      name: "Alex",
    },
    {
      id: 3,
      name: "Mary",
    },
    {
      id: 4,
      name: "Max",
    },
  ];

  let messages = [
    {
      id: 1,
      message: "Hi",
    },
    {
      id: 2,
      message: "Hello",
    },
    {
      id: 3,
      message: "How are you?",
    },
    {
      id: 4,
      message: "Fine, thanks",
    },
  ];

  let dialogElements = dialogs.map((d) => <DialogItem id={d.id} name={d.name} />);
  let messageElements = messages.map((m) => (
    <Message id={m.id} message={m.message} />
  ));

  return (
    <div className={s.dialogs_wrap}>
      <div className={s.dialog_list}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
