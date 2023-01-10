import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import ProjectCard from "./ProjectCard.js";
import "../styles.scss";
import "../App.css";
import "./NavBar.css";
import { Link, Route, Routes } from "react-router-dom";
// import { HashLink as HLink } from 'react-router-hash-link';
import Logo from "../images/MF-logo.png";

function NavBar() {
  const [currentLink, setCurrentLink] = useState("");

  const currStyle = { color: "#FFF" };
  const defaultStyle = { textDecoration: "none" };

  return (
    <div className="navBar">
      <div className="navBar-left">
        <Link
          className="button"
          to="/portfolio"
          onClick={() => setCurrentLink("portfolio")}
        >
          <img
            src={Logo}
            style={{ height: "50px", width: "50px" }}
            alt="website logo"
          ></img>
        </Link>
      </div>
      <div className="navBar-right">
        <Link
          style={currentLink === "photos" ? currStyle : defaultStyle}
          className="button"
          to="/photos"
          onClick={() => setCurrentLink("photos")}
        >
          <h3>Photos</h3>
        </Link>
        <Link
          style={currentLink === "aboutMe" ? currStyle : defaultStyle}
          className="button"
          to="/aboutMe"
          onClick={() => setCurrentLink("aboutMe")}
        >
          <h3>About Me</h3>
        </Link>
        <Link
          style={currentLink === "experience" ? currStyle : defaultStyle}
          className="button"
          to="/experience"
          onClick={() => setCurrentLink("experience")}
        >
          <h3>Experience</h3>
        </Link>
        <Link
          style={currentLink === "projects" ? currStyle : defaultStyle}
          className="button"
          to="/projects"
          onClick={() => setCurrentLink("projects")}
        >
          <h3>Projects</h3>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
