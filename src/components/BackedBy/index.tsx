"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { BackedContainer } from "./BackedBy.styles";
import { Col, Row } from "react-bootstrap";

const BackedByDoctor: React.FC = () => {
  const [imageSrc, setImageSrc] = useState("/assets/back-by-doctor.svg");

  const handleResize = () => {
    if (window.innerWidth <= 450) {
      setImageSrc("/assets/back-by-doctor-mobile.svg");
    } else {
      setImageSrc("/assets/back-by-doctor.svg");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BackedContainer>
      <h3>Backed by doctors</h3>
      <Row className="row-wrapper">
        <Col md={6} sm={12}>
          <div className="icon-wrapper">
            <Image
              className="icon-doctor mobile-view"
              height={34}
              width={24}
              alt="Doctor"
              src="/assets/doctor.svg"
            />
            <Image
              className="icon-backed mobile-view"
              height={265}
              width={285}
              alt="Doctor backup"
              src="/assets/back-by-doctor-mobile.svg"
            />{" "}
            <Image
              className="icon-backed desktop-view"
              height={265}
              width={285}
              alt="Doctor backup"
              src="/assets/back-by-doctor.svg"
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
                  src="/assets/vector-top-left.svg"
                />
              </Col>
              <Col md={10} sm={10} className="text-col">
                <span>
                  Doctors across the country with varied experience and
                  expertise are helping <b>vaidya.ai</b> improve by verifying,
                  validating and providing valuable feedback and inputs
                </span>
              </Col>
              <Col md={1} sm={1} className="vector-bottom-col">
                <Image
                  className="vector-bottom-right"
                  height={11}
                  width={11}
                  alt="Vector icon"
                  src="/assets/vector-bottom-right.svg"
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <h3 className="safety">Your safety matters</h3>
      <h4>Privacy First. Confidential.</h4>
      <Row className="privacy-row">
        <Col sm={12} className="mobile-view">
          <Image
            className="privacy-icon"
            height={158}
            width={360}
            alt="Vector icon"
            src="/assets/mobile-privacy.svg"
          />
        </Col>
        <div className="desktop-view privacy-view">
          <Col md={4} sm={4} xs={4}>
            <div className="privacy-card">
              <Image
                className="privacy-icon"
                height={115}
                width={91}
                alt="Vector icon"
                src="/assets/privacy-1.svg"
              />
              <p>Privacy remains intact - Zero data storage</p>
            </div>
          </Col>
          <Col md={4} sm={4} xs={4}>
            <div className="privacy-card">
              <Image
                className="privacy-icon"
                height={115}
                width={91}
                alt="Vector icon"
                src="/assets/privacy-2.svg"
              />
              <p>Uploaded reports persist for one chat only</p>
            </div>
          </Col>
          <Col md={4} sm={4} xs={4}>
            <div className="privacy-card">
              <Image
                className="privacy-icon"
                height={115}
                width={91}
                alt="Vector icon"
                src="/assets/privacy-3.svg"
              />
              <p>Log-in credentials stay secure</p>
            </div>
          </Col>
        </div>
      </Row>
    </BackedContainer>
  );
};

export default BackedByDoctor;
