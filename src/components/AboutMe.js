import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import { React, useState } from "react";
import "../styles.scss";
import "../App.css";
import "./AboutMe.css";
import { Link, Route, Routes } from "react-router-dom";
import skillsData from "../assets/skills.json";
import SkillsCard from "./SkillsCard";
import Headshot from "../images/headshot.jpeg";
import Animation from "../images/animation.gif";

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
      <div
        style={{ backgroundColor: "none", position: "relative" }}
        className="imageWrapper2"
      >
        {/* <iframe src="https://embed.lottiefiles.com/animation/53887" title="hello"></iframe>    */}
        {/* <iframe
          // src="https://embed.lottiefiles.com/animation/9911"
          src={Animation}
          className="iframe"
          title="animation"
        ></iframe> */}
        {/* <Image src={Headshot} className="circular--landscape"></Image> */}
        <img src={Animation} alt="animation" className="animation"></img>
      </div>
      <h2 className="titleGradient">Hello. I'm Michael.</h2>
      <p style={{ fontSize: "1.35rem" }}>
        I'm a third year student at Brown University studying Computer Science
        and Economics. I'm currently the Founding Engineer of an Edtech startup
        that reaches 400,000+ monthly impressions. I have prior experience
        leading technical consulting projects for clients ranging from AT&T to
        healthtech startups. I also previously played with robots as a
        researcher within our Robotics Lab. At school, I am a teaching assistant
        for our Introduction to Systems Course, am captain of the Brown Table
        Tennis Team, and compete on the Brown Chess Team. I enjoy tackling
        difficult problems, and enjoy working with others to tackle difficult
        problems even more. I have a deep interest in technology and I'm
        currently seeking summer opportunities where I can leverage my skills in
        the technology or quantiative finance space.
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
