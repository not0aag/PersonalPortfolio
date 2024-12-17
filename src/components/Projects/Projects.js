import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movieDatabase from "../../Assets/Projects/MovieDatabase.png";
import snakeGame from "../../Assets/Projects/snackeGame.png";
import sansFlappyBird from "../../Assets/Projects/SansFlappyBird.png";
import verborNoun from "../../Assets/Projects/VerborNoun.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieDatabase}
              isBlog={false}
              title="Movie Database with OMDB"
              description="A web application that allows users to search and explore movie details using the OMDB API, built with Spring Boot and Angular."
              ghLink="https://github.com/not0aag/MovieDatabasewithOMDB"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakeGame}
              isBlog={false}
              title="Snake Game"
              description="A classic Snake Game developed using Java. The game involves controlling a snake to eat food and grow while avoiding obstacles."
              ghLink="https://github.com/not0aag/SnakeGame"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sansFlappyBird}
              isBlog={false}
              title="Sanskrit Flappy Bird"
              description="A unique twist on the classic Flappy Bird game, a language learning game used for learning Sansrit build from ground up by using Javascript and API integration"
              ghLink="https://github.com/not0aag/SansFlappy"
              demoLink="https://aijugeor.dev.fast.sheridanc.on.ca/SansFlappyBird/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={verborNoun}
              isBlog={false}
              title="Verbor Noun"
              description="An interactive web application created using React exploring language and vocabulary. Showcases innovative web development techniques and user interaction design."
              ghLink="https://github.com/not0aag/VerbOrNounSans"
              demoLink="https://aijugeor.dev.fast.sheridanc.on.ca/VerborNoun/"
            />
          </Col>
        </Row>
        <h2 className="project-heading" style={{ color: "white", textAlign: "center", marginTop: "40px" }}>
          <strong>Many more in progress :) </strong>
        </h2>
      </Container>
    </Container>
  );
}

export default Projects;