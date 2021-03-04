import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div></div>
      <div className={s.item}>
        <img src="https://mtdata.ru/u14/photoFB6E/20684325461-0/original.jpg" alt=''/>
        {props.message}
        <div>
          <span>like</span>
          {props.likesСount}
        </div>
      </div>
    </div>
  );
};

export default Post;
 