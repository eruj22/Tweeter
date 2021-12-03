import React from "react";
import hero from "../assets/hero.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <img src={hero} className="home__image" alt="" />
      <section className="home__text">
        <h1 className="home__title">Happening now</h1>
        <p className="home__subtitle">Join Tweeter today</p>
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

export default Home;
