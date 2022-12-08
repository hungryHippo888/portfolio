import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { React, useState } from "react";
import "../styles.scss";
import "../App.css";
import "./ProjectPages.css";
import { Link, Route, Routes } from "react-router-dom";
import BrockGif from "../images/BrockGif.gif";
import BrockInitialUI from "../images/BrockInitialUI.png";

function BrockPage() {
  return (
    <div className="bigPage">
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3 header">
          <h2 style={{ color: "#d7b29d" }}>Brock's Breakfast Foods</h2>
          <p style={{ color: "#d7b29d" }}>React Web App</p>
        </Row>
      </Container>
      <Container className="noPadding">
        <Col>
          <Row className="d-grid gap-3">
            <p>
              A Responsive menu page with filtering, favoriting, sorting, and
              aggregator functionality.{" "}
            </p>
            <p>Built for Brunch.</p>
            <p>2022</p>
          </Row>
        </Col>

        <Col>
          <Row className="d-grid gap-3">
            <p>
              This app is designed as a menu for a brunch restaurant. With a
              coffee-colored theming and dark animated blocks for the different
              menu items, I was going for a minimalistic, clean looking menu
              website for a brunch restaurant to display its menu items in a
              highly digestable manner.
            </p>
          </Row>
        </Col>
      </Container>
      <div className="imageWrapper" style={{ background: "none" }}>
        <img src={BrockGif} alt="Spotifly UI" className="image"></img>
      </div>
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3 rowPadding">
          <h2>Introduction</h2>
          <p>
            I am a firm believer that the best meal is brunch. From eggs
            benedict to omelettes, brunch meals are the ideal way to start of a
            Sunday morning. Even at Brown, the best meals were VDub's waffles or
            Andrews' burrito bowls.
          </p>
          <p>
            For my UI/UX course, we were tasked to create a responsive webpage
            that specifically had filtering, favoriting, sorting, and aggregator
            functionality.
          </p>
          <p>
            To accomplish the task, I sought ought to create a minimalistic,
            responsive menu page for brunch menu items.
          </p>
          <p>
            To make my menu more accomodating, I wanted to give users the
            ability to filter by various dietary restrictions, such as gluten
            free. I also gave users the option to filter for food items less
            than 250 calories (for those on a calorie deficit.)
          </p>
          <p>
            P.S. (I know the title is Brock's Breakfast Foods; I just thought
            that sounded better :))
          </p>
        </Row>
        <Row className="d-grid gap-3">
          <h2>The Initial Design</h2>
          <p>
            After deciding that I wanted to create a menu for a brunch spot, I
            began designing a prototype of what I wanted the page to look like.
          </p>
          <p>
            I first began with choosing a tyopgraphy and color palette (which I
            found through random color palette generator with coffee-esque
            colors in mind).
          </p>
          <p>
            After seeing a really cool website online that had cards that can
            flip, I decided I wanted to find a way to implement this too.
          </p>
          <p>Below is the initial design I worked with.</p>
        </Row>
      </Container>
      <div className="imageWrapper" style={{ background: "#d7b29d" }}>
        <img src={BrockInitialUI} alt="Spotifly UI" className="image"></img>
      </div>
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3 rowPadding">
          <h2>The Technical</h2>
          <p>
            After a basic design, I tried to get down a minimally functioning
            site with all necessary functionality. I soon realized that was
            easier said than done.
          </p>
          <p>
            After heavily relying on the lab code for mapping through the JSON
            file, I began working on trying to filter by dietary restriction and
            calories. From going through the slides and a lot of Googling, I
            figured out a way to accomplish this through clever usage of logical
            operators.
          </p>
        </Row>
        <Row className="d-grid gap-3 rowPadding">
          <h2>Design Iterations + Feedback</h2>
          <p>
            With a functional page, I was excited to show off my work to my
            friends. After sharing my work, I got feedback from my friends, with
            suggestions that the filter circles were hard to use because you
            didn't know if the filter was turned on or off. Moreover, I got
            feeback to change the green color, remove the green background, and
            change the button shape.
          </p>
          <p>
            With these critiques in mind, I updated the design of my page
            accordingly.
          </p>
        </Row>
        <Row className="d-grid gap-3">
          <h2>Key Takeaway</h2>
          <p>
            In prior projects, UI/UX emphasized the importance of the iterative
            process. Nevertheless, from this project in particular, I learned
            how important the iterative process is, and the importance of going
            through multiple prototypes before officially designing. I had to
            effectively work twice as long updating my web app after recieving
            feedback. If I got feedback at the prototype stage, then I wouldn't
            have needed to redesign the page.
          </p>
          <p>I learned from my mistakes :)</p>
        </Row>
      </Container>
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3">
          <h2>The Output</h2>
          <p>
            Below is a GIF of a user favoriting the Belgian Waffle, flipping the
            card to see its information, and starting all over.
          </p>
        </Row>
      </Container>
      <div className="imageWrapper" style={{ background: "none" }}>
        <img src={BrockGif} alt="Spotifly UI" className="image"></img>
      </div>
    </div>
  );
}

export default BrockPage;
