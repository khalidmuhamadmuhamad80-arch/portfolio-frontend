import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // جلب رابط السيرفر ديناميكياً من متغيرات البيئة لمنع حدوث مشاكل عند الـ Deployment
  const BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

  useEffect(() => {
    fetch(`${BASE_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API RESPONSE:", data);

        // ✅ حماية كاملة ضد أي شكل بيانات قادم من السيرفر
        const safeProjects = Array.isArray(data?.data) ? data.data : [];
        setProjects(safeProjects);
        setLoading(false)
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setProjects([]);
        setLoading(false);
      });
  }, [BASE_URL]);

  // 🔄 Loading المنسق ليتناسب مع ألوان الموقع الغامقة والفاتحة
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "100px" }}>
        <p style={{ color: "#38bdf8", fontSize: "18px" }}>Loading projects...</p>
      </div>
    );
  }

  return (
    <section style={styles.section} id="projects">
      <div style={styles.container}>
        <motion.h2
          style={styles.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div style={styles.grid}>
          {/* ✅ حماية الـ map وعرض محتوى غني بصرياً */}
          {projects.length > 0 ? (
            projects.map((p, index) => (
              <motion.div
                key={p.id || index}
                style={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // حركات متتالية رائعة (Staggered Animation)
                whileHover={{ scale: 1.03, translateY: -5 }}
              >
                {/* 🖼️ عرض صورة المشروع المحمية المرفوعة من السيرفر */}
                {p.image_url && (
                  <img
                    src={`${BASE_URL}${p.image_url}`}
                    alt={p.title}
                    style={styles.image}
                    onError={(e) => { e.target.style.display = 'none'; }} // حماية في حال مسح الصورة من السيرفر
                  />
                )}

                <div style={styles.cardContent}>
                  <h3 style={styles.projectTitle}>{p.title}</h3>
                  <p style={styles.projectDesc}>{p.description}</p>

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.link}
                    >
                      Live Link <FaExternalLinkAlt style={{ fontSize: "12px", marginLeft: "4px" }} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <p style={{ color: "#94a3b8", gridColumn: "1/-1", padding: "40px" }}>No projects added yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;

/* ================= 🎨 STYLES ================= */
const styles = {
  section: {
    padding: "80px 20px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: "1100px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: "40px",
    color: "#38bdf8",
    marginBottom: "40px",
    fontWeight: "bold"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
  },
  card: {
    background: "rgba(255,255,255,0.03)",
    borderRadius: "15px",
    border: "1px solid rgba(255,255,255,0.08)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    textAlign: "left"
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  },
  cardContent: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1
  },
  projectTitle: {
    margin: "0 0 10px 0",
    fontSize: "20px",
    color: "#f8fafc"
  },
  projectDesc: {
    color: "#cbd5e1",
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "20px",
    flexGrow: 1
  },
  link: {
    alignSelf: "flex-start",
    color: "#38bdf8",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    display: "inline-flex",
    alignItems: "center",
    transition: "color 0.2s"
  },
};