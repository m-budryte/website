import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import AboutSection from '../websiteSections/AboutSection/aboutSection';
import ArticlesSection from '../websiteSections/ArticlesSection/articlesSection'
import HomeSection from '../websiteSections/HomeSection/homeSection';
import MainPage from '../websiteSections/MainPage/mainPage';
import ReferralsSection from '../websiteSections/RefSection/referralsSection';
import './navBar.css';

const NavBar = () => {
    return (
        <BrowserRouter>
            <div className="navBar">
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/about">about me</Link></li>
                    <li><Link to="/articles">articles</Link></li>
                    <li><Link to="/referrals">referrals</Link></li>
                </ul>
            </div>
            <div className="switch">
            <Switch>
                <Route path="/articles">
                    <ArticlesSection />
                </Route>
                <Route path="/referrals">
                    <ReferralsSection />
                </Route>
                <Route path="/about">
                    <AboutSection />
                </Route>
                <Route path="/test">
                    <MainPage />
                </Route>
                <Route path="/">
                    <HomeSection />
                </Route>
            </Switch>
            </div>
        </BrowserRouter>
    )
}
export default NavBar;