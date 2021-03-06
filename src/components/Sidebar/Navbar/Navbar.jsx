import { NavLink } from "react-router-dom";
import s from "../Sidebar.module.css"

const Navbar = () => {
  return (
    <aside className={s.sidebar}>
      <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <NavLink to="/profile" activeClassName={s.active_mod}>
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active_mod}>
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/users" activeClassName={s.active_mod}>
            Users
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.active_mod}>
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" activeClassName={s.active_mod}>
            Music
          </NavLink>
        </div>
      </nav>
      <div className="friends">

      </div>
    </aside>
  );
};

export default Navbar;
