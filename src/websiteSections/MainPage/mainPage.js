import React from "react";
import { Parallax } from 'react-parallax';
import "./mainPage.css";
import ArticlesSection from '../ArticlesSection/articlesSection'
import ReferralsSection from '../RefSection/referralsSection'
import AboutSection from '../AboutSection/aboutSection'

const MainPage = () => {
  return (
  <Parallax style={{backgroundColor: "lightpink"}} 
  >
    <div className="mainPage">
    <h2 style={{ color: `darkblue` }} id='about'>MY JOURNEY SO FAR</h2>
    <AboutSection />
    <h2 style={{ color: `darkblue` }} id='articles'>MY MOST RECENT ARTICLES</h2>
    <ArticlesSection/>
    <h2 style={{ color: `darkblue` }} id='referrals'>REFERRAL LINKS</h2>
    <ReferralsSection />
    </div>
  </Parallax>)

};

export default MainPage;
