import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import projectData from "../assets/project-data.json";
import { React, useState } from "react";
import ProjectCard from "./ProjectCard.js";
import "../styles.scss";
import "../App.css";
import { Link, Route, Routes } from "react-router-dom";

function Projects() {
  return (
    <>
      <div className="Projects">
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
      </Routes>
    </>
  );
}
export default Projects;
