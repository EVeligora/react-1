import s from "./Sidebar.module.css";
import Navbar from "./Navbar/Navbar";
import Friends from "./Friends/Friends";
import FriendsContainer from "./Friends/FriendsContainer";

const Sidebar = (props) => {
  return (
    <aside className={s.sidebar}>
      <Navbar />
      <FriendsContainer />
    </aside>
  );
};

export default Sidebar;
