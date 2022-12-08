import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { React, useState } from "react";
import "../styles.scss";
import "../App.css";
import "./ProjectPages.css";
import { Link, Route, Routes } from "react-router-dom";
import SpotiflyUI from "../images/SpotiflyUI.png";
import SpotiflyOutput from "../images/SpotiflyOutput.png";
import HedgehogModal from "../images/HedgehogModal.png";
import HedgehogProcess from "../images/HedgehogProcess.png";

function Hedgehog() {
  return (
    <div className="bigPage">
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3 header">
          <h2 style={{ color: "#783F04" }}>Hedgehog</h2>
          <p style={{ color: "#783F04" }}>UI Design for Startup</p>
        </Row>
      </Container>
      <Container className="noPadding">
        <Col>
          <Row className="d-grid gap-3">
            <p>
              A high-fidelity mockup for Hedgehog, an AI-driven mushroom farming
              startup.
            </p>
            <p>Mushrooms.</p>
            <p>2022</p>
          </Row>
        </Col>

        <Col>
          <Row className="d-grid gap-3">
            <p>
              This high-fidelity mockup is built for mushroom farmers to
              overview the status of the farm, plan out planting and harvesting
              dates, and interact with the robotics.
            </p>
          </Row>
        </Col>
      </Container>
      <div className="imageWrapper" style={{ background: "none" }}>
        <img src={HedgehogModal} alt="Spotifly UI" className="imageVert"></img>
      </div>
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3 rowPadding">
          <h2>Introduction</h2>
          <p>
            As part of our UI/UX class, we were tasked with creating a
            high-fidelity prototype for a Y Combinator-backed startup in teams
            of four. After scrolling through the list of W22 startups, we
            stumbled across Hedgehog.
          </p>
          <p>
            Hedgehog is designing AI-driven robots to optimize the mushroom
            farming process by optimizing growing conditions to increase yield.
          </p>
          <p>
            Our team had 2 members who had prior experience working on a farm,
            and we all loved the company's goal. So, we decided to build out a
            high-fidelity mockup that allows mushroom farmers that interacts
            with Hedgehog's robots to overview the status of the farm and plan
            out planting and harvesting dates.
          </p>
        </Row>
        <Row className="d-grid gap-3">
          <h2>The Design Process</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ea fugit veniam porro necessitatibus illo, dignissimos dolore. Quos
            consequuntur cupiditate quod obcaecati ab fuga excepturi, assumenda
            saepe deleniti dicta pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ea fugit veniam porro necessitatibus illo, dignissimos dolore. Quos
            consequuntur cupiditate quod obcaecati ab fuga excepturi, assumenda
            saepe deleniti dicta pariatur?
          </p>
        </Row>
      </Container>
      <div className="imageWrapper" style={{ background: "#FFF" }}>
        <img src={HedgehogProcess} alt="Process" className="image"></img>
      </div>
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3 rowPadding">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ea fugit veniam porro necessitatibus illo, dignissimos dolore. Quos
            consequuntur cupiditate quod obcaecati ab fuga excepturi, assumenda
            saepe deleniti dicta pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ea fugit veniam porro necessitatibus illo, dignissimos dolore. Quos
            consequuntur cupiditate quod obcaecati ab fuga excepturi, assumenda
            saepe deleniti dicta pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ea fugit veniam porro necessitatibus illo, dignissimos dolore. Quos
            consequuntur cupiditate quod obcaecati ab fuga excepturi, assumenda
            saepe deleniti dicta pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ea fugit veniam porro necessitatibus illo, dignissimos dolore. Quos
            consequuntur cupiditate quod obcaecati ab fuga excepturi, assumenda
            saepe deleniti dicta pariatur?
          </p>
        </Row>
      </Container>
      <div className="imageWrapper" style={{ background: "none" }}>
        <iframe
          className="figma"
          title="Hifi Prototype"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTffyoyKvKhigzSvNilhPPV%2FHedgehog-Hi-Fi%3Fnode-id%3D0%253A1%26t%3Dt17THkoWe3KqG3mt-1"
          allowfullscreen
        ></iframe>
        <iframe
          className="figma"
          title="Hifi Prototype"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTffyoyKvKhigzSvNilhPPV%2FHedgehog-Hi-Fi%3Fpage-id%3D0%253A1%26node-id%3D100%253A3%26viewport%3D435%252C336%252C0.11%26scaling%3Dcontain%26starting-point-node-id%3D2%253A4"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Hedgehog;
