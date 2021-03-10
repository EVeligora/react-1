import style from "./Sidebar.module.css";
import Navbar from "./Navbar/Navbar";
import FriendsContainer from "./Friends/FriendsContainer";

const Sidebar = (props) => {
  return (
    <aside className={style.sidebar}>
      <Navbar />
      <FriendsContainer />
    </aside>
  );
};

export default Sidebar;
