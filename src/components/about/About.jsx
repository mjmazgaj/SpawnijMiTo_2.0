import "./about.min.css";
import ME from "../../assets/about.jpg";
import { GrProjects } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";
import { RiPriceTag3Line } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Dowiedz się więcej o</h5>
      <h2>SpawnijMiTo</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-description">
            <GrProjects className="about__icon" />
            <h5>Projekty</h5>
            <small>niepowtarzalne</small>
            <small>loft</small>
            <small>industrial</small>
            <small>stoliki Hi-fi</small>
          </div>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GrLocation className="about__icon" />
              <h5>Obszar działania</h5>
              <small>Cała Polska</small>
            </article>
            <article className="about__card">
              <RiPriceTag3Line className="about__icon" />
              <h5>Zamówienia</h5>
              <small>produkt rzemieślniczy</small>
              <small>wycena inwidualna</small>
              <small>wysoki standard</small>
            </article>
            <article className="about__card about__card-description">
              <GrProjects className="about__icon" />
              <h5>Projekty</h5>
              <small>loft</small>
              <small>industrial</small>
              <small>stoliki Hi-fi</small>
            </article>
          </div>

          <p>
            Jesteśmy polskim producentem mebli industrialnych, Loft,
            stolików audio typu Hi-fi oraz standów głośnikowych.
          </p>
          <p>Wymyśl swoją konstrukcje, a my zajmiemy się resztą!</p>
          <a href="#contact" className="btn btn-primary">
            Napisz do nas
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
