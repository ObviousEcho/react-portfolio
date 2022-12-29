import React from "react";
import projects from "../../utils/projects";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import "./style.css";

function Portfolio() {
  return (
    <Container>
      <div className="d-flex justify-content-center m-3">
        <h2>My Portfolio</h2>
      </div>
      <div className="port d-flex flex-wrap justify-content-around align-items-center mt-5">
        {projects.map((project) => {
          return (
            <Card style={{ width: "18rem" }} className="mb-4">
              <Card.Img variant="top" src={project.image} />
              <Card.Body className="border-top">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.desc}</Card.Text>
                <Card.Link href={project.site}>{project.title}</Card.Link>
                <Card.Link href={project.github}>GitHub</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}

export default Portfolio;
