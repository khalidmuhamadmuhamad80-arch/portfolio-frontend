import { useState } from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  // 🔐 فحص وجود الـ access_token
  const token = localStorage.getItem("token");
  let isLoggedIn = false;

  if (token) {
    try {
      // فك التشفير بأمان للتأكد من هيكلة التوكن
      JSON.parse(atob(token.split(".")[1]));
      isLoggedIn = true;
    } catch {
      isLoggedIn = false;
    }
  }

  // 🔄 دالة تسجيل الخروج الكاملة والآمنة
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token"); // 🔥 تم الإصلاح: مسح توكن التجديد
    localStorage.removeItem("user");         // مسح بيانات المستخدم
    window.location.href = "/";
  };

  // إعداد الألوان ديناميكياً بناءً على الـ Dark Mode
  const currentNavStyle = {
    ...styles.nav,
    background: darkMode ? "rgba(15, 23, 42, 0.7)" : "rgba(248, 250, 252, 0.7)",
    borderBottom: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
  };

  const currentLinkStyle = {
    ...styles.link,
    color: darkMode ? "#f8fafc" : "#0f172a"
  };

  return (
    <motion.nav
      style={currentNavStyle}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <h2 style={styles.logo}>MyPortfolio</h2>

      {/* Desktop Menu */}
      <div style={styles.links}>
        {["home", "about", "projects", "contact"].map((item) => (
          <a key={item} href={`#${item}`} style={currentLinkStyle}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}

        {!isLoggedIn ? (
          <a href="/admin/login" style={styles.authBtn}>
            Login
          </a>
        ) : (
          <>
            <a href="/admin" style={styles.dashboardBtn}>
              Dashboard
            </a>
            <button onClick={handleLogout} style={styles.logoutBtn}>
              Logout
            </button>
          </>
        )}

        {/* Dark Mode Button */}
        {setDarkMode && (
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{ ...styles.toggleBtn, color: darkMode ? "#eab308" : "#64748b" }}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        )}
      </div>

      {/* Social Icons (Desktop) */}
      <div style={styles.socialIcons}>
        <a href="https://github.com/khalidmuhamadmuhamad80-arch" target="_blank" rel="noreferrer" style={styles.icon}><FaGithub /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={styles.icon}><FaFacebook /></a>
        <a href="https://instagram.com/khalidmuhamadmuhamad" target="_blank" rel="noreferrer" style={styles.icon}><FaInstagram /></a>
        <a href="https://wa.me/201027243191" target="_blank" rel="noreferrer" style={styles.icon}><FaWhatsapp /></a>
      </div>

      {/* Burger Menu Button (Mobile) */}
      <div style={styles.burger} onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            style={{ ...styles.mobileMenu, background: darkMode ? "rgba(30, 41, 59, 0.98)" : "rgba(241, 245, 249, 0.98)" }}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            {["home", "about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                style={{ ...styles.mobileLink, color: darkMode ? "white" : "#0f172a" }}
                onClick={() => setOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            {!isLoggedIn ? (
              <a href="/admin/login" style={{ ...styles.authBtn, textAlign: "center" }}>Login</a>
            ) : (
              <>
                <a href="/admin" style={{ ...styles.dashboardBtn, textAlign: "center" }}>Dashboard</a>
                <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
              </>
            )}

            <div style={styles.mobileSocial}>
              <a href="https://github.com/khalidmuhamadmuhamad80-arch" target="_blank" rel="noreferrer" style={styles.icon}><FaGithub /></a>
              <a href="https://instagram.com/khalidmuhamadmuhamad" target="_blank" rel="noreferrer" style={styles.icon}><FaInstagram /></a>
              <a href="https://wa.me/201027243191" target="_blank" rel="noreferrer" style={styles.icon}><FaWhatsapp /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

/* ================= 🎨 STYLES ================= */
const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    backdropFilter: "blur(15px)",
    transition: "background 0.3s, border-bottom 0.3s"
  },
  logo: {
    color: "#38bdf8",
    margin: 0,
    fontSize: "22px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
    transition: "color 0.2s"
  },
  authBtn: {
    color: "#38bdf8",
    border: "1px solid #38bdf8",
    padding: "6px 14px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "500"
  },
  dashboardBtn: {
    background: "#38bdf8",
    color: "#0f172a",
    padding: "6px 14px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600"
  },
  logoutBtn: {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "6px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500"
  },
  toggleBtn: {
    background: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "5px"
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
  },
  mobileSocial: {
    display: "flex",
    gap: "15px",
    marginTop: "10px",
    justifyContent: "center"
  },
  icon: {
    color: "#38bdf8",
    fontSize: "20px",
    transition: "transform 0.2s"
  },
  burger: {
    color: "#38bdf8",
    fontSize: "26px",
    cursor: "pointer",
    display: "block",
  },
  mobileMenu: {
    position: "absolute",
    top: "70px",
    right: "20px",
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "200px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },
  mobileLink: {
    textDecoration: "none",
    fontWeight: "500"
  },
};