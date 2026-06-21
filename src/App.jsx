import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/contact";

// ⚠️ تأكد أن اسم الملف في مجلد pages هو AdminLogin.jsx وليس Login.jsx
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

// 🏠 Home Page Component
function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  // تذكر الحالة المفضلة للمستخدم حتى عند إعادة تحميل الصفحة
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : true;
  });

  // حفظ التغييرات في المتصفح تلقائياً
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // 🔥 اختبار الاتصال بالسيرفر (الباك إند) عند تشغيل التطبيق
  useEffect(() => {
    const BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

    fetch(`${BASE_URL}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Backend connected successfully:");
        console.log(data);
      })
      .catch((err) => {
        console.error("❌ Backend connection failed:", err);
      });
  }, []);

  return (
    // تطبيق الاستايل هنا يضمن أن الخلفية ستشمل كل المسارات والصفحات بدون عيوب بصرية
    <div style={darkMode ? styles.dark : styles.light}>
      <BrowserRouter>
        <Routes>
          {/* 📑 المسار الرئيسي للمحفظة الشخصية */}
          <Route
            path="/"
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />

          {/* 🔐 مسار تسجيل دخول المسؤول */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* 🛡️ مسار لوحة التحكم المحمي */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* ================= 🎨 STYLES ================= */
const styles = {
  dark: {
    background: "#0f172a",
    color: "white",
    minHeight: "100vh",
    transition: "background 0.3s ease, color 0.3s ease" // حركة ناعمة عند التحويل بين الأوضاع
  },
  light: {
    background: "#f8fafc",
    color: "#0f172a",
    minHeight: "100vh",
    transition: "background 0.3s ease, color 0.3s ease"
  },
};
