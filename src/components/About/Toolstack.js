import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiAmazonaws,
    SiDocker,
    SiGithub,
    SiJira,
    SiGit,
} from "react-icons/si";
import { FaWindows, FaLinux } from "react-icons/fa";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons" title="Git">
                <SiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="GitHub">
                <SiGithub />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Docker">
                <SiDocker />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="AWS">
                <SiAmazonaws />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="VS Code">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Postman">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Linux">
                <FaLinux />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Windows">
                <FaWindows />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Jira">
                <SiJira />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Slack">
                <SiSlack />
            </Col>
        </Row>
    );
}

export default Toolstack;
