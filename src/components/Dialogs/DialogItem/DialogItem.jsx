import { NavLink } from "react-router-dom";
import s from "../../Dialogs/Dialogs.module.css";

const DialogItem = (props) => {
  let link = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={link}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem;
