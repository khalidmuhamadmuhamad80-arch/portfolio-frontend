import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsapp = () => {
    const text = `Name: ${form.name}%0AEmail: ${form.email}%0A%0AMessage:%0A${form.message}`;

    window.open(
      `https://wa.me/201027243191?text=${text}`,
      "_blank"
    );
  };

  return (
    <section style={styles.section} id="contact">
      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
      >
        <h2 style={styles.title}>
          Contact Me
        </h2>

        <p style={styles.subtitle}>
          Have a project or job opportunity?
        </p>

        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />

        <textarea
          placeholder="Your Message"
          name="message"
          rows="6"
          value={form.message}
          onChange={handleChange}
          style={styles.textarea}
        />

        <div style={styles.buttons}>
          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            style={styles.emailBtn}
          >
            <FaEnvelope />
            Send Email
          </a>

          <button
            onClick={sendWhatsapp}
            style={styles.whatsappBtn}
          >
            <FaWhatsapp />
            WhatsApp
          </button>
        </div>

        <div style={styles.footer}>
          <FaPaperPlane />
          Available for freelance work
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    background:
      "radial-gradient(circle at top,#0f172a,#020617)",
    display: "flex",
    justifyContent: "center",
  },

  card: {
    width: "100%",
    maxWidth: "700px",
    background: "rgba(255,255,255,.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,.1)",
    borderRadius: "25px",
    padding: "40px",
    boxShadow:
      "0 20px 60px rgba(0,0,0,.5)",
  },

  title: {
    textAlign: "center",
    color: "#38bdf8",
    fontSize: "40px",
    marginBottom: "10px",
  },

  subtitle: {
    textAlign: "center",
    color: "#cbd5e1",
    marginBottom: "30px",
  },

  input: {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,.1)",
    background: "#0f172a",
    color: "white",
    outline: "none",
  },

  textarea: {
    width: "100%",
    padding: "15px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,.1)",
    background: "#0f172a",
    color: "white",
    outline: "none",
    resize: "none",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "25px",
    flexWrap: "wrap",
  },

  emailBtn: {
    background: "#7c3aed",
    color: "white",
    textDecoration: "none",
    padding: "12px 22px",
    borderRadius: "12px",
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },

  whatsappBtn: {
    background: "#22c55e",
    color: "white",
    border: "none",
    cursor: "pointer",
    padding: "12px 22px",
    borderRadius: "12px",
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },

  footer: {
    marginTop: "25px",
    textAlign: "center",
    color: "#94a3b8",
    display: "flex",
    justifyContent: "center",
    gap: "8px",
  },
};

export default Contact;