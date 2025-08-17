import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import placeholder from "../../Assets/pre.svg";
import projects from "../../data/projects";

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
          {projects && projects.length > 0 ? (
            projects.map((p, idx) => (
              <Col md={4} className="project-card" key={`${p.title}-${idx}`}>
                <ProjectCard
                  imgPath={p.imgPath || placeholder}
                  isBlog={Boolean(p.isBlog)}
                  title={p.title}
                  description={p.description}
                  ghLink={p.ghLink}
                  demoLink={p.demoLink}
                />
              </Col>
            ))
          ) : (
            <Col md={12} style={{ color: "#bbb", textAlign: "center" }}>
              No projects listed yet. Add them in <code>src/data/projects.js</code>.
            </Col>
          )}
        </Row>
        <h2 className="project-heading" style={{ color: "white", textAlign: "center", marginTop: "40px" }}>
          <strong>More builds are on the way — </strong>
          <a
            href="https://github.com/not0aag"
            target="_blank"
            rel="noreferrer"
            className="purple"
          >
            follow along on GitHub
          </a>
          .
        </h2>
      </Container>
    </Container>
  );
}

export default Projects;