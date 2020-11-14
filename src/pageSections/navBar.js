import React from 'react'
import './navBar.css';

const NavBar = () => {
    return (
        <ul>
            <li><a href="/">home</a></li>
            <li><a href="/articles">artiles</a></li>
            <li><a href="/referrals">referrals</a></li>
            <li><a href="/about">about</a></li>
        </ul>
    )
}
export default NavBar;