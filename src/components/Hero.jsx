import React from "react";

import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt="" />
      <div className="card">
        <h2>
          {hero.name} {hero.adress}
        </h2>
        <p>🗺️{hero.city} </p>
        <p>🗓️{hero.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>vanesa.detto@hotmail.com</a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>
          💾<a href={hero.gitHub}>https://github.com/VanesaDetto</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
