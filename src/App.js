import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Row from "react-bootstrap/Row";
import projectData from "./assets/project-data.json";
import { React, useState } from "react";
import ProjectCard from "./components/ProjectCard.js";
import "./styles.scss";
import { Link, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import TitlePage from "./components/TitlePage";

function App() {
  return (
    <div className="App">
        <div className="navBar">
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/resume">
            <h2>Resume</h2>
          </Link>
          <Link to="/aboutUs">
            <h2>About Us</h2>
          </Link>
          <Link to="/portfolio">
            <h2>Portfolio</h2>
          </Link>
        </div>
      {/* <Projects></Projects> */}
      {/* <div className="Projects">
        <h1>Projects</h1>
        <Row style={{ color: "black", paddingBottom: "20px" }}>
          Here's what I'm working on right now!
        </Row>
        <div className="container">
          {projectData.map((item) => (
            <Link to={`/${item.name}`}>
            <ProjectCard
              card={item}
              name={item.name}
              image={item.image}
              description={item.description}
              tech={item.tech}
              href={item.href}
              color={item.color}
            ></ProjectCard>
            </Link>
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/Spotifly" element={<Projects></Projects>}></Route>
        <Route path="/Hedgehog" element={<Projects></Projects>}></Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<><TitlePage/><Projects/></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
