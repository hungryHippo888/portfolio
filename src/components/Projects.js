import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import projectData from "../assets/project-data.json";
import { React, useState } from "react";
import ProjectCard from "./ProjectCard.js";
import "../styles.scss";
import "../App.css";
import "./Projects.css";
import { Link, Route, Routes } from "react-router-dom";

function Projects() {
  return (
    <>
      <div className="Projects">
        <h1>Projects</h1>
        <Row style={{ paddingTop: "1vh", paddingBottom: "5vh" }}>
          Here's what I'm working on right now!
        </Row>
        <div className="container">
          {projectData.map((item) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`/${item.name.replace(/\s+/g, "-")}`}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
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
    </>
  );
}
export default Projects;
