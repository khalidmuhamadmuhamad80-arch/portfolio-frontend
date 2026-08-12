import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpinner, FaTimes, FaArrowRight } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    msg: "",
    type: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const openContact = () => {
    setIsOpen(true);

    setStatus({
      loading: false,
      msg: "",
      type: "",
    });
  };

  const closeContact = () => {
    if (!status.loading) {
      setIsOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({
        loading: false,
        msg: "Please fill in all fields.",
        type: "error",
      });

      return;
    }

    setStatus({
      loading: true,
      msg: "",
      type: "",
    });

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          msg: "Your message has been sent successfully!",
          type: "success",
        });

        setForm({
          name: "",
          email: "",
          message: "",
          website: "",
        });
      } else {
        throw new Error(data.message || "Failed to send");
      }
    } catch  {
      setStatus({
        loading: false,
        msg: "Failed to send your message. Please try again later.",
        type: "error",
      });
    }
  };

  return (
    <>
      {/* =========================================
          CONTACT SECTION
      ========================================= */}

      <section className="contact-section" id="contact">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="contact-label">
            LET'S CONNECT
          </p>

          <h2 className="contact-title">
            Contact <span>Me</span>
          </h2>

          <p className="contact-description">
            Liked what you saw? I’d love to hear your thoughts.
            If you have a question, a project idea, or simply
            want to get in touch, feel free to reach out.
          </p>

          <p className="contact-thanks">
            Thank you for visiting my portfolio.
            I appreciate your time and interest.
          </p>

          <button
            type="button"
            className="contact-open-button"
            onClick={openContact}
          >
            Contact Me
            <FaArrowRight />
          </button>
        </motion.div>
      </section>


      {/* =========================================
          CONTACT MODAL
      ========================================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="contact-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeContact}
          >
            <motion.div
              className="contact-modal"
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 25,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* Modal Header */}

              <div className="contact-modal-header">
                <div>
                  <p className="modal-label">
                    GET IN TOUCH
                  </p>

                  <h3>
                    Let's Talk
                  </h3>
                </div>

                <button
                  type="button"
                  className="modal-close"
                  onClick={closeContact}
                  disabled={status.loading}
                  aria-label="Close contact form"
                >
                  <FaTimes />
                </button>
              </div>


              {/* Contact Form */}

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* Honeypot */}

                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex="-1"
                  className="honeypot"
                />


                {/* Name */}

                <div className="form-group">
                  <label htmlFor="name">
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>


                {/* Email */}

                <div className="form-group">
                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>


                {/* Message */}

                <div className="form-group">
                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your idea..."
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>


                {/* Submit */}

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={status.loading}
                >
                  {status.loading ? (
                    <>
                      <FaSpinner className="contact-spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaArrowRight />
                    </>
                  )}
                </button>


                {/* Status */}

                {status.msg && (
                  <motion.p
                    className={`contact-status ${status.type}`}
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                  >
                    {status.msg}
                  </motion.p>
                )}

              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Contact;