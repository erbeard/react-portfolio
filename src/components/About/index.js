import React from "react";
import profileImage from "../../assets/large/Profile.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          Edward Beard is an aspiring Full Stack Developer. He has over 10 years in IT Infrastructure components such as storage, server, netowrk, and virtualization technologies. He is now proficient in front end development, and back end web development. Along with coding with HTML, CSS and JS for the client-side. He would be an excellent additon to your team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;