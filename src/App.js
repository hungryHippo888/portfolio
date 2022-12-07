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
import Spotifly from "./components/Spotifly";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
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
        {/* <Route path="/resume" element={<></>}></Route> */}
        <Route path="/Spotifly" element={<Spotifly></Spotifly>}></Route>
        <Route path="/Hedgehog" element={<Projects></Projects>}></Route>
      </Routes>
    </div>
  );
}

export default App;
