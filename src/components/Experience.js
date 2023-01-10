import React from "react";
import "./Experience.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Roles from "../assets/roles.json";
import Education from "../assets/education.json";
import Skills from "../assets/skills.json";

function Experience() {
  return (
    <div className="ExperienceWrapper">
      <Container fluid>
        <Row>
          <div className="experienceCard">
          <h2>Experience</h2>
          <Row style={{ paddingTop: "1vh", paddingBottom: "2vh", color: "#FFF" }}>
          <h4>I have prior professional experiences ranging from
        working in venture capital to multi-billion dollar companies.</h4>
        </Row>
            {Roles.map((items) => (
              <div>
                <p style={{ fontWeight: "bold" }}>{items.role}</p>
                <p style={{ color: "#A9A9A9" }}>{items.employer}</p>
                <p className="itemDescription">{items.description}</p>
              </div>
            ))}
          </div>
        </Row>
        <Row>
          <div className="experienceCard">
          <h2>Skills</h2>
          {Skills.map((items) => (
              <div style={{display: "grid", gap: "3vh"}}>
                <p style={{ fontWeight: "bold" }}>{items.title}</p>
                <div className="skillsWrapper">
                {Object.values(items.items).map((data) => (
                    <div className="skillsCard">
                      <p style={{ fontWeight: "500" }}>{data}</p>
                      </div>
                ))}
                </div>
              </div>
            ))}
          </div>
        </Row>
        <Row>
        <div className="experienceCard">
          <h2>Education</h2>
            {Education.map((items) => (
              <div>
                <p style={{ fontWeight: "bold" }}>{items.role}</p>
                <p style={{ color: "#A9A9A9" }}>{items.employer}</p>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Experience;
