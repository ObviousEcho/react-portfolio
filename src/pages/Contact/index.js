import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import validateEmail from "../../utils/helpers";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style.css";

const Contact = () => {
  const [user_name, setUser_name] = useState("");
  const [user_email, setUser_email] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const form = useRef();

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "user_name") {
      setUser_name(inputValue);
    } else if (inputType === "user_email") {
      setUser_email(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(user_email) || !user_name || !message) {
      setError("Email or contact name is invalid");
      return;
    }

    emailjs
      .sendForm(
        "service_3zaeopb",
        "contact_form",
        form.current,
        "wum1kk4ii9GfEW4Gz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setUser_name("");
    setUser_email("");
    setMessage("");
  };

  return (
    <Container>
      <div className="text-center mt-4">
        <h4>Let's connect! Please fill out the form to get in touch.</h4>
      </div>
      <Row className="ml-5 mr-5">
        <Col md={{ span: 6, offset: 3 }}>
          <form ref={form} onSubmit={sendEmail} className="form">
            <label>
              <h6>Name:</h6>
            </label>
            <input
              value={user_name}
              name="user_name"
              onChange={handleInputChange}
              type="text"
              placeholder="Your name"
            />
            <p>{user_name}</p>
            <label>
              <h6>Email:</h6>
            </label>
            <input
              value={user_email}
              name="user_email"
              onChange={handleInputChange}
              type="emial"
              placeholder="Your email"
            />
            <p>{user_email}</p>
            <label>
              <h6>Message:</h6>
            </label>
            <textarea
              className="formText"
              rows="8"
              value={message}
              name="message"
              onChange={handleInputChange}
              // type="text"
              placeholder="Enter message here"
            />
            <Button
              variant="primary"
              type="submit"
              value="Send"
              className="mt-4"
            >
              Submit
            </Button>{" "}
          </form>
          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}
        </Col>
      </Row>
      <section className="contact-info m-5 text-center">
        <h4>Andrew Stehno</h4>
        <h5>
          <a href="mailto:info@andrewstehno.com">info@andrewstehno.com</a>
        </h5>
      </section>
    </Container>
  );
};

export default Contact;
