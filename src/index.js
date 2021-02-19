import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/state";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        updPostText={store.updPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updMessageText={store.updMessageText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

store.subscriber(rerenderEntireTree);

rerenderEntireTree(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
