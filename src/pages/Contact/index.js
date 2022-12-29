import React, { useState } from "react";
import validateEmail from "../../utils/helpers";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import "./style.css";

function Form() {
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "contactName") {
      setContactName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !contactName || !message) {
      setError("Email or contact name is invalid");
      return;
    }

    setContactName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container>
      <div className="text-center mt-4">
        <h4>Let's connect! Please fill out the form to get in touch.</h4>
      </div>
      <section className="ml-5 mr-5">
        <form id="emailForm" className="form">
          <label for="contactName">
            <h6>Name:</h6>
          </label>
          <input
            value={contactName}
            name="contactName"
            onChange={handleInputChange}
            type="text"
            placeholder="Your name"
          />
          <p>{contactName}</p>
          <label for="email">
            <h6>Email:</h6>
          </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="emial"
            placeholder="Your email"
          />
          <p>{email}</p>
          <label for="message">
            <h6>Message:</h6>
          </label>
          <textarea
            className="formText"
            rows="8"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter message here"
          />
          <Button variant="primary" onClick={handleFormSubmit} className="mt-4">
            Submit
          </Button>{" "}
        </form>
        {error && (
          <div>
            <p>{error}</p>
          </div>
        )}
      </section>
      <section className="contact-info m-5 text-center">
        <h4>Andrew Stehno</h4>
        <h5>
          <a href="mailto:info@andrewstehno.com">info@andrewstehno.com</a>
        </h5>
      </section>
    </Container>
  );
}

export default Form;
