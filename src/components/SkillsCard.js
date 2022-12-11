import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { React, useState } from "react";
import "../styles.scss";
import "../App.css";
import "./AboutMe.css";
import { Link, Route, Routes } from "react-router-dom";

function SkillsCard(title, items) {

  return (
    <div>
      <p>{title}</p>
    </div>
  );
}

export default SkillsCard;
