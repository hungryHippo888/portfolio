import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { React, useState } from "react";
import "../styles.scss";
import "../App.css";
import "./AboutMe.css";
import { Link, Route, Routes } from "react-router-dom";
import skillsData from "../assets/skills.json";
import SkillsCard from "./SkillsCard";

function AboutMe() {
  const skillsCard = {
    display: "inline-flex",
    color: "whitesmoke",
    backgroundColor: "mediumseagreen",
    padding: ".75vw",
    margin: ".25vw",
    borderRadius: "4px",
  };

  const skillsArray = ["HTML", "CSS", "JS", "React", "Python", "Java"];

  return (
    <div className="aboutMe">
      <div style={{ backgroundColor: "none", position: "relative" }}>
        {/* <iframe src="https://embed.lottiefiles.com/animation/53887" title="hello"></iframe>    */}
        <iframe
          src="https://embed.lottiefiles.com/animation/9911"
          className="iframe"
          title="animation"
        ></iframe>
      </div>
      <h2 className="titleGradient">Hello. I'm Hippo.</h2>
      <p>
        I'm a second year student at Brown University studying Computer Science.
        At school, I'm an TA for our Data Structures and Algorithms course and a
        leading a project for a Fortune 500 Telecommunications Company for Brown
        Consulting Club. I have prior professional experiences within venture
        capital and startups. Outside of coursework, I'm also a competitive
        chess player, compete on Brown's table tennis team, and play intramural
        basketball. I'm currently seeking summer opportunities where I can
        leverage my skills in a software engineering or data analytics role.
      </p>
      {/* <h2>Skills</h2>
      <div className="skillsWrapper">
        {skillsArray.map((item) => (
          <ul key={item} style={skillsCard}>
            {item}
          </ul>
        ))}
      </div> */}
    </div>
  );
}

export default AboutMe;
