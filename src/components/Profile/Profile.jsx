import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  //debugger;
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        // posts={props.profilePage.posts}
        // newPostText={props.profilePage.newPostText}
        // dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;

