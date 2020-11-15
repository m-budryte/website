import React from "react";
import "./aboutSection.css";

const Timeline = () => {
  return (
    <div className="timelineComp">
      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h2>2020</h2>
            <p>Working at ThoughtWorks UK as a consultant developer</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>2019</h2>
            <p>Aug: Joined ThoughtWorks UK as a graduate</p>
            <p>Feb-May: Attended Makers Academy Coding bootcamp</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>2018</h2>
            <p>
              Freelanced for tech start-ups as a QA and Content manager in
              education, science and medicine domains.
            </p>
            <p>
              Continued to contribute on the topics of Health and Nutrition.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>2017</h2>
            <p>
              Graduated from King's College London with a Bachelor's degree in
              Nutrition
            </p>
            <p>
              Started writing articles on the topics on Health and Nutrition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
