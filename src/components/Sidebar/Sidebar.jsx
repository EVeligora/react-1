import s from "./Sidebar.module.css";
import Navbar from "./Navbar/Navbar";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
  return (
    <aside className={s.sidebar}>
      <Navbar />
      <Friends state={props.state.friends}/>
    </aside>
  );
};

export default Sidebar;
