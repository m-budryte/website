import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutSection from "../websiteSections/AboutSection/aboutSection";
import ArticlesSection from "../websiteSections/ArticlesSection/articlesSection";
import "./navBar.css";

const NavBar = () => {
  return (
    <Router>
      <div className="navBar">
        <ul>
          <li>
            <Link to="/website">about</Link>
          </li>
          <li>
            <Link to="/website/articles">articles</Link>
          </li>
        </ul>
      </div>
      <Switch className="switch">
        <Route path="/website/articles">
          <ArticlesSection />
        </Route>
        <Route path="/website/">
          <AboutSection />
        </Route>
      </Switch>
    </Router>
  );
};
export default NavBar;
