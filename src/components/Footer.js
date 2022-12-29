import React from "react";
import { Navbar } from "react-bootstrap";

function Footer() {
  return (
    <Navbar fixed="bottom" className="justify-content-center bg-white border-top">
      <div>
        <a href="https://www.linkedin.com/in/andrew-stehno-0a2831189/">
          <img src="./images/LI-In-Bug64.png" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/ObviousEcho">
          <img src="./images/GitHub-Mark-54px.png" alt="GitHub logo" />
        </a>
      </div>
    </Navbar>
  );
}

export default Footer;