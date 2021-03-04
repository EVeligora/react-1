import { connect } from "react-redux";
import s from "../Sidebar.module.css";
import Friends from "./Friends";
import FriendsItem from "./FriendsItem/FriendsItem";

// const Friends = (props) => {
//   let friendsElements = props.state.map((f) => <FriendsItem name={f.name} />);

//   return (
//     <div className={s.friends}>
//       <div className={s.friends_title}>Friends</div>
//       <ul>{friendsElements}</ul>
//     </div>
//   );
// };

let mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends,
  }
}

let mapDispatchToProps = (dispatch) => {

}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;

