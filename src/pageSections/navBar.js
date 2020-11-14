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
import ReferralsSection from '../websiteSections/refSection/referralsSection';
import './navBar.css';

const NavBar = () => {    
    return (
        <Router>
            <ul>
                <li><Link to="/main">home</Link></li>
                <li><Link to="/articles">articles</Link></li>
                <li><Link to="/referrals">referrals</Link></li>
                <li><Link to="/about">about</Link></li>
            </ul>
            <Switch>
                <Route path="/articles">
                    <ArticlesSection/>
                </Route>
                <Route path="/referrals">
                    <ReferralsSection/>
                </Route>
                <Route path="/about">
                    <AboutSection />
                </Route>
                <Route path="/">
                    <HomeSection/>
                </Route>
            </Switch>
        </Router>
    )
}
export default NavBar;