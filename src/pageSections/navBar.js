import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AboutSection from '../websiteSections/AboutSection/aboutSection';
import ArticlesSection from '../websiteSections/ArticlesSection/articlesSection'
import HomeSection from '../websiteSections/HomeSection/homeSection';
import ReferralsSection from '../websiteSections/RefSection/referralsSection';
import './navBar.css';

const NavBar = () => {
    return (
        <Router>
            <ul>
                <li><Link to="/website">home</Link></li>
                <li><Link to="/website/about">about me</Link></li>
                <li><Link to="/website/articles">articles</Link></li>
                <li><Link to="/website/referrals">referrals</Link></li>
            </ul>
            <div className="switch">
            <Switch>
                <Route path="/website/articles">
                    <ArticlesSection />
                </Route>
                <Route path="/website/referrals">
                    <ReferralsSection />
                </Route>
                <Route path="/website/about">
                    <AboutSection />
                </Route>
                <Route path="/website">
                    <HomeSection />
                </Route>
            </Switch>
            </div>
        </Router>
    )
}
export default NavBar;