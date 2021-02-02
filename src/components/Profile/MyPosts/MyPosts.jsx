import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  // let posts = [
  //   {
  //     id: 1,
  //     message: 'Hi, how are you?',
  //     likesСount: '48'
  //   },
  //   {
  //     id: 2,
  //     message: 'It\'s my first post',
  //     likesСount: '56'
  //   }
  // ];
 
  let messageElements = props.posts.map((m) => (
    <Post message={m.message} likesСount={m.likesСount} />
  ));

  return (
    <div className={s.posts}>
      <form className={s.posts_form} action="">
        <div>
          <textarea placeholder="Write something..."></textarea>
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
      {/* <Post message={messagesData[0].message} likesСount={messagesData[0].likesСount} />
      <Post message={messagesData[1].message} likesСount={messagesData[1].likesСount} /> */}
      {messageElements}
    </div>
  );
};

export default MyPosts;
