import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://cf.bstatic.com/images/hotel/max1024x768/228/228522693.jpg" />
      </div>
      <div>ava + description</div>
        <MyPosts />
    </div>
  );
};

export default Profile;
