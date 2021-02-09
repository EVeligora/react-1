import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  let messageElements = props.posts.map((m) => (
    <Post message={m.message} likesСount={m.likesСount} />
  ));

  let newPostEl = React.createRef();
  let addPost = () => {
    //let text = newPostEl.current.value;
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostEl.current.value;
    props.updPostText(text);
  };      

  return (
    <div className={s.posts}>
      <form className={s.posts_form} action="">
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostEl}
            value={props.newPostText}
          />
        </div>
        <div>
          <button type="button" onClick={addPost}>
            Send
          </button>
        </div>
      </form>
      <div className={s.post_list}>{messageElements}</div>
    </div>
  );
};

export default MyPosts;
