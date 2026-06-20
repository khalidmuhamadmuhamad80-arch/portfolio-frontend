import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "Flask", level: 85 },
    { name: "SQLAlchemy", level: 80 },
    { name: "REST API", level: 88 },
    { name: "Git / GitHub", level: 75 },
    { name: "Database Design", level: 82 },
  ];

  return (
    <section style={styles.section} id="skills">
      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 style={styles.title}>Skills</h2>

        <div style={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} style={styles.skillBox}>
              <div style={styles.skillHeader}>
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div style={styles.barBg}>
                <motion.div
                  style={{
                    ...styles.barFill,
                    width: `${skill.level}%`,
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          ))}
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
    maxWidth: "900px",
    width: "100%",
    textAlign: "center",
  },

  title: {
    fontSize: "40px",
    color: "#38bdf8",
    marginBottom: "40px",
  },

  grid: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  skillBox: {
    textAlign: "left",
  },

  skillHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    color: "white",
  },

  barBg: {
    width: "100%",
    height: "10px",
    background: "#1f2937",
    borderRadius: "10px",
    overflow: "hidden",
  },

  barFill: {
    height: "100%",
    background: "#38bdf8",
    borderRadius: "10px",
  },
};

export default Skills;