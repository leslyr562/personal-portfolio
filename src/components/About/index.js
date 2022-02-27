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

        <p>My name is Lesly Gonzalez and I am a Junior Web developer, although it has not always been the case.
          I was very indecisive in what carrier plan to take but I always knew I wanted to work with computers.
          As a younger lady I worked for a electronic recycling online store.
          I had my tech group and we worked together to fix different parts of our projects.
          After learning how to solder and fix motherboards, I realized that I wanted to learn more about computers and be able to
          understand more about their language and not so much about fixing them. That is when I decided to start my web developer career.
          I have not only worked with computers and electronics but since a teenager I have always been eager to learn new skills. I have also
          worked in the massage therapy industry and have developed very good customer service within the years.
        </p>
      </div>
    </section>
  );
}
export default About;