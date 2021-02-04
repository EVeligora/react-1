import s from "../../Sidebar.module.css"

const Friends_item = (props) => {
  return (
    <li className={s.friends_item}>
      {props.name}
    </li>
  );
};

export default Friends_item;
