import React, { useEffect, useState } from "react";
import logo from "../assests/Netflix_logo.svg.png";
import avatar from "../assests/login logo.jpg";
import "../components/Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="netfix-logo" />
      <img className="nav_avatar" src={avatar} alt="avatar-logo" />
    </div>
  );
};

export default Navbar;
