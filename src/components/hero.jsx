import { motion } from "framer-motion";
import { FaGithub, FaDownload } from "react-icons/fa";
import { useEffect, useState } from "react";

function Hero() {
  const [text, setText] = useState("");
  const fullText = "Mohamed Khalid";

  // 📝 تأثير الآلة الكاتبة المطور والمستقر
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={styles.hero} id="home">

      {/* 🌌 جزيئات متحركة ذكية ومعتمدة بالكامل على Framer Motion بدون أخطاء CSS */}
      <div style={styles.particles}>
        {[...Array(20)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomDelay = Math.random() * 5;
          const randomDuration = 6 + Math.random() * 8;

          return (
            <motion.span
              key={i}
              style={{ ...styles.particle, left: `${randomX}%` }}
              initial={{ y: "110vh", opacity: 0 }}
              animate={{ y: "-10vh", opacity: [0, 0.4, 0.4, 0] }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "linear"
              }}
            />
          );
        })}
      </div>

      {/* Glow Background */}
      <div style={styles.bgGlow}></div>

      {/* MAIN CONTENT CARD */}
      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.img
          src="me.jpg"
          alt="Mohamed Khalid"
          style={styles.image}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        {/* NAME TYPEWRITER */}
        <h1 style={styles.title}>
          {text}
          <span style={styles.cursor}>|</span>
        </h1>

        {/* SUBTITLE */}
        <h2 style={styles.subtitle}>
          Backend Developer | Flask | API Engineer
        </h2>

        {/* DESCRIPTION */}
        <p style={styles.description}>
          I build scalable backend systems, REST APIs, and modern web applications using Python, Flask, and SQLAlchemy.
        </p>

        {/* BUTTONS */}
        <div style={styles.buttons}>
          <a href="#projects" style={styles.primaryBtn}>View Projects</a>

          <a href="/cv.pdf" download style={styles.secondaryBtn}>
            <FaDownload /> CV
          </a>

          <a
            href="https://github.com/khalidmuhamadmuhamad80-arch"
            target="_blank"
            rel="noreferrer"
            style={styles.githubBtn}
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ================= 🎨 STYLES ================= */
const styles = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    padding: "20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
  },
  particles: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    overflow: "hidden",
    pointerEvents: "none" // تضمن أن الجزيئات لا تحجب الضغط على الأزرار
  },
  particle: {
    position: "absolute",
    width: "5px",
    height: "5px",
    background: "#38bdf8",
    borderRadius: "50%",
    bottom: 0,
  },
  card: {
    zIndex: 2,
    maxWidth: "750px",
    width: "100%",
    textAlign: "center",
    padding: "40px 30px",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3), 0 0 40px rgba(56, 189, 248, 0.1)",
  },
  bgGlow: {
    position: "absolute",
    width: "450px",
    height: "450px",
    background: "rgba(56, 189, 248, 0.18)",
    filter: "blur(130px)",
    borderRadius: "50%",
    top: "15%",
    left: "50%",
    transform: "translateX(-50%)",
    pointerEvents: "none"
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "3px solid #38bdf8",
    marginBottom: "20px",
    objectFit: "cover",
    boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)"
  },
  title: {
    fontSize: "clamp(32px, 6vw, 55px)",
    background: "linear-gradient(90deg, #38bdf8, #a78bfa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "15px",
    fontWeight: "800",
  },
  cursor: {
    color: "#a78bfa",
    animation: "blink 0.7s infinite",
    marginLeft: "4px"
  },
  subtitle: {
    color: "#38bdf8",
    fontSize: "clamp(16px, 3vw, 22px)",
    marginBottom: "15px",
    fontWeight: "500"
  },
  description: {
    color: "#94a3b8",
    fontSize: "16px",
    marginBottom: "30px",
    lineHeight: "1.8",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    padding: "12px 24px",
    background: "#38bdf8",
    borderRadius: "10px",
    color: "#0f172a", // جعل الكلام داكن ليظهر بوضوح على الخلفية اللبنية
    textDecoration: "none",
    fontWeight: "600",
    transition: "transform 0.2s"
  },
  secondaryBtn: {
    padding: "12px 24px",
    border: "1px solid #475569",
    borderRadius: "10px",
    color: "#cbd5e1",
    textDecoration: "none",
    display: "flex",
    gap: "8px",
    alignItems: "center",
    fontWeight: "500"
  },
  githubBtn: {
    padding: "12px 24px",
    background: "#1e293b",
    borderRadius: "10px",
    color: "white",
    textDecoration: "none",
    display: "flex",
    gap: "8px",
    alignItems: "center",
    fontWeight: "500"
  }
};

export default Hero;