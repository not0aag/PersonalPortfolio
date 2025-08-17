import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiJava } from "react-icons/di";
import {
    SiPostgresql,
    SiExpress,
    SiSpringboot,
    SiTypescript,
    SiNextdotjs,
    SiTensorflow,
    SiRedis,
    SiRedux,
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons" title="Java">
                <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Python">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="JavaScript">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="TypeScript">
                <SiTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="React">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Next.js">
                <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Node.js">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Express">
                <SiExpress />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Spring Boot">
                <SiSpringboot />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
                <SiPostgresql />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="MongoDB">
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="TensorFlow">
                <SiTensorflow />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Redis">
                <SiRedis />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Redux Toolkit">
                <SiRedux />
            </Col>
        </Row>
    );
}

export default Techstack;
