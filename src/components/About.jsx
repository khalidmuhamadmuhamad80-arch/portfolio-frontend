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
           I'm Mohamed Khalid, an Egyptian Full Stack Developer with a strong interest in technology, business, and personal growth. I enjoy building things, turning ideas into valuable solutions, and constantly investing in myself through learning and experience.

           For me, programming is more than a technical skill. It's a tool that allows me to create value, build opportunities, and turn ideas into real digital products. Alongside development, I'm deeply interested in business, entrepreneurship, and the process of turning skills and resources into something meaningful and valuable.

           I also enjoy helping people and businesses improve their digital presence and move toward a more professional level. My journey in programming started about two years ago, and I'm still learning, building, and challenging myself every day. I see growth as a continuous journey — and I'm committed to staying on it.

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