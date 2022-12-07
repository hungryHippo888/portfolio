import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { React, useState } from "react";
import "../styles.scss";
import "../App.css";
import "./ProjectPages.css";
import { Link, Route, Routes } from "react-router-dom";

function Spotifly() {
  return (
    <div className="bigPage">
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3 header">
          <h2>Spotifly</h2>
          <p>React Web App</p>
        </Row>
      </Container>
      <Container>
        <Col>
          <Row className="d-grid gap-3">
            <p>A Song-guessing Spotify Wordle Variant.</p>
            <p>Personalized for you.</p>
            <p>2020</p>
          </Row>
        </Col>

        <Col>
          <Row className="d-grid gap-3">
            <p>
              After personal frustration of playing song-based guessing games
              and embarrassingly knowing none of the played songs, I decided to
              come up with my own song guessing game.
            </p>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default Spotifly;
