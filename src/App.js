import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import GamesContainer from "./components/Games/GamesContainer";
import ApplicationsContainer from "./components/Applications/ApplicationsContainer";

const App = (props) => {  
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebar}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer store={props.store} />} />
            <Route path="/profile" element={<Profile store={props.store} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/applications" element={<ApplicationsContainer store={props.store} />} />
            <Route path="/games" element={<GamesContainer store={props.store} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
