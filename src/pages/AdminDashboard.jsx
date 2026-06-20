import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { authenticatedFetch } from "../utils/api"; // 🔥 استيراد المساعد الذكي اللي عملناه

const BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

function AdminDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [form, setForm] = useState({ title: "", description: "", link: "" });
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchDashboard();
    fetchProjects();
  }, []);

  // 🔄 جلب بيانات لوحة التحكم باستخدام الفيتش المحمي الذكي
  const fetchDashboard = async () => {
    try {
      const res = await authenticatedFetch("/api/dashboard");
      if (res.ok) {
        const data = await res.json();
        setDashboard(data);
      }
    } catch (err) {
      console.error("Error fetching dashboard:", err);
    }
  };

  // 🌐 جلب المشاريع (مسار عام لا يحتاج توكن)
  const fetchProjects = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/projects`);
      const data = await res.json();
      if (data.success) {
        setProjects(data.data);
      }
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  const openAddModal = () => {
    setEditMode(false);
    setSelectedId(null);
    setForm({ title: "", description: "", link: "" });
    setImage(null);
    setVideo(null);
    setModalOpen(true);
  };

  const openEditModal = (p) => {
    setEditMode(true);
    setSelectedId(p.id);
    setForm({ title: p.title, description: p.description, link: p.link });
    setImage(null);
    setVideo(null);
    setModalOpen(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 💾 حفظ أو تحديث المشروع عبر FormData وبطريقة محمية تلقائياً
  const saveProject = async () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("link", form.link);

    if (image) formData.append("image", image);
    if (video) formData.append("video", video);

    const url = editMode ? `/api/projects/${selectedId}` : `/api/projects`;
    const method = editMode ? "PUT" : "POST";

    try {
      const res = await authenticatedFetch(url, {
        method,
        body: formData // الـ FormData بتتبعت هنا والهيدر بيتضاف تلقائياً في الخلفية
      });

      if (res.ok) {
        setModalOpen(false);
        fetchProjects();
        fetchDashboard();
      }
    } catch (err) {
      console.error("Error saving project:", err);
    }
  };

  // 🗑️ مسح مشروع بشكل محمي
  const deleteProject = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project? ⚠️")) return;

    try {
      const res = await authenticatedFetch(`/api/projects/${id}`, {
        method: "DELETE"
      });

      if (res.ok) {
        fetchProjects();
        fetchDashboard();
      }
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };

  if (!dashboard) {
    return <h2 style={{ color: "#38bdf8", textAlign: "center", marginTop: "100px" }}>Loading Dashboard Analytics...</h2>;
  }

  const chartData = [
    { name: "Projects", value: dashboard.projects || 0 },
    { name: "Messages", value: dashboard.contacts || 0 },
    { name: "Visits", value: dashboard.visits || 0 },
  ];

  const COLORS = ["#38bdf8", "#a78bfa", "#f59e0b"];

  return (
    <div style={styles.page}>
      <h1 style={{ color: "#38bdf8", marginBottom: "30px" }}>👑 Admin Dashboard</h1>

      {/* Stats Cards */}
      <div style={styles.stats}>
        <div style={styles.card}>👁 Total Visits <div style={styles.statNum}>{dashboard.visits || 0}</div></div>
        <div style={styles.card}>📦 Total Projects <div style={styles.statNum}>{dashboard.projects || 0}</div></div>
        <div style={styles.card}>💬 Messages Received <div style={styles.statNum}>{dashboard.contacts || 0}</div></div>
      </div>

      {/* Analytics Charts */}
      <div style={styles.chartBox}>
        <h2 style={{ marginBottom: "20px", color: "#f8fafc" }}>Analytics Overview</h2>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 280, height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={chartData} dataKey="value" nameKey="name" outerRadius={80} label>
                  {chartData.map((_, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div style={{ width: "100%", maxWidth: 450, height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar dataKey="value" fill="#38bdf8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "40px 0 20px 0" }}>
        <h2 style={{ margin: 0 }}>Current Projects</h2>
        <button style={styles.addBtn} onClick={openAddModal}>➕ Add New Project</button>
      </div>

      {/* Grid Projects Row */}
      <div style={styles.grid}>
        {projects.map((p) => (
          <div key={p.id} style={styles.card2}>
            {/* 🔥 تصحيح مسار الصورة لقراءتها من السيرفر بشكل سليم */}
            {p.image_url && (
              <img
                src={`${BASE_URL}${p.image_url}`}
                style={styles.projImage}
                alt={p.title}
                onError={(e) => e.target.style.display = 'none'}
              />
            )}
            <h3 style={{ marginTop: "15px", color: "#f8fafc" }}>{p.title}</h3>
            <p style={{ color: "#94a3b8", fontSize: "14px", minHeight: "42px" }}>{p.description}</p>
            <div style={{ display: "flex", gap: 10, marginTop: 15 }}>
              <button onClick={() => openEditModal(p)} style={styles.editBtn}>✏ Edit</button>
              <button onClick={() => deleteProject(p.id)} style={styles.delBtn}>🗑 Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Form Modal Container */}
      {modalOpen && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h2 style={{ color: "#38bdf8", marginTop: 0, marginBottom: "20px" }}>{editMode ? "Edit Project ✏" : "Add New Project ➕"}</h2>
            <input name="title" placeholder="Project Title" value={form.title} onChange={handleChange} style={styles.input} />
            <input name="description" placeholder="Project Description" value={form.description} onChange={handleChange} style={styles.input} />
            <input name="link" placeholder="Live Project Link" value={form.link} onChange={handleChange} style={styles.input} />

            <label style={{ color: "#94a3b8", display: "block", marginTop: "10px", fontSize: "14px" }}>📷 Project Image</label>
            <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} style={{ marginBottom: "15px", color: "white" }} />

            <label style={{ color: "#94a3b8", display: "block", fontSize: "14px" }}>🎥 Project Video (Optional)</label>
            <input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} style={{ color: "white" }} />

            <div style={{ marginTop: 25, display: "flex", gap: 12 }}>
              <button onClick={saveProject} style={styles.saveBtn}>{editMode ? "Update" : "Create"}</button>
              <button onClick={() => setModalOpen(false)} style={styles.closeBtn}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= 🎨 STYLES ================= */
const styles = {
  page: { padding: "40px 20px", background: "#0f172a", color: "white", minHeight: "100vh" },
  stats: { display: "flex", gap: 15, marginBottom: 30, flexWrap: "wrap" },
  card: { flex: 1, minWidth: "200px", background: "#1e293b", padding: 20, borderRadius: 12, textAlign: "center", border: "1px solid rgba(255,255,255,0.05)" },
  statNum: { fontSize: "24px", color: "#38bdf8", fontWeight: "bold", marginTop: "5px" },
  chartBox: { background: "#1e293b", padding: 25, borderRadius: 12, marginBottom: 30, border: "1px solid rgba(255,255,255,0.05)" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 },
  card2: { background: "#1e293b", padding: 20, borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column" },
  projImage: { width: "100%", height: "160px", objectFit: "cover", borderRadius: 8 },
  addBtn: { padding: "10px 20px", background: "#38bdf8", color: "#0f172a", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", transition: "transform 0.2s" },
  editBtn: { background: "#eab308", color: "white", border: "none", padding: "8px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: "500", flex: 1 },
  delBtn: { background: "#ef4444", color: "white", border: "none", padding: "8px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: "500", flex: 1 },
  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2000, backdropFilter: "blur(5px)" },
  modal: { background: "#1e293b", padding: 30, borderRadius: 16, width: "100%", maxWidth: "420px", border: "1px solid rgba(255,255,255,0.08)" },
  input: { width: "100%", marginBottom: 15, padding: "12px", borderRadius: "8px", border: "1px solid #475569", background: "#0f172a", color: "white", outline: "none" },
  saveBtn: { background: "#38bdf8", color: "#0f172a", padding: "12px", border: "none", borderRadius: "8px", flex: 1, cursor: "pointer", fontWeight: "bold" },
  closeBtn: { background: "#475569", color: "white", padding: "12px", border: "none", borderRadius: "8px", flex: 1, cursor: "pointer", fontWeight: "bold" },
};

export default AdminDashboard;