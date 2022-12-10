import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { React, useState } from "react";
import "../styles.scss";
import "../App.css";
import "./Photos.css";
import ArcDeTriomphe from "../images/photos/ArcDeTriomphe.png";
import BritishMuseum from "../images/photos/BritishMuseum.png";
import Chess from "../images/photos/Chess.png";
import Clock from "../images/photos/Clock.png";
import Montmartre from "../images/photos/Montmartre.png";
import Paris from "../images/photos/Paris.png";
import Pic1 from "../images/photos/Pic1.png";
import Pic2 from "../images/photos/Pic2.png";
import Victory from "../images/photos/Victory.png";

function Photos() {
  return (
    <div className="grid">
      <Image src={ArcDeTriomphe} rounded></Image>
      <Image src={BritishMuseum} rounded></Image>
      <Image src={Chess} rounded></Image>
      <Image src={Clock} rounded></Image>
      <Image src={Montmartre} rounded></Image>
      <Image src={Paris} rounded></Image>
      <Image src={Pic1} rounded></Image>
      <Image src={Pic2} rounded></Image>
      <Image src={Victory} rounded></Image>
    </div>
  );
}

export default Photos;
