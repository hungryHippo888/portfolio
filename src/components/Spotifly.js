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
import SpotiflyModal from "../images/SpotiflyModal.png";

import OAuth from "../images/SpotiflyOAuth.png";

function Spotifly() {
  return (
    <div className="bigPage">
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3 header">
          <h2 style={{ color: "#1DB954" }}>Spotifly</h2>
          <p>React Web App</p>
        </Row>
      </Container>
      <Container className="noPadding">
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
      <div className="imageWrapper">
        <img src={SpotiflyUI} alt="Spotifly UI" className="image"></img>
      </div>
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3 rowPadding">
          <h2>Introduction</h2>
          <p>
            Over the summer, my friends and I would always play a song guessing
            game with our Spotify playlists, where we would listen to songs and
            then try and guess the song title.
          </p>
          <p>
            I never won. So, I decided to try and make something that could help
            me.
          </p>
          <p>
            I began working on this project as a fun way to learn the basics of
            working with APIs and React.
          </p>
        </Row>
        <Row className="d-grid gap-3">
          <h2>The Technical</h2>
          <p>
            The most difficult challenge for me was figuring out how APIs work.
            To start, I watched a bunch of Youtube videos on REST API
            fundamentals, and then dived into the Spotify API Documentation.
          </p>
          <p>
            To personalize a user's Spotifly experience, I needed to connect a
            user to their Spotify account and retrieve information about their
            favorited songs. To do so, I followed the Authorization portion of
            the Spotify development guide, which stepped through how to set up
            the web app as the client.
          </p>
        </Row>
      </Container>
      <div className="imageWrapper" style={{ background: "#FFF" }}>
        <img src={OAuth} alt="Spotifly UI" className="image"></img>
      </div>
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3 rowPadding">
          <p>
            After setting up access to the user's Spotify account, I retrieved
            their favorited songs. Then, I began working on the Wordle Variant
            itself.
          </p>
          <p>
            It was around this point in time that after sharing this idea with
            some of my coworkers, they explained that Heardle, another Spotify
            Wordle variant, was already a thing :(
          </p>
          <p>
            In an effort to nevertheless complete the project, I decided to try
            and create the traditional Wordle guessing grid. To start, I
            initialized a grid, currRow, currCol, and isGameOver useStates. By
            using Event Listeners, I took in input from different key presses,
            and mapped the enter key to guess songs.
          </p>
          <p>
            After figuring out the rules for the game, I created a Modal that is
            displayed at the first time a user opens the page. Below is a
            screenshot of what it looks like :)
          </p>
        </Row>
      </Container>
      <Container fluid className="containerPadding">
        <Row className="d-grid gap-3">
          <h2>The Output</h2>
          <p>
            Below is a screenshot of a user who guessed the song "hello" within
            2 seconds of the music playing. Impressive!
          </p>
        </Row>
      </Container>

      <div className="imageWrapper" style={{ background: "none" }}>
        <img src={SpotiflyOutput} alt="Spotifly Output" className="image"></img>
        {/* <img src={SpotiflyModal} alt="Spotifly Modal" className="twoColImg"></img> */}
      </div>
    </div>
  );
}

export default Spotifly;
