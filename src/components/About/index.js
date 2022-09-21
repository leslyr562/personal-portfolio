import React from "react";
import photo from "../../assets/cover/profile.jpg";

function About() {

  return (
    <section id="about">
      <h1 className='sectionName'>About me</h1>
      <div className="flex-row">
        <img
          src={photo}
          alt="avatar"
          className="avatar-img"
        />

        <p>MHello World! I'm Lesly Gonzalez, a Junior Web developer in Houston Texas.
        </p>
      </div>
    </section>
  );
}
export default About;
