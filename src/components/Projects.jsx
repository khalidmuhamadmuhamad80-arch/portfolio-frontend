import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

  useEffect(() => {
    // محاكاة لجلب مشروعك الحالي (بما أن لديك مشروع واحد فقط)
    setProjects([{
      id: 1,
      title: "Personal Portfolio",
      image_url: "/portfolio/public/me.jpg" // ضع رابط صورتك هنا
    }]);
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
            >
              <img src={p.image_url} alt={p.title} style={styles.image} />
              
              {/* تأثير الـ Overlay */}
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
  section: { padding: "80px 20px", display: "flex", justifyContent: "center" },
  container: { maxWidth: "600px", width: "100%", textAlign: "center" }, // عرض أصغر ليناسب كرت واحد
  title: { fontSize: "40px", color: "#38bdf8", marginBottom: "40px" },
  grid: { display: "flex", justifyContent: "center" },
  card: {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    cursor: "pointer",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "350px",
    objectFit: "cover",
    display: "block"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)", // خلفية سوداء نصف شفافة
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlayText: {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold"
  }
};

export default Projects;