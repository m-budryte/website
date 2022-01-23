import React from "react";
import "./mainPage.css";
import ArticlesSection from '../ArticlesSection/articlesSection'
import AboutSection from '../AboutSection/aboutSection'

const MainPage = () => {
  return (
    <div className="mainPage">
    <h2 style={{ color: `darkblue` }} id='about'>MY JOURNEY SO FAR</h2>
    <AboutSection />
    <h2 style={{ color: `darkblue` }} id='articles'>MY MOST RECENT ARTICLES</h2>
    <ArticlesSection/>
    </div>)

};

export default MainPage;
