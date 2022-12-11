import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { React, useState } from "react";
import "../styles.scss";
import "../App.css";
import "./ProjectPages.css";
import "./ABTesting.css";
import { Link, Route, Routes } from "react-router-dom";
import A from "../images/A.gif";
import B from "../images/B.gif";
import BakeryA from "../images/BakeryA.png";
import BakeryB from "../images/BakeryB.png";
import SpotiflyOutput from "../images/SpotiflyOutput.png";
import A_heatmap from "../images/A_heatmap.png";
import B_heatmap from "../images/B_heatmap.png";

function ABTesting() {
  return (
    <div className="bigPage">
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3 header">
          <h2 style={{ color: "#FFEC52" }}>Website AB Testing</h2>
          <p style={{ color: "#FFEC52" }}>A/B Testing + Eye Tracking</p>
        </Row>
      </Container>
      <Container className="noPadding">
        <Col>
          <Row className="d-grid gap-3">
            <p>
              Conducted A/B testing on 2 high fidelity prototypes, then
              generated eye tracking heatmap + replay of gaze motion.
            </p>
            <p>Optimized for Egg Tarts.</p>
            <p>2022</p>
          </Row>
        </Col>
        <Col>
          <Row className="d-grid gap-3">
            <p>
              Built 2 high fidelity prototypes of bakery homepages, then
              conducted A/B testing to determine which prototype was easier for
              the user to interact with.
            </p>
          </Row>
        </Col>
      </Container>
      <div className="imageWrapper" style={{ backgroundColor: "#C75260" }}>
        <div className="grid2">
          <Image src={A} alt="Bakery A replay"></Image>
          <Image src={B} alt="Bakery B replay"></Image>
        </div>
      </div>
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3 rowPadding">
          <h2>Introduction</h2>
          <p>
            As part of my UI/UX course, we were tasked with conducting A/B
            testing and eye tracking on 2 high-fidelity prototypes we built to
            answer a UI/UX question in a quantitative manner. We wanted to
            figure out which design was faster for the user to complete the
            purchase of a bakery item. But first, we needed to design our
            high-fidelity prototypes.
          </p>
        </Row>
        <Row className="d-grid gap-3">
          <h2>The Prototyping</h2>
          <p>
            Since testing 2 similar designs is more likely to lead to similar
            results, we wanted to test 2 different designs and get more
            statistically different results.
          </p>
          <p>
            The images below are the 2 different prototypes we came up with.
          </p>
        </Row>
      </Container>
      <div className="imageWrapper" style={{ background: "none" }}>
        <div className="grid2">
          <Image src={BakeryA} alt="Bakery A Prototype"></Image>
          <Image src={BakeryB} alt="Bakery B Prototype"></Image>
        </div>
      </div>
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3">
          <h2>The Eye Tracking Tests</h2>
          <p>
            After developing the high-fidelity prototypes, we brought in two
            random users to test our designs. We had one user test on Design A,
            and another user test on Design B, and gave both users the task of
            adding an item to the cart, and then checking out.
          </p>
          <p>
            Our initial null hypothesis was that the time until completion on
            Version A will be equal to the time until completion on Version B.
            Our alternative hypothesis was that the time until completion on
            Version A will be greater than that of Version B.
          </p>
          <p>
            We completed these eye tracking tests through Brown's HCI Lab, and
            went on to analyze the results.
          </p>
        </Row>
      </Container>
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3">
          <h2>The Analysis + Results</h2>
          <p>
            The results from the tests were csv files with 3 rows of information
            for where the (x, y) coordinates the eyes were staring at on the
            screen and the time capture of each coordinate. Moreover, the tests
            produced a replay of the eye gazes (seen below) as well as a heatmap
            of the results.
          </p>
          <p>
            Based on our results, we reject our time for completion null
            hypothesis. The data file for version A was longer than the data
            file for version B, which tells us that the user for version A took
            longer than the user for version B. The user was able to add a
            specific food item and checkout more quickly on version B than on
            version A. This was due to the fact that version A had items already
            in the cart, which may have confused the user of version A, whereas
            version B had a more straightforward interface. In the replay of the
            eye tracker, you could see the version A user look up and down the
            page, implying confusion. Thus, we believe that version B would be a
            better interface for the bakery.
          </p>
          <p>The heatmap below further supports the conclusions made above.</p>
        </Row>
      </Container>
      <div className="imageWrapper" style={{ backgroundColor: "#FFEC52" }}>
        <div className="grid2">
          <Image src={A_heatmap} alt="Bakery A Heatmap"></Image>
          <Image src={B_heatmap} alt="Bakery B Heatmap"></Image>
        </div>
      </div>
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3">
          <h2>The Output</h2>
          <p>
            Below showcases the replays of where users looked throughout the
            testing process.
          </p>
        </Row>
      </Container>
      <div className="imageWrapper" style={{ background: "none" }}>
        <div className="grid2">
          <Image src={A} alt="Bakery A replay"></Image>
          <Image src={B} alt="Bakery B replay"></Image>
        </div>
      </div>
    </div>
  );
}

export default ABTesting;
