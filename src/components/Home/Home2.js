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
                I am passionate about software development, specializing in
                full-stack web development and technologies like
                <i>
                  <b className="purple"> C++, JavaScript, and Java. </b>
                </i>
                <br />
                <br />
                I am skilled in developing web applications using
                <b className="purple"> Java, PHP, and SQL,</b> and familiar with
                <b className="purple"> NodeJS and MongoDB. </b>
                <br />
                <br />
                My projects range from <b className="purple">game development</b>{" "}
                using JavaScript and Android apps, to building{" "}
                <b className="purple">movie database applications</b> with
                Java Spring.
                <br />
                <br />
                I am always looking to expand my knowledge and apply my
                programming skills to real-world projects!
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
