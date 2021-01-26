import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div className={s.posts}>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
