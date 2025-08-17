import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/alenresumemain.pdf";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Alen George</span> from
            <span className="purple"> Oakville, Ontario</span>.
            I’m a Software Development and Network Engineering student at Sheridan College.
          </p>
          <p style={{ textAlign: "justify", marginTop: 12 }}>
            Recent experience: <b>Software Development Analyst Intern</b> at
            Samskirta Bharati and <b>Business Analyst Intern</b> at OneMotion Technologies.
            I focus on building scalable web apps, shaping requirements, and delivering measurable impact.
          </p>
          <p style={{ textAlign: "justify", marginTop: 12 }}>
            Core stack: <b>React 18</b>, <b>Next.js 15</b>, <b>TypeScript</b>, <b>Node.js</b>,
            <b> Spring Boot 3</b>, <b>AWS</b> (EC2, S3, RDS), <b>Docker</b>, <b>PostgreSQL</b>,
            <b> MongoDB</b>, and <b>Redis</b>. I care about clean UI, reliable backends,
            and quality through TDD and code reviews.
          </p>
          <ul style={{ marginTop: 10, marginBottom: 10 }}>
            <li className="about-activity"><ImPointRight /> Reading and note‑taking</li>
            <li className="about-activity"><ImPointRight /> Building small tools and games</li>
            <li className="about-activity"><ImPointRight /> Travelling and photography</li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: 8 }}>
            "Focus on creating things that have a meaningful impact."
          </p>
          <footer className="blockquote-footer">Alen</footer>

          <div style={{ marginTop: 16 }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ marginRight: 10 }}
            >
              View Resume
            </Button>
            <Button
              variant="outline-light"
              href="mailto:aijugeor@sheridancollege.ca"
            >
              Contact Me
            </Button>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
