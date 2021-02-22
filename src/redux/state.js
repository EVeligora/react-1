let store = {
  _state: {
    profilePage: {
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
    },

    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Jack",
          img:
            "https://icdn.lenta.ru/images/2019/10/06/13/20191006135047104/pwa_vertical_1280_55d23da46a4b99f74eedbba9ec98aa80.jpg",
        },
        {
          id: 2,
          name: "Igor",
          img:
            "https://cdnimg.rg.ru/img/content/172/66/17/C432D6F5-D487-48EB-B01C-CAE4932EAF3E_d_850.jpeg",
        },
        {
          id: 3,
          name: "Ann",
          img:
            "https://aif-s3.aif.ru/images/018/931/90c365f50b5b311c39ea69d3e4d84345.jpg",
        },
        {
          id: 4,
          name: "Serg",
          img: "https://vedushie.by/files/items/5581/icon.jpg",
        },
      ],

      messages: [
        {
          id: 1,
          message: "Hi",
        },
        {
          id: 2,
          message: "Hello",
        },
        {
          id: 3,
          message: "How are you?",
        },
        {
          id: 4,
          message: "Fine, thanks",
        },
      ],

      newMessageText: "Yo, dude",
    },
    sidebar: {
      friends: [
        {
          name: "Igor",
        },
        {
          name: "Serg",
        },
        {
          name: "Yura",
        },
      ],
    },
  },
  _callSubscriber() { },

  getState() {

    return this._state;
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },

  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesСount: 0,
  //   };

  //   this._state.profilePage.posts.push(newPost);

  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // updPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText,
    };

    this._state.dialogsPage.messages.push(newMessage);

    this._state.dialogsPage.newMessageText = "";

    this._callSubscriber(this._state);
  },
  updMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesСount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export default store;
window.store = store;
