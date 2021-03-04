import s from "../../Sidebar.module.css"

const FriendsItem = (props) => {
  return (
    <li className={s.friends_item}>
      {props.name}
    </li>
  );
};

export default FriendsItem;
