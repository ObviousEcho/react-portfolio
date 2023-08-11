import React from "react";
import Image from "react-bootstrap/Image";
import "./style.css";
import Me from "../../images/me-400.jpg";

export default function About() {
  return (
    <section className="about m-1 m-md-2 m-lg-5 d-lg-flex align-items-xl-center">
      <main className="m-1">
        <h1 className="text-center mb-3">Full Stack Engineer</h1>
        <figure className="profile-pic m-3">
          <Image src={Me} alt="author" />
        </figure>

        <p>
          Greetings! I'm a passionate and results-driven full stack web
          developer based in the Salt Lake City area. With a deep-rooted
          fascination for both front-end and back-end technologies, I've
          embarked on a journey that combines creativity with functionality to
          craft immersive digital experiences.
        </p>
        <p>
          My journey in full stack web development has equipped me with a
          versatile skill set that spans the entire web development spectrum. On
          the front-end, I excel in translating design concepts into polished
          user interfaces using HTML, CSS, and JavaScript. I take pride in
          creating responsive and visually appealing layouts that captivate
          users across devices.
        </p>
        <p>
          Venturing into the back-end realm, I've gained expertise in building
          robust server-side applications using technologies like Node.js and
          related frameworks like Express. My experience extends to database
          design and management, ensuring seamless data storage and retrieval to
          power dynamic web applications.
        </p>
        <p>
          One of my core strengths lies in bridging the gap between front-end
          and back-end development. I excel at crafting APIs that facilitate
          smooth data exchange between different components of a web
          application, creating a cohesive and engaging user experience. My
          proficiency in RESTful API design ensures that interactions are
          efficient, secure, and scalable.
        </p>
        <p>
          Collaboration is at the heart of my approach to development. Working
          closely with designers, I bring their visions to life, while
          collaborating with fellow developers to integrate front-end and
          back-end functionalities seamlessly. I thrive in agile environments,
          where my ability to adapt quickly to changing requirements and iterate
          on solutions shines.
        </p>
        <p>
          Version control is integral to my workflow, and I'm well-versed in Git
          for managing codebase versions effectively. Continuous integration and
          deployment practices are part of my toolkit, ensuring that projects
          are delivered with efficiency and reliability.
        </p>
        <p>
          As a communicator, I am skilled at breaking down complex technical
          concepts into understandable terms for non-technical stakeholders.
          This facilitates productive conversations, aligning everyone's vision
          for a project's success.
        </p>
        <p>
          In my technical portfolio, you'll find a diverse collection of
          projects that showcase my full stack capabilities. From interactive
          e-commerce platforms that seamlessly handle transactions to social
          networking sites that connect users in meaningful ways, my portfolio
          reflects my commitment to delivering high-quality web applications.
        </p>
        <p>
          I'm excited to continue pushing the boundaries of full stack web
          development, diving into new technologies and frameworks to create
          innovative and impactful digital solutions. Let's collaborate to turn
          ideas into reality!
        </p>
      </main>
    </section>
  );
}
