import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiSlack, SiVercel, SiAmazonaws } from "react-icons/si";
import { FaWindows, FaLinux } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSlack />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVercel />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaWindows />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaLinux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAmazonaws />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>
        </Row>
    );
}

export default Toolstack;
