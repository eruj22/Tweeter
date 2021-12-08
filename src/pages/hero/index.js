import React from "react";
import hero from "../../assets/hero.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <main className="hero">
      <img src={hero} className="hero__image" alt="" />
      <section className="hero__text">
        <h1 className="hero__title">Happening now</h1>
        <p className="hero__subtitle">Join Tweeter today</p>
        <Link to="register">
          <Button variant="contained" className="btn--wide mt1">
            register
          </Button>
        </Link>
        <Link to="login">
          <Button variant="outlined" className="btn--wide mt1">
            login
          </Button>
        </Link>
      </section>
    </main>
  );
}

export default Hero;
