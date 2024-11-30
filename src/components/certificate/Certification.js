import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";


export default function Certification() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <Zoom left cascade>
                <h1 className="aboutme-heading">Certification</h1>
              </Zoom>
            </Col>
            <Col md={12} className="mt-3">
              <Row className="g-5">
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://drive.google.com/file/d/15Rn5OzFOTcemFK8nOeCloNyx76dpk9Wh/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div className="cert-header" style={{ backgroundColor: "white" }}>
                            <img className="logo_img" src="/a2sv.png" alt="A2SV" />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3 className="content-title" style={{ color: "black" }}>
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                          A2SV Hackathon Second Place Winner
                        </h2>
                        <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                          - Africa to Silicon Valley
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>

                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://intranet.alxswe.com/certificates/ZmreM6SEc9"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div className="cert-header" style={{ backgroundColor: "white" }}>
                            <img className="logo_img" src="./alx.png" alt="UCSC" />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3 className="content-title" style={{ color: "black" }}>
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                          ALX Software Engineering Program
                        </h2>
                        <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                          - ALX Africa
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>

                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://www.evangadi.com/files/certificates/student/AbdiEsayas10_03_2022_0646/AbdiEsayas.jpg?target=_blank"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div className="cert-header" style={{ backgroundColor: "white" }}>
                            <img className="logo_img" src="./evangadi.png" alt="Evangadi" />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3 className="content-title" style={{ color: "black" }}>
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                          Evangadi MERN Stack Web Development Program
                        </h2>
                        <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                          - Evangadi Inc
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Col>
          </Row>
      
        </Container>
      </Container>
    </div>
  );
}
