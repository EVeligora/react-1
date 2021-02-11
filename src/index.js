import React from "react";
import ReactDOM from "react-dom";
import state, { subscriber } from "./redux/state";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import { addMessage, addPost, updMessageText, updPostText } from "./redux/state";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updPostText={updPostText}
        addMessage={addMessage}
        updMessageText={updMessageText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

subscriber(rerenderEntireTree);

rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
