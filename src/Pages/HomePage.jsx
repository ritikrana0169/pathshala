import React from "react";
import { Link } from "react-router-dom";
import "../Styles/HomePage.css";
import studentPic from "../assets/students.png";
import safetyPic from "../assets/safety.png";
import approachImg3 from "../assets/approach3.png";
import approachImg4 from "../assets/approach4.png";

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
      <div className="approach">
        <div className="approachHeading">
          <h1>Why Stanford Elementary</h1>
        </div>
        <div className="approachDetails">
          <div className="approachImg1 backgroundImg">
            <h3>OUR APPROACH</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>
            <button className="aboutUsBtn btnOnImg">Learn More</button>
          </div>
          <div className="admission">
            <h3>ADDMISSION</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>
            <button className="aboutUsBtn">Learn More</button>
          </div>
          <div className="approachImg2 backgroundImg">
            <h3>Enhance Learning</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>
            <button className="aboutUsBtn btnOnImg">Learn Programs</button>
          </div>
          <div className="admission">
            <h3>Latest News & Events</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>
            <button className="aboutUsBtn">View All</button>
          </div>
          <div>
            <img src={approachImg3} alt="" />
          </div>
          <div className="admission">
            <h3>For the Parents</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>
            <button className="aboutUsBtn">Get Informed</button>
          </div>
          <div>
            <img src={approachImg4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
