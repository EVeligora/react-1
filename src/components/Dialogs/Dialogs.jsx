import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs_wrap}>
      <ul className={s.dialog_list}>
        <li>
          <a href="#">John</a>
        </li>
        <li>
          <a href="#">Alex</a>
        </li>
        <li>
          <a href="#">Mary</a>
        </li>
        <li>
          <a href="#">Max</a>
        </li>
      </ul>
      <div className={s.messages}>
          <div>
            Hi
          </div>
          <div>
            Hello
          </div>
          <div>
            How are you?
          </div>
          <div>
            Fine, thanks
          </div>
      </div>
    </div>
  );
};

export default Dialogs;
