import React from "react";
import "./aboutSection.css";
import milkyway from "./milky-way.jpeg";

const Timeline = () => {
  return (
    <div className="timelineComp">
      <div className="timeline">
        <div className="container right">
          <div className="content">
            <h2>2019</h2>
            <p>Feb-May: Attended Makers Academy Coding bootcamp</p>
            <p>
              Aug: Joined ThoughtWorks UK as a graduate consultant developer
            </p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>2020</h2>
            <p>
              Worked as part of cross-functional team at the digital
              transformation project in Public Sector
            </p>
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
  );
};

export default Timeline;
