import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pfp.png"; // Updated image import
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I build modern, scalable applications across the stack using
              <b className="purple"> JavaScript/TypeScript</b> with
              <b className="purple"> React 18</b>, <b className="purple">Next.js 15</b>, and
              backend services in <b className="purple">Node.js</b> and
              <b className="purple"> Spring Boot 3</b>.
              <br />
              <br />I work with cloud and DevOps tooling like
              <b className="purple"> AWS (EC2, S3, RDS)</b>, <b className="purple">Docker</b>,
              microservices, and CI/CD pipelines, and I care about code quality via
              TDD and reviews.
              <br />
              <br />On the data/AI side, I use <b className="purple">TensorFlow</b> and
              machine learning with <b className="purple">PostgreSQL</b>,
              <b className="purple"> MongoDB</b>, and <b className="purple">Redis</b> to power
              analytics and real-time apps.
              <br />
              <br />I’m always learning and shipping products that are fast,
              reliable, and genuinely useful.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/not0aag"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alenaijugeorge"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
