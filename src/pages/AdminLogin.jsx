import { useState } from "react";

function AdminLogin() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // 🛠️ قراءة الرابط من متغيرات البيئة لمنع مشاكل الـ Deployment
    const BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

    try {
      const res = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("Login Response:", data);

      if (data.success) {
        // 🔐 حفظ التوكن المؤقت وتوكن التجديد معاً لضمان استقرار لوحة التحكم
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token); // 🔥 مهم جداً!

        // حفظ بيانات المستخدم
        localStorage.setItem("user", JSON.stringify(data.user));

        // 👑 التوجيه الفوري حسب الصلاحية
        if (data.user?.role === "admin") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/";
        }
      } else {
        setError(data.message || "Invalid username or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Server connection failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.loginCard}>
        <h2 style={styles.title}>Admin Portal</h2>

        {error && <div style={styles.errorAlert}>{error}</div>}

        <form onSubmit={login} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              required
              style={styles.input}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              style={styles.input}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;

/* ================= 🎨 STYLES (Dark Mode Compatible) ================= */
const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#0f172a"
  },
  loginCard: {
    background: "#1e293b",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    width: "100%",
    maxWidth: "400px",
    border: "1px solid rgba(255, 255, 255, 0.05)"
  },
  title: {
    color: "#38bdf8",
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "26px",
    fontWeight: "bold"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  label: {
    color: "#94a3b8",
    fontSize: "14px"
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #475569",
    background: "#0f172a",
    color: "white",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  button: {
    background: "#38bdf8",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background 0.2s"
  },
  errorAlert: {
    background: "rgba(239, 68, 68, 0.1)",
    border: "1px solid #ef4444",
    color: "#f87171",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "14px",
    marginBottom: "20px",
    textAlign: "center"
  }
};