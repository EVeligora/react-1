const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateMessageTextActionCreator = (text) =>
  ({ type: UPDATE_MESSAGE_TEXT, newText: text });

export default dialogsReducer;