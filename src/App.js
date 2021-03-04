import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <DialogsContainer />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile/>
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
