import s from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <div></div>
      <div className={s.item}>
        <img src="https://mtdata.ru/u14/photoFB6E/20684325461-0/original.jpg" />
        Post 1
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
