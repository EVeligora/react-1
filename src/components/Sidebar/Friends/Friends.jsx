import s from "../Sidebar.module.css";
import Friends_item from "./Friends_item/Friends_item";

const Friends = (props) => {
  let friendsElements = props.state.map((f) => <Friends_item name={f.name} />);

  return (
    <div className={s.friends}>
      <div className={s.friends_title}>Friends</div>
      <ul>{friendsElements}</ul>
    </div>
  );
};

export default Friends;
