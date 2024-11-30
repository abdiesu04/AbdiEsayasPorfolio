import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

// Add type declarations for react-reveal modules

import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import hd from "../../images/hd.png";
import pp from "../../images/portfolio.png";
import { FaCode } from "react-icons/fa";

export default function Projects() {
  return (
    <div style={{ marginTop: "10px" }}>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                    marginBottom: "20px",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      🩺 Breast Cancer Classification Using Machine Learning
                    </h5>
                    <img src="./breast_cancer.jpeg" alt={nyc} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/abdiesu04/Breast_Cancer_Classification_using_Machine_Learning"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      This project uses Logistic Regression to classify breast cancer tumors as benign or malignant, based on the Breast Cancer Wisconsin dataset. With 94.73% accuracy on training data and 92.98% on test data, the model aims to assist doctors in making faster, more reliable diagnoses, improving early detection and patient outcomes.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Python, Pandas, Matplotlib, Scikit-Learn
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                    marginBottom: "20px",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Addiction Recovery Chatbot
                    </h5>
                    <img src="./chatbot.jpeg" alt={hd} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/abdiesu04/AI-recovery"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                     Modeled an addiction recovery chatbot using LangChain to model, with the frontend developed in Next.js and the API powered by FastAPI. I and my team secured second place in the hackathon.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    LangChain, FastAPI, Next.js
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                    marginBottom: "20px",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                    Loan Tracker API (Golang)
                    </h5>
                    <img src='./loan1.png' alt={ci} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/abdiesu04/LoanTracker-Go_Backend/tree/abdi?tab=readme-ov-file"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                     Developed a comprehensive Loan Tracker API using Golang Gin framework, implementing user registration, authentication, and role-based access control (RBAC) for admin and user functionalities.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Golang, Gin Framework, JWT, bcrypt, Goroutines, Clean Architecture.
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                    marginBottom: "20px",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      WorkPilot - JoabTracking App (Node js)
                    </h5>
                    <img src="./workpilot.png" alt={pp} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/abdiesu04/WorkPilot"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      WorkPilot is a job portal application that allows users to create job listings, register, login,search for jobs and apply for jobs. The application is containerized using Docker and built with Node js.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Node js, Express, MongoDB, Docker, JWT, bcrypt, Mongoose, Docker.
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                    marginBottom: "20px",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Gumii - Event Management Platform (NEXT js)
                    </h5>
                    <img src="./homepage.png" alt={pp} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/abdiesu04/Gumii"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Gumii is a comprehensive event management platform designed to simplify the process of discovering, hosting, and managing events. Built using Next.js, Gumii offers a seamless user experience with features such as event discovery, user authentication, event registration, and payment management. 
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Next js, React, MongoDB.
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
