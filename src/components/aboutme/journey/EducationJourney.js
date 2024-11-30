import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function EducationJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade></Flip>
        <Flip top cascade>
          <h1>Educational Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2021 - 2026"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Software Engineering
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Adama Science and Technology University, Adama
          </h4>
          <p>
            Core courses: Data Structures, Algorithms, Operating Systems, Computer Architecture, Database Management Systems, Software Engineering
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Nov 2024 - Mar 2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Prodev Backend Development 
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            ALX Africa, Nairobi (Remote)
          </h4>
          <p>
          Currently honing advanced skills in SQL, Python, project planning, and database design, with a focus on efficient CI/CD pipelines, microservices, and application security. Gaining expertise in DevOps, performance optimization, and network traffic analysis to build robust, high-performing back-end solutions.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2023 - 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">A2SV Software Trainee </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Africa to Silicon Valley, Adama Ethiopia
          </h4>
          <p>
          •Solved over 900 competitive programming problems on Leetcode and Codeforces, 
          <br />
          •A2SV helps students secure roles at top tech companies through intensive learning in industry-standard software development, problem-solving, and interview preparation, with 63 alumni placed at firms like Google, Bloomberg, Databricks, Amazon, LinkedIn, and Square.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;
