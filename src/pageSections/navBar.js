import React, {createRef} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import './navBar.css';

const NavBar = () => { 
    return (
        <BrowserRouter>
            <div className="navBar">
                <ul>
                    <li><Link to="/" >home</Link></li>
                    <li><Link to="/about">about me</Link></li>
                    <li><Link to="/articles">articles</Link></li>
                    <li><Link to="/referrals">referrals</Link></li>
                </ul>
            </div>
        </BrowserRouter>
    )
}
export default NavBar;