import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Row from 'react-bootstrap/Row';
import projectData from './assets/project-data.json';
import { React, useState } from "react";
import ProjectCard from "./components/ProjectCard.js";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <div className='landingPage'>
        <div className='navBar'>
          <h2>Resume</h2>
          <h2>About Us</h2>
          <h2>Portfolio</h2>
        </div>
        <div className='title'>
          <h1 className="titleGradient">Hello! I'm Michael,</h1>
          <h1 className="titleGradient">a Brown University</h1>
          <h1>___________.</h1>
        </div>
      </div>
      <div className='Projects'>
        <h1>Projects</h1>
        <Row style={{color: "black", paddingBottom: "20px"}}>Here's what I'm working on right now!</Row>
        <div className="container">
        {projectData.map((item) => (
        <ProjectCard card={item} name={item.name} image={item.image} description={item.description} tech={item.tech} href={item.href} color={item.color}></ProjectCard>
        ))}
      </div>
        </div>
    </div>
  );
}

export default App;
