import { motion } from "framer-motion";
import "./hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Hero Image */}
        <div className="hero-image-wrapper">
          <motion.img
            src="me.jpg"
            alt="Mohamed Khalid"
            className="hero-image"
            animate={{ y: [0, -6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-name">
            Mohamed Khalid
          </h1>

          <h2 className="hero-role">
            Full Stack Developer
          </h2>

          <p className="hero-description">
            I build modern and responsive web experiences
            with clean design and reliable technology.
          </p>

          {/* Hero Actions */}
          <div className="hero-buttons">
            <a
              href="#contact"
              className="hero-btn primary-btn"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="hero-btn secondary-btn"
            >
              View My Work
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;