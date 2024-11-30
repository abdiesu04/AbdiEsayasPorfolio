import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";
import { FaDocker, FaNodeJs, FaAws, FaGithub, FaDatabase, FaPython, FaJava, FaMicrochip, FaGit } from "react-icons/fa";
import { SiGo, SiGraphql, SiMysql, SiPostgresql, SiJenkins, SiKubernetes, SiSwagger } from "react-icons/si";
import { DiReact } from "react-icons/di";

export default function TechnicalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        
      </div>
      <Tada>
      </Tada>
      <div className="mt-5">
        <Container>
          <Row className="g-5">
            {/* Backend Skills */}
            <Col md={4}>
              <h2 style={{ fontWeight: 700, color: "#fe3e57" }}>Backend Skills</h2>
              <ul>
                <li><SiGo /> Go (Golang) & GIn Framework</li>
                <li><FaPython /> Python (Django, Flask)</li>
                <li><FaNodeJs /> JavaScript (Node.js, Next.js, React)</li>
              </ul>
            </Col>

            {/* Databases */}
            <Col md={4}>
              <h2 style={{ fontWeight: 700, color: "#54faae" }}>Databases</h2>
              <ul>
                <li><SiMysql /> MySQL</li>
                <li><SiPostgresql /> PostgreSQL</li>
                <li><FaDatabase /> MongoDB</li>
              </ul>
            </Col>

            {/* API Technologies */}
            <Col md={4}>
              <h2 style={{ fontWeight: 700, color: "#39c4ff" }}>API Technologies</h2>
              <ul>
                <li><SiGraphql /> GraphQL APIs</li>
                <li><FaMicrochip /> RESTful APIs</li>
              </ul>
            </Col>

            {/* Architectures */}
            <Col md={4}>
              <h2 style={{ fontWeight: 700, color: "#f1f965" }}>Architectures</h2>
              <ul>
                <li><FaMicrochip /> Clean Architecture</li>
                <li><SiGo /> Microservices</li>
                <li><FaJava /> MVC</li>
              </ul>
            </Col>

            {/* DevOps & CI/CD */}
            <Col md={4}>
              <h2 style={{ fontWeight: 700, color: "#ff0173" }}>DevOps & CI/CD</h2>
              <ul>
                <li><FaDocker /> Docker</li>
                <li><SiKubernetes /> Kubernetes</li>
                <li><SiJenkins /> Jenkins</li>
                <li><FaGithub /> GitHub Actions</li>
              </ul>
            </Col>

            {/* Tools & Others */}
            <Col md={4}>
              <h2 style={{ fontWeight: 700, color: "#ff8c2f" }}>Tools & Others</h2>
              <ul>
                <li><FaGit /> Git</li>
                <li><FaAws /> AWS</li>
                <li><SiSwagger /> Swagger</li>
              </ul>
            </Col>

            {/* Icons */}
            <Col md={12}>
              <div className="d-flex justify-content-center mt-4">
                <FaNodeJs size={50} color="#00cc00" />
                <FaDocker size={50} color="#2496ed" />
                <FaAws size={50} color="#ff9900" />
                <FaGithub size={50} color="#333" />
                <FaDatabase size={50} color="#ff4444" />
                <SiGo size={50} color="#00a9a9" />
                <DiReact size={50} color="#61dafb" />
                <SiMysql size={50} color="#00758f" />
                <SiPostgresql size={50} color="#336791" />
                <SiKubernetes size={50} color="#326ce5" />
                <SiJenkins size={50} color="#d24939" />
                <SiGraphql size={50} color="#e10098" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
