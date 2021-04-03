import React, {createRef} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import './navBar.css';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link


const NavBar = () => { 
    return (
        <BrowserRouter>
            <div className="navBar">
                <ul>
                    <li><ScrollLink to="about" spy={true} smooth={true} >about me</ScrollLink></li>
                    <li><ScrollLink to="articles" spy={true} smooth={true} >articles</ScrollLink></li>
                    <li><ScrollLink to="referrals" smooth={true} >referrals</ScrollLink></li>
                </ul>
            </div>
        </BrowserRouter>
    )
}
export default NavBar;