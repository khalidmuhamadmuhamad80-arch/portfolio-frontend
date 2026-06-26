import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";

function Contact() {
  // تحديث الـ state ليشمل حقل الـ website (Honeypot)
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    message: "", 
    website: "" 
  });
  
  const [status, setStatus] = useState({ loading: false, msg: "", type: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // التحقق الأساسي في الفرونت إند
    if (!form.name || !form.email || !form.message) {
      setStatus({ loading: false, msg: "Please fill all fields!", type: "error" });
      return;
    }

    setStatus({ loading: true, msg: "", type: "" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, msg: "Message sent successfully!", type: "success" });
        // تفريغ الفورم بعد الإرسال الناجح
        setForm({ name: "", email: "", message: "", website: "" });
      } else {
        throw new Error(data.message || "Failed to send");
      }
    } catch (err) {
      setStatus({ loading: false, msg: "Failed to send. Try again later.", type: "error" });
    }
  };

  return (
    <section style={styles.section} id="contact">
      <motion.div 
        style={styles.card}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={styles.title}>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          {/* حقل الـ Honeypot المخفي للبوتات */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            autoComplete="off"
            style={{ display: "none" }}
          />

          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} style={styles.input} />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} style={styles.input} />
          <textarea name="message" placeholder="Message" rows="6" value={form.message} onChange={handleChange} style={styles.textarea} />
          
          <button type="submit" style={styles.button} disabled={status.loading}>
            {status.loading ? <FaSpinner className="spin" /> : "Send Message"}
          </button>
        </form>
        
        {status.msg && (
          <p style={{ color: status.type === "success" ? "#22c55e" : "#ef4444", textAlign: "center", marginTop: "15px" }}>
            {status.msg}
          </p>
        )}
      </motion.div>
    </section>
  );
}

const styles = {
  section: { padding: "100px 20px", display: "flex", justifyContent: "center" },
  card: { width: "100%", maxWidth: "700px", background: "rgba(255,255,255,.05)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,.1)", borderRadius: "25px", padding: "40px" },
  title: { textAlign: "center", color: "#38bdf8", fontSize: "40px", marginBottom: "20px" },
  input: { width: "100%", padding: "15px", marginBottom: "15px", borderRadius: "12px", background: "#0f172a", border: "1px solid rgba(255,255,255,.1)", color: "white", outline: "none" },
  textarea: { width: "100%", padding: "15px", marginBottom: "15px", borderRadius: "12px", background: "#0f172a", border: "1px solid rgba(255,255,255,.1)", color: "white", outline: "none", resize: "none" },
  button: { width: "100%", padding: "15px", borderRadius: "12px", border: "none", background: "#38bdf8", color: "#0f172a", fontWeight: "bold", cursor: "pointer", transition: "0.3s" }
};

export default Contact;