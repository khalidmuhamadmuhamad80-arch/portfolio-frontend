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
            I'm Mohamed Khalid, an Egyptian Full Stack Developer passionate about technology, business, and personal growth. For me, programming isn't just a technical skill — it's a tool to build real value, create opportunities, and turn ideas into working digital products.

            Beyond development, I'm drawn to entrepreneurship and helping businesses build a stronger digital presence. My journey started two years ago, and I'm still learning, building, and pushing myself further every day.

        </p>

      </motion.div>
    </section>
  );
}

export default About;