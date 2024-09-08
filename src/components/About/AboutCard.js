import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alen George </span>
            from <span className="purple"> Oakville, Ontario, Canada </span>
            <br />
            I am currently studying Software Development and Network Engineering at Sheridan College, Oakville
            <br />
            I am currently looking for internship opportunities :)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Focus on creating things that have a meaningful impact."{" "}
          </p>
          <footer className="blockquote-footer">Alen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
