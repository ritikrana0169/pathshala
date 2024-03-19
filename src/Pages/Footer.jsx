import React, { useState } from "react";
import "../Styles/Footer.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="footer">
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Thanks for your feedback... Have a good day"
      />
      <div>
        <div className="address">
          <p className="footerHeading">Standford Elementary</p>
          <p className="paraAddress">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            ducimus?
          </p>
        </div>
        <div className="community">
          <p className="footerHeading">Join the communinty</p>
          <Link to="/">
            <RiFacebookFill />
          </Link>
          <Link to="/">
            <FaTwitter />
          </Link>
          <Link to="/">
            <BsYoutube />
          </Link>
          <Link to="/">
            <RiInstagramLine />
          </Link>
        </div>
      </div>
      <div className="contact">
        <p className="footerHeading">Contact</p>
        <form className="contactFrom">
          <div className="nameDetails">
            <div>
              <label>First Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" required />
            </div>
          </div>
          <div>
            <label>Email</label>
            <input type="email" required />
          </div>
          <div>
            <label>Subject</label>
            <input type="text" required />
          </div>
          <div>
            <label>Leave us a message...</label>
            <textarea />
          </div>
          <button type="submit" className="submitbtn" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
