import React from "react";
import school from "../assets/school.png";
import { Link } from "react-router-dom";
import "../Styles/HomePage.css";
import studentPic from "../assets/students.png";
import safetyPic from "../assets/safety.png";

const HomePage = () => {
  return (
    <div className="home">
      <div className="info">
        <div>
          <h3 className="quote">
            Let us remember: One book, one pen, one child and one teacher can
            change the <span>world.</span>
          </h3>
          {/* <Link to="/contactus">
            <button className="infobtn">Contact Us</button>
          </Link> */}
        </div>
        <div>
          <img src={school} alt="school" />
        </div>
      </div>
      <div className="aboutus">
        <div>
          <img src={studentPic} alt="students" />
        </div>
        <div>
          <h1>Stanford</h1>
          <h1>Elementary</h1>
          <h3>A Great Place</h3>
          <h3>to Learn</h3>
          <Link to="/mentors">
            <button className="aboutUsBtn">About Our School</button>
          </Link>
        </div>
      </div>
      <div className="safetyFirst">
        <div>
          <h3>Safety First</h3>
          <p>
            Full reopening plans for next year, include a physically-distanced
            in-person learning model
          </p>
          <button className="aboutUsBtn">Learn More</button>
        </div>
        <div>
          <img src={safetyPic} alt="beSafe" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
