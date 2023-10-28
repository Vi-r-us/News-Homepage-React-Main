/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import imgMobile from "../../assets/images/image-web-3-mobile.jpg";
import imgDesktop from "../../assets/images/image-web-3-desktop.jpg";
import Article from "./Article";
import { articles } from "./data";

const Hero = () => {
  return (
    <section className="container hero">
      <picture className="hero-image">
        <source media="(max-width: 760px)" srcset={imgMobile} />
        <img src={imgDesktop} alt="Web 3.0" />
      </picture>

      <h1 className="hero-title">The Bright Future of Web 3.0?</h1>
      <div className="hero-text">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <a className="btn" href="#">
          Read more
        </a>
      </div>

      <aside className="hero-aside">
        <span className="decoration"></span>
        <h2>New</h2>
        {articles.map((article) => {
          return <Article article={article} key={article.id} />;
        })}
      </aside>
    </section>
  );
};

export default Hero;
