import { connect } from "react-redux";
import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let state = store.getState();

//           let addPost = () => {
//             store.dispatch(addPostActionCreator());
//           };

//           let onPostChange = (text) => {
//             let action = updatePostTextActionCreator(text);
//             store.dispatch(action);
//           };
//           return <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//           />
//         }
//       }
//     </StoreContext.Consumer>);
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updatePostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
