import React from "react";
import { Link } from "react-router-dom";
import "../Styles/HomePage.css";
import studentPic from "../assets/students.png";
import safetyPic from "../assets/safety.png";

const HomePage = () => {
  return (
    <div className="home">
      <div className="aboutus col-rev">
        <div>
          <img src={studentPic} alt="students" />
        </div>
        <div>
          <div>
            <h1>Pathshala</h1>
            <h3>The Iconic School</h3>
            <Link to="/mentors">
              <button className="aboutUsBtn">About Our School</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="aboutus safety-img">
        <div>
          <img src={safetyPic} alt="beSafe" />
        </div>
        <div>
          <div>
            <h3>Safety First</h3>
            <p>
              Full reopening plans for next year, include a physically-distanced
              in-person learning model
            </p>
            <button className="aboutUsBtn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
