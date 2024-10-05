"use client";

import React from "react";
import Image from "next/image";

import { Col, Row } from "react-bootstrap";
import { LeadingAIContainer } from "./LeadingAI.styles";

const LeadingAI: React.FC = () => {
  return (
    <LeadingAIContainer>
      <h3>Leading AI in health</h3>
      <Row className="row-wrapper">
        <Col md={6} sm={12}>
          <div className="icon-wrapper">
            <Image
              className="vector-top-left"
              height={407}
              width={495}
              alt="Vector icon"
              src="/assets/accuracy.svg"
            />
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className="content-wrapper">
            <Row className="content-wrapper-row">
              <Col md={1} sm={1}>
                <Image
                  className="vector-top-left"
                  height={11}
                  width={11}
                  alt="Vector icon"
                  src="/assets/vector-top-left-1.svg"
                />
              </Col>
              <Col md={10} sm={10} className="text-col">
                <div className="badge-text">
                  <Image
                    className="badges"
                    height={35}
                    width={28}
                    alt="Vector icon"
                    src="/assets/badge.svg"
                  />
                  <div className="leading-content">
                    <span>Top 500 </span>
                    <p> among 2,00,000</p>
                    <p className="results-text">
                      Placed among the top applicants over 25 years of exam
                      results.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={1} sm={1} className="vector-bottom-col">
                <Image
                  className="vector-bottom-right"
                  height={11}
                  width={11}
                  alt="Vector icon"
                  src="/assets/vector-bottom-right-1.svg"
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </LeadingAIContainer>
  );
};

export default LeadingAI;
