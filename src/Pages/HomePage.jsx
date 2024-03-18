import React from "react";
import school from "../assets/school.png";
import { Link } from "react-router-dom";
import "../Styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="info">
        <div>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <span>Placeat, animi?</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            repellat, facilis recusandae aliquam quisquam quia sequi eligendi
            ipsum ratione consequuntur.
          </p>
          {/* <Link to="/contactus">
            <button className="infobtn">Contact Us</button>
          </Link> */}
        </div>
        <div>
          <img src={school} alt="school" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
