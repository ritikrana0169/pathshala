import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { Fade as Hamburger } from "hamburger-react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="Navbar">
      <div className="logo">
        <Link to="/" onClick={toggleMenu}>
          Logo
        </Link>
      </div>
      <Hamburger
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        toggled={isOpen}
        toggle={setOpen}
      />
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li onClick={toggleMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/facility">Facility</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/event">Event</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/mentors">Mentors</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/career">Career</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
