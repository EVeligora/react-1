import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.profile_bg}>
        <img src="https://cf.bstatic.com/images/hotel/max1024x768/228/228522693.jpg" />
      </div>
      <div>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
