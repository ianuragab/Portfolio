import "./Hero.css";
import resume from '../../assets/ResumeAB.pdf';
import avatar from '../../assets/avatar.jpeg';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import react from '../../assets/react.png';
import js from '../../assets/js.png';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Development | Transfroming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
        <a href={resume} rel="noreferrer" target="_blank">
          <button className="contact-btn">Resume</button>
        </a>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src={react} alt="React" />
          </div>
          <img src={avatar} alt="Avatar" />
        </div>

        <div>
          <div className="tech-icon">
            <img src={html} alt="HTML" />
          </div>
          <div className="tech-icon">
            <img src={css} alt="CSS" />
          </div>
          <div className="tech-icon">
            <img src={js} alt="JS" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
