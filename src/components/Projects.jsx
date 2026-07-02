import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setProjects([
      {
        id: 1,
        title: "Personal Portfolio",
        image_url: "/footr.png"
      },
      {
        id: 2,
        title: "NovaCart | React & Flask E-commerce Platform",
        image_url: "/NovaCart.png" // تأكد من تحديث اسم الصورة لاحقاً إذا أردت
      }
    ]);
  }, []);

  return (
    <section style={styles.section} id="projects">
      <div style={styles.container}>
        <h2 style={styles.title}>Projects</h2>
        <div style={styles.grid}>
          {projects.map((p) => (
            <motion.div
              key={p.id}
              style={styles.card}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => navigate(`/project/${p.id}`)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={p.image_url} alt={p.title} style={styles.image} />

              <motion.div
                style={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === p.id ? 1 : 0 }}
              >
                <h3 style={styles.overlayText}>{p.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    display: "flex",
    justifyContent: "center"
  },
  container: {
    maxWidth: "800px", // زدنا العرض قليلاً ليتناسب مع الشاشات الكبيرة
    width: "100%",
    textAlign: "center"
  },
  title: {
    fontSize: "clamp(30px, 5vw, 40px)", // الخط يتغير حجمه تلقائياً حسب حجم الشاشة
    color: "#38bdf8",
    marginBottom: "40px"
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    width: "100%"
  },
  card: {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    cursor: "pointer",
    width: "100%",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },
  image: {
    width: "100%",
    height: "auto", // جعلنا الارتفاع تلقائي ليحافظ على نسبة الصورة (Aspect Ratio)
    aspectRatio: "16/9", // يضمن أن الصورة لن يتم قصها بشكل سيء
    objectFit: "cover",
    display: "block"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px"
  },
  overlayText: {
    color: "#fff",
    fontSize: "clamp(18px, 3vw, 24px)", // حجم الخط يتناسب مع الشاشة
    fontWeight: "bold",
    textAlign: "center"
  }
};

export default Projects;