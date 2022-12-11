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
import HedgehogUI from "../images/HedgehogUI.png";

function Hedgehog() {
  return (
    <div className="bigPage">
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3 header">
          <h2 style={{ color: "#BFA68B" }}>Hedgehog</h2>
          <p style={{ color: "#BFA68B" }}>UI Design for Startup</p>
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
            high-fidelity prototype following the iterative design process for a
            Y Combinator-backed startup in teams of four. The project involved
            walking through the design process from sketches to high-fidelity
            prototypes, implementing studio feedback, and conducting real-world
            usability testing. After scrolling through the list of W22 startups,
            we stumbled across Hedgehog.
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
          <div className="imageWrapper" style={{ background: "#FFF" }}>
            <img src={HedgehogProcess} alt="Process" className="image"></img>
          </div>
          <p>
            The picture about showcases a brief overview of the transformation
            from our initial sketches to final prototype. The first step of our
            design process was figuring out what we wanted our mockup to provide
            to the user. Since the product is targeted towards mushroom users,
            we wanted to create an app that could help users better understand
            analytics of their mushroom clusters and notify users on any
            necessary concerns with the robots.
          </p>
          <p>
            The next step in the process was creating sketches of the ideas. We
            each spent 15 minutes independently creating various sketches of
            different app screens, and then came together to share our ideas.
            Inspired by designs in tech we've interacted with before, such as
            Apple Calendar and Tableau, we sought out to sketch our ideas to
            life.
          </p>
          <p>
            After developing 20+ sketches of different screens for our app, we
            began developing low-fidelity wireframes as an outline for our
            latter prototypes.
          </p>
          <p>
            With low-fidelity wireframes completed, we began thinking more
            critically about what how we wanted the user experience to be from a
            visual perspective. What design choices could we make to ensure
            visual hierarchy is clear? What color palette would be suitable for
            the app? With these types of questions in mind, we began developing
            our UI guide.
          </p>
        </Row>
      </Container>
      <div className="imageWrapper" style={{ background: "none" }}>
        <img src={HedgehogUI} alt="UI Style Guide" className="image"></img>
      </div>
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3">
          <p>
            With low-fidelity wireframes and a style guide in place, we were
            ready to develop our high-fidelity prototype.
          </p>
          <p>
            For our high-fidelity prototype, we developed 8 screens, 4 screens
            to support a calendar for the user to keep track of dates for
            planting and harvesting mushroom clusters, 1 screen to represent the
            analytics dashboard of all the different clusters through a spatial
            representation in the form of a simplified map of the farm, 2
            screens to represent what an analytics page would look like, and 1
            screen to add a new mushroom cluster. Below is an interactive
            version of our initial high-fidelity prototype.
          </p>
        </Row>
      </Container>
      <div className="imageWrapper" style={{ background: "none" }}>
        <iframe
          className="figma"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FzdyYLcnWqic6dBUKJVRLK1%2FHedgehog-Mockup%3Fpage-id%3D0%253A1%26node-id%3D2%253A4%26viewport%3D420%252C-155%252C0.19%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A3"
          allowfullscreen
          title="initial high-fidelity prototype"
        ></iframe>
      </div>
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3">
          <h2>The Feedback and Iteration</h2>
          <p>
            After the initial round of developing our high-fidelity prototypes,
            we shared our prototypes with our peers in a 40 person studio
            session.
          </p>
          <p>
            It was really exciting getting feedback from our studio, not only
            because we were able to share our work with our peers, but also
            because of the numerous suggestions we got. From the session we got
            3 key takeways in reference to our map page, analytics page, and
            general hierarchy.
          </p>
          <p>
            On the map page, people were originally confused on what the map was
            and how to navigate the screen. To improve on this, our team added a
            help section that explains to the user how the map works that is the
            first interaction users get when opening the app, and is also easily
            identifiable.
          </p>
          <p>
            On the analytics page, people were confused by a specific
            interaction with a map button and what the map button meant. To
            improve on this, our team replaced the map button with a back
            button.
          </p>
          <p>
            People were also sometimes confused by the general hierarchy of
            information on the analytics page of specific clusters. To improve
            on this, we bolded the specific character information
          </p>
          <p>
            With these suggestions in mind, we updated our high-fidelity
            prototype to improve on these interactions.
          </p>
        </Row>
      </Container>
      <div className="imageWrapper" style={{ background: "none" }}>
        <iframe
          className="figma"
          title="Hifi Prototype"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTffyoyKvKhigzSvNilhPPV%2FHedgehog-Hi-Fi%3Fpage-id%3D0%253A1%26node-id%3D100%253A3%26viewport%3D435%252C336%252C0.11%26scaling%3Dcontain%26starting-point-node-id%3D2%253A4"
          allowfullscreen
        ></iframe>
      </div>

      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3">
          <h2>The User Testing</h2>
          <p>
            Having test users try out an interface is an important part of
            testing and a valuable source of feedback. So, after updating our
            high-fidelity prototype, we conducted usability testing through a
            remote user testing service called UserTesting.com.
          </p>
          <p>
            From testing, we got another round of feedback as well. Users
            enjoyed the simplistic design and color palette, but a couple of
            users were confused about the lack of customization options.
            Moreover, we got feedback for calendar tasks and inconsistency of
            the colors, as users assumed green referred to days with a planting
            event and brown referred to days with a harvesting event (which
            wasn’t intentional) but since it wasn’t consistent, it confused
            multiple users.
          </p>
          <p>Below shows a video of one of the user testers.</p>
        </Row>
      </Container>
      <div className="imageWrapper" style={{ background: "none" }}>
        <iframe
          className="figma"
          src="https://www.youtube.com/embed/Js-_oLpoMko"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3">
          <h2>The Output + Takeaways</h2>
          <p>
            From this assignment, I learned about the iterative design process
            and the importance of constant feedabck. In many ways, this
            iterative design process is simlar to the Agile development
            principles my team utilized last summer and I use when working on
            group develompent projects. Agile development principles follow
            short sprints to breakdown large projects into smaller tasks. In the
            same way part of the advantage of Agile methedology is to ensure the
            product team is more aligned with the final product of the
            development team, our iterative design process for UI/UX ensures
            that the product will best serve its intended users.
          </p>
          <p>Below is the final version of the prototype.</p>
        </Row>
      </Container>
      <div className="imageWrapper" style={{ background: "none" }}>
        <iframe
          className="figma"
          title="Hifi Prototype"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTffyoyKvKhigzSvNilhPPV%2FHedgehog-Hi-Fi%3Fnode-id%3D0%253A1%26t%3Dt17THkoWe3KqG3mt-1"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Hedgehog;
