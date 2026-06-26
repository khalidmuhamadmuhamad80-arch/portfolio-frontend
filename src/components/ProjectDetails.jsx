import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const sections = [
    {
      title: "Project Overview",
      text: "This personal portfolio project is a full-stack web application designed to showcase my technical skills and professional journey. It focuses on providing a seamless, responsive, and high-performance user experience, bridging the gap between elegant frontend design and robust backend functionality.",
      img: "/overview.png"
    },
    {
      title: "Navigation & User Experience",
      text: "The platform features an intuitive navigation bar with smooth transitions. It includes a secure authentication system for administrative access and a dynamic Dark/Light mode toggle, allowing users to customize their browsing experience based on their environment.",
      img: "/navbar.png"
    },
    {
      title: "Admin Dashboard",
      text: "The custom-built dashboard provides full control over project management. It allows for secure content updates, providing an efficient way to monitor site activity while ensuring that sensitive operations are protected behind protected routes.",
      img: "/dashboard.png"
    },
    {
      title: "Communication Systems",
      text: "Connectivity is at the heart of this project. I have implemented a robust communication system that allows users to send inquiries directly via email or reach out instantly through WhatsApp, all protected by anti-spam filters and input validation to ensure data integrity.",
      img: "/contact.png"
    }
  ];

  return (
    <div style={styles.container}>
      {/* زر الرجوع */}
      <button onClick={() => navigate(-1)} style={styles.backBtn}>
        <FaArrowLeft style={{ marginRight: "8px" }} /> Back
      </button>

      {/* عرض الأقسام */}
      {sections.map((sec, index) => (
        <motion.section
          key={index}
          style={styles.section}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div style={styles.content}>
            <h2 style={styles.title}>{sec.title}</h2>
            <p style={styles.text}>{sec.text}</p>
          </div>
          {/* يمكنك استبدال src بمسار الصورة الفعلي */}
          <img src={sec.img} alt={sec.title} style={styles.image} onError={(e) => {e.target.style.display = 'none'}} />
        </motion.section>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "80px 20px",
    color: "white"
  },
  backBtn: {
    background: "transparent",
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "40px",
    display: "flex",
    alignItems: "center",
    fontSize: "16px"
  },
  section: {
    marginBottom: "80px",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  title: {
    color: "#38bdf8",
    fontSize: "32px",
    marginBottom: "15px"
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#cbd5e1"
  },
  image: {
    width: "100%",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    marginTop: "20px"
  }
};

export default ProjectDetails;