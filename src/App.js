import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// COMPONENTS
import Header from "./components/Header";

import HistoryDesc from "./components/HistoryDesc";
// PAGES
import Home from "./pages/Home";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import History from "./pages/History";
import About from "./pages/about";
import Register from "./pages/register";
import Profile from "./pages/Profile";

function App() {
  const isLogged = useSelector((state) => state.user);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/events">
          {isLogged.isLogged === false ? <Redirect to="/login" /> : <Events />}
        </Route>
        <Route exact path="/history">
          <History />
        </Route>

        <Route path="/history/:id">
          <HistoryDesc />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/profile">
          {isLogged.isLogged === false ? <Redirect to="/login" /> : <Profile />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
