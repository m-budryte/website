import React from "react";
import { Parallax, Background } from 'react-parallax';
import "./mainPage.css";
import ArticlesSection from '../ArticlesSection/articlesSection'
import ReferralsSection from '../RefSection/referralsSection'
import AboutSection from '../AboutSection/aboutSection'

const MainPage = () => {
  
  return (
  <Parallax style={{backgroundColor: "midnightblue"}} 
  >
    <div className="mainPage">
    <h2 style={{ color: `lightblue` }}>MY JOURNEY SO FAR</h2>
    <AboutSection />
    <h2 style={{ color: `lightblue` }}>MY MOST RECENT ARTICLES</h2>
    <ArticlesSection/>
    <h2 style={{ color: `lightblue` }}>REFERRAL LINKS</h2>
    <ReferralsSection />
    </div>
  </Parallax>)

};

export default MainPage;
