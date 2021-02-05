import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  
  let messageElements = props.posts.map((m) => (
    <Post message={m.message} likesСount={m.likesСount} />
  ));

  let newPostEl = React.createRef();
  let addPost = () => {
    let text = newPostEl.current.value;
    props.addPost(text);
  }

  return (
    <div className={s.posts}>
      <form className={s.posts_form} action="">
        <div>
          <textarea ref={newPostEl}></textarea>
        </div>
        <div>
          <button onClick= { addPost }>Send</button>
        </div>
      </form>
      {/* <Post message={messagesData[0].message} likesСount={messagesData[0].likesСount} />
      <Post message={messagesData[1].message} likesСount={messagesData[1].likesСount} /> */}
      {messageElements}
    </div>
  );
};

export default MyPosts;
