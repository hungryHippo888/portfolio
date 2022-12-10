import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { React, useState } from "react";
import "../styles.scss";
import "../App.css";
import "./AboutMe.css";
import { Link, Route, Routes } from "react-router-dom";
// import Lottie from 'react-lottie';


function AboutMe() {
  return (
    <div className="aboutMe">
      <div style={{backgroundColor: "none", position: "relative"}}>
      {/* <iframe src="https://embed.lottiefiles.com/animation/53887" title="hello"></iframe>    */}
      <iframe src="https://embed.lottiefiles.com/animation/9911" title="animation"></iframe>   
      </div>
      <h2 className="titleGradient">Hello. I'm Hippo.</h2>
      <p>
        I'm a second year student at Brown University studying Computer
        Science-Economics. At school, I'm an TA for our Data Structures and
        Algorithms course and a project lead for Brown Consulting Club. I have
        prior professional experiences within venture capital and startups.
        Outside of coursework, I'm also a competitive chess player, compete on
        Brown's table tennis team, and play intramural basketball. I'm currently
        seeking summer opportunities where I can leverage my skills in a
        software engineering or data analytics role.
      </p>
    </div>
  );
}

export default AboutMe;
