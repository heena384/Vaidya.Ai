"use client";

import React from "react";
import Image from "next/image";

import { Col, Row } from "react-bootstrap";
import { SpeechContainer } from "./Speech.styles";

const SmartSpeech: React.FC = () => {
  return (
    <SpeechContainer>
      <Row className="w-100">
        <Col md={8} sm={6}>
          <div className="text-wrapper">
            <h3>Smart Speech Input</h3>
            <h4>Vaidya.ai is here to hear as well!</h4>
          </div>
        </Col>
        <Col md={4} sm={6} className="icon-col">
          <Image
            className="icon"
            height={43}
            width={28}
            alt="Mic"
            src="/assets/mic.svg"
          />
        </Col>
      </Row>
    </SpeechContainer>
  );
};

export default SmartSpeech;
