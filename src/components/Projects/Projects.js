import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movieDatabase from "../../Assets/Projects/MovieDatabase.png";
import snakeGame from "../../Assets/Projects/snackeGame.png";
import flapBird from "../../Assets/Projects/FlapBird.png";

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
                  imgPath={flapBird}
                  isBlog={false}
                  title="Flap Bird"
                  description="A fun recreation of the popular Flappy Bird game, built using Java. The game challenges players to navigate a bird through obstacles without crashing."
                  ghLink="https://github.com/not0aag/FlapBird"
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
