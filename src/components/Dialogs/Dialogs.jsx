import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialog = (props) => {
  let link = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={link}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div>{props.message}</div>;
};

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

  let dialogElements = dialogs.map((d) => <Dialog id={d.id} name={d.name} />);
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
