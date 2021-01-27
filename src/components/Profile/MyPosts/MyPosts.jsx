import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div className={s.posts}>
      <Post message="Hi, how are you?" likesСount="30" />
      <Post message="It's my first post" likesСount="40" />
    </div>
  );
};

export default MyPosts;
