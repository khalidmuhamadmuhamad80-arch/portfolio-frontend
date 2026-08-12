import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="about-label">ABOUT ME</p>

        <h2 className="about-title">
          Get to <span>Know Me</span>
        </h2>

        <p className="about-description">
          I'm Mohamed Khalid, a Full Stack Developer who enjoys turning ideas
          into meaningful digital experiences. I'm always learning, building,
          and challenging myself to grow both personally and professionally.
        </p>

        <motion.a
          href="#social-media"
          className="about-button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          Get to Know Me
        </motion.a>
      </motion.div>
    </section>
  );
}

export default About;