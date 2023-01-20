import React from "react";
import Image from "react-bootstrap/Image";
import "./style.css";
import Me from "../../images/me-400.jpg";

// About section

export default function About() {
  return (
    <section className="about m-1 m-md-2 m-lg-5 d-lg-flex align-items-xl-center">
      <div className="profile-pic text-center">
        <Image src={Me} alt="author" />
      </div>
      <div>
        <h2>A success story in the making...</h2>
        <p>
          My name is <strong>Andrew Stehno</strong>, I'm a full-stack web
          developer, I build applications front and back. I currently reside in
          South Jordan, UT on the outskirts of the tech center that has become
          Silicone Slopes. That's me casting the firm shadow in the pic.
        </p>
        <p>
          My background is in engineering. I set out to enter the tech industry
          by earning a certificate in full-stack web-development. The universe
          felt I had a few lessons to learn through 2020 and my switching
          careers was put on hold (pandemic/divorce). I spent the next year
          focusing on my well-being. A lot of yoga, a lot of deep breathing,
          exercise, and re-connecting with old friends helped me cope through a
          changing landscape. Unfortunately I wasn't dong much coding during
          this time.
        </p>
        <p>
          Fast forward a bit. Having reassessed my goals, I knew that I wanted
          to complete that career change. The structure of a boot-camp served me
          well once, so I put myself through the program a second time. I've now
          earned two certificates in full-stack web-development (if 1 is good, 2
          is better!) and I have a clear outlook on the future. When I'm not
          building things with code, I enjoy being outdoors with friends. I have
          a passion for hiking in the mountains and deserts of Utah, as well as
          sailing in the ocean. I especially enjoy planning extended off shore
          trips with those closest to me.
        </p>
      </div>
    </section>
  );
}
