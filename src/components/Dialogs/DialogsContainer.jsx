import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = () => {
//   //debugger;
//   return (
//   <StoreContext.Consumer>
//     {
//       (store) => {
//         let state = store.getState();

//         let addMessage = () => {
//           store.dispatch(addMessageActionCreator());
//         };

//         let onMessageChange = (text) => {
//           let action = updateMessageTextActionCreator(text);
//           store.dispatch(action);
//         };
//         return <Dialogs
//           addMessage={addMessage}
//           updateNewMessageText={onMessageChange}
//           dialogs={state.dialogsPage.dialogs}
//           messages={state.dialogsPage.messages}
//           newMessageText={state.dialogsPage.newMessageText}
//         />
//       }}
//   </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateMessageTextActionCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    }
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
