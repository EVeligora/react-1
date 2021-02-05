import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar state={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
