import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import { React, useState } from "react";
import ProjectCard from "./ProjectCard.js";
import "../styles.scss";
import "../App.css";
import { Link, Route, Routes } from "react-router-dom";

function TitlePage() {
  return (
    <div className="landingPage">

    <div className="title">
      <h1 className="titleGradient">Hello! I'm Michael,</h1>
      <h1 className="titleGradient">a Brown University</h1>
      <h1>___________.</h1>
    </div>
    </div>

  );
}

export default TitlePage;
