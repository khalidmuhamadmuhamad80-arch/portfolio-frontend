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
          I am a Full Stack Developer dedicated to building end-to-end web 
          solutions. I bridge the gap between intuitive, responsive frontend 
          interfaces and robust, secure backend architectures, ensuring a 
          seamless experience from the database to the browser.
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>🌐 Frontend Mastery</h3>
            <p>
              Crafting interactive and high-performance user interfaces using 
              React, focusing on clean design and fluid user experiences.
            </p>
          </div>

          <div style={styles.card}>
            <h3>⚙️ Backend Expertise</h3>
            <p>
              Architecting secure and scalable APIs with Python and Flask. 
              Experienced in JWT authentication, CORS handling, and database management.
            </p>
          </div>

          <div style={styles.card}>
            <h3>🚀 Development Philosophy</h3>
            <p>
              I believe in writing clean, modular code. My goal is to build 
              full-stack applications that are not only functional but also 
              maintainable and secure.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  section: { padding: "80px 20px", display: "flex", justifyContent: "center" },
  container: { maxWidth: "1000px", textAlign: "center" },
  title: { fontSize: "40px", marginBottom: "20px", color: "#38bdf8" },
  text: { fontSize: "18px", color: "#cbd5e1", lineHeight: "1.8", marginBottom: "40px", maxWidth: "800px", margin: "0 auto 40px auto" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" },
  card: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(56, 189, 248, 0.2)",
    borderRadius: "15px",
    padding: "25px",
    backdropFilter: "blur(10px)",
    transition: "transform 0.3s ease, border 0.3s ease",
  },
};

export default About;