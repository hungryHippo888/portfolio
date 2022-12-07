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
      <Link style={{ textDecoration: "none" }} to="/">
        <h3>Home</h3>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/resume">
        <h3>Resume</h3>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/aboutUs">
        <h3>About Us</h3>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/portfolio">
        <h3>Portfolio</h3>
      </Link>
      {/* <div className="gradientBorder"></div> */}
    </div>
  );
}

export default NavBar;
