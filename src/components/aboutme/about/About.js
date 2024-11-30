import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                Hi, I'm <b className="purple">Abdi Esayas</b>, a passionate{" "}
                <b className="purple">Backend Developer</b> from Ethiopia, currently studying{" "}
                <b className="purple">Software Engineering</b> at{" "}
                <b className="purple">Adama Science and Technology University</b>.
                <br />
                <br />
                I specialize in building scalable backend systems using languages like{" "}
                <b className="purple">Go, Python, Java,</b> and <b className="purple">JavaScript</b>, with experience in frameworks such as{" "}
                <b className="purple">Node.js, Django, Gin</b>, and <b className="purple">NEXT.js</b>.
                <br />
                <br />
                I also have expertise in database design with MongoDB, PostgreSQL, and MySQL, as well as deploying{" "}
                <b className="purple">CI/CD pipelines</b> using Docker, Kubernetes, and Jenkins.
                <br />
                <br />
                I'm passionate about developing high-performance, secure applications and am always learning new technologies to improve my skills.
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
