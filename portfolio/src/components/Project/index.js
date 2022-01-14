import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function Portfolio() {
  return (
    <section>
      <h1 id="portfolio">Who am I?</h1>
      <img src={coverImage}  style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default Portfolio;