import React from "react";
import { Link } from "react-router-dom";
import "../Styles/HomePage.css";
import studentPic from "../assets/students.png";
import safetyPic from "../assets/safety.png";
import approachImg3 from "../assets/approach3.png";
import approachImg4 from "../assets/approach4.png";
import why1 from "../assets/why1.jpg";

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
        <div className="approachCards whiteFont">
          <img src={why1} alt="Error" />
          <div>
            <h2>Our Aproach</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              illum explicabo. Doloremque beatae earum temporibus harum, illum
              dolorum quam facere!
            </p>
            <Link to="/mentors">
              <button>About Our School</button>
            </Link>
          </div>
        </div>
        <div className="approachCards allignRight red">
          <img className="imgOpacity" src={why1} alt="Error" />
          <div>
            <h2>Addmission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              illum explicabo. Doloremque beatae earum temporibus harum, illum
              dolorum quam facere!
            </p>
            <Link to="/contactus">
              <button>Connect</button>
            </Link>
          </div>
        </div>
        <div className="approachCards allignRight blue whiteFont">
          <img className="imgOpacity" src={why1} alt="Error" />
          <div>
            <h2>Addmission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              illum explicabo. Doloremque beatae earum temporibus harum, illum
              dolorum quam facere!
            </p>
            <Link to="/contactus">
              <button>Connect</button>
            </Link>
          </div>
        </div>
        <div className="approachCards whiteFont">
          <img src={why1} alt="Error" />
          <div>
            <h2>Our Aproach</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              illum explicabo. Doloremque beatae earum temporibus harum, illum
              dolorum quam facere!
            </p>
            <Link to="/mentors">
              <button>About Our School</button>
            </Link>
          </div>
        </div>
        <div className="approachCards whiteFont">
          <img src={why1} alt="Error" />
          <div>
            <h2>Our Aproach</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              illum explicabo. Doloremque beatae earum temporibus harum, illum
              dolorum quam facere!
            </p>
            <Link to="/mentors">
              <button>About Our School</button>
            </Link>
          </div>
        </div>
        <div className="approachCards allignRight red whiteFont">
          <img className="imgOpacity" src={why1} alt="Error" />
          <div>
            <h2>Addmission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              illum explicabo. Doloremque beatae earum temporibus harum, illum
              dolorum quam facere!
            </p>
            <Link to="/contactus">
              <button>Connect</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
