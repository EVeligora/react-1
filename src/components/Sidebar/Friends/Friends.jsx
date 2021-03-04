import React from "react";
import s from "../Sidebar.module.css";
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {
  //debugger;
  let friendsElements = props.friends.map((f) => <FriendsItem name={f.name} />);

  return (
    <div className={s.friends}>
      <div className={s.friends_title}>Friends</div>
      <ul>{friendsElements}</ul>
    </div>
  );
};

export default Friends;
