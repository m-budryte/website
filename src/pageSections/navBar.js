import React, {createRef} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import AboutSection from '../websiteSections/AboutSection/aboutSection';
import ArticlesSection from '../websiteSections/ArticlesSection/articlesSection'
import './navBar.css';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link


const NavBar = () => {
    return (
        <BrowserRouter>
            <div className="navBar">
                <ul>
                    <li><Link to="/website">about</Link></li>
                    <li><Link to="/website/articles">articles</Link></li>
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
    )
}
export default NavBar;