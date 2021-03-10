const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
  posts: [
    {
      id: 1,
      message: "Hi, how are you?",
      likesСount: "48",
    },
    {
      id: 2,
      message: "It's my first post",
      likesСount: "56",
    },
  ],
  newPostText: "lalala",
};

const profileReducer = (state = initialState, action) => {
  //let stateCopy;
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesСount: 0,
      };
      // stateCopy = {
      //   ...state,
      //   posts: [...state.posts, newPost],
      //   newPostText: "",
      // };
      // stateCopy.posts = [...state.posts];
      // stateCopy.posts.push(newPost);
      //stateCopy.newPostText = "";
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_POST_TEXT: {
      // stateCopy = {
      //   ...state,
      //   newPostText: action.newText
      // };
      //stateCopy.newPostText = action.newText;
      return {
        ...state,
        newPostText: action.newText
      };
    }
    default:
      return state;
  }

}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostTextActionCreator = (text) =>
  ({ type: UPDATE_POST_TEXT, newText: text });


export default profileReducer;