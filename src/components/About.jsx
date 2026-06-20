import { motion } from "framer-motion";

function About() {
  return (
    <section style={styles.section} id="about">
      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 style={styles.title}>About Me</h2>

        <p style={styles.text}>
          I am a Backend Developer specializing in building scalable web
          applications and REST APIs using Python, Flask, and SQLAlchemy.
          I enjoy solving real-world problems and turning ideas into
          efficient digital systems.
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>👨‍💻 Who I Am</h3>
            <p>
              A passionate developer focused on backend systems and API
              development with clean architecture.
            </p>
          </div>

          <div style={styles.card}>
            <h3>⚙️ Skills</h3>
            <p>
              Python, Flask, SQLAlchemy, REST APIs, Git, Linux basics,
              and database design.
            </p>
          </div>

          <div style={styles.card}>
            <h3>🚀 Goals</h3>
            <p>
              To become a professional backend engineer and work on
              large-scale real-world systems.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    display: "flex",
    justifyContent: "center",
  },

  container: {
    maxWidth: "1000px",
    textAlign: "center",
  },

  title: {
    fontSize: "40px",
    marginBottom: "20px",
    color: "#38bdf8",
  },

  text: {
    fontSize: "18px",
    color: "#cbd5e1",
    lineHeight: "1.8",
    marginBottom: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "15px",
    padding: "20px",
    backdropFilter: "blur(10px)",
    transition: "0.3s",
    cursor: "pointer",
  },
};

export default About;