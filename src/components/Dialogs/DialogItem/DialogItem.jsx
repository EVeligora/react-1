import { NavLink } from "react-router-dom";
import s from "../../Dialogs/Dialogs.module.css";

const DialogItem = (props) => {
  let link = "/dialogs/" + props.id;
  return (
    <div className={s.dialog_item}>
      <NavLink to={link}>
        <div><img src={props.img} alt="" /></div>
        {props.name}
      </NavLink>
    </div>
  );
};


export default DialogItem;
