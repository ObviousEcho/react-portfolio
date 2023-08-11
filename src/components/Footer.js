import React from "react";
import { Navbar } from "react-bootstrap";
import LinkedIn from "../images/LI-In-Bug64.png";
import GitHub from "../images/GitHub-Mark-54px.png";

function Footer() {
  return (
    <Navbar
      fixed="bottom"
      className="justify-content-center bg-white border-top"
    >
      <div>
        <a href="https://www.linkedin.com/in/andrew-stehno-webdev/">
          <img src={LinkedIn} alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/ObviousEcho">
          <img src={GitHub} alt="GitHub logo" />
        </a>
      </div>
    </Navbar>
  );
}

export default Footer;
