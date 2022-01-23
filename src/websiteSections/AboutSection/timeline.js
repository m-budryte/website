import React from "react";
import { Parallax } from "react-parallax";
import "./aboutSection.css";
import milkyway from './milky-way.jpeg'


const Timeline = () => {
  return (
    <Parallax bgImage={milkyway} 
    >
    <div className="timelineComp">
      <div className="timeline">
      <div className="container right">
          <div className="content">
            <h2>2017</h2>
            <p>
              Graduated from university
            </p>
            <p>
              Started doing freelance contributions for a popular online zine based in Russia.
            </p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>2018</h2>
            <p>
              Freelanced as a QA and Content manager in education, science and medicine domain startups.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>2019</h2>
            <p>Feb-May: Attended Makers Academy Coding bootcamp</p>
            <p>Aug: Joined ThoughtWorks UK as a graduate consultant developer</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>2020</h2>
            <p>Worked as part of cross-functional team at the digital transformation project in Public Sector</p>
            <p>Started AWS Associate Solutions Architect course</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>2021</h2>
            <p>Joined a Finance project in Private Sector</p>
          </div>
        </div>
      </div>
    </div>
    </Parallax>
  );
};

export default Timeline;
