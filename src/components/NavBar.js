import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import ProjectCard from "./ProjectCard.js";
import "../styles.scss";
import "../App.css";
import "./NavBar.css";
import { Link, Route, Routes } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link style={{ textDecoration: "none" }} className= "button" to="/projects">
        <h3>Projects</h3>
      </Link>
      <Link style={{ textDecoration: "none" }} className= "button" to="/experience">
        <h3>Experience</h3>
      </Link>
      <Link style={{ textDecoration: "none" }} className= "button" to="/aboutMe">
        <h3>About Me</h3>
      </Link>
      <Link style={{ textDecoration: "none" }} className= "button" to="/photos">
        <h3>Photos</h3>
      </Link>
      {/* <div className="gradientBorder"></div> */}
    </div>
  );
}

export default NavBar;
