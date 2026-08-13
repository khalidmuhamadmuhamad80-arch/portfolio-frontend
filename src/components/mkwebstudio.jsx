
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./mkwebstudio.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
function MKWebStudio() {
  const project = {
    title: "MK Web Studio — Digital Solutions for Modern Businesses",

    shortDescription:
      "Digital solutions built for modern businesses.",

     heroImage: "/gpt12.png",

    description:
      "MK Web Studio is a digital platform designed to help businesses build a professional online presence. It provides customers with an easy way to explore services, submit inquiries, and place orders, while offering high-quality visuals, a strong brand identity, and a modern responsive experience across all devices.",

    technologies: [
  { name: "Django" },
  { name: "React" },
  { name: "JWT" },
  { name: "JavaScript" },
  { name: "GitHub" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "Email Services" },
  { name: "PythonAnywhere" },
  { name: "Vercel" },
],

    github:
      "https://github.com/your-username/mk-web-studio",

    liveDemo:
      "https://mkwebstudio.vercel.app/",

    images: [
      "/gpt10.png",
      "/gpt11.png",
      "/get1.png",
        "/gpt12.png",
    ],
  };

  return (
      <>
       <Navbar/>
    <main className="mk-web-studio">

      {/* =========================
          HERO
      ========================= */}
      <section className="mk-project-hero">
        <motion.div
          className="mk-project-container mk-project-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <p className="mk-project-label">
            PROJECT
          </p>

          <h1 className="mk-project-title">
            {project.title}
          </h1>

          <p className="mk-project-short-description">
            {project.shortDescription}
          </p>
          <div className="mk-project-hero-image">
            <img
                src={project.heroImage}
                alt={project.title}
            />
          </div>

          {/* Hero Buttons */}
          <div className="mk-project-hero-buttons">

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="mk-project-link live-link"
              >
                <span>
                  Visit Live Website
                </span>

                <FaExternalLinkAlt />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mk-project-link github-link"
              >
                <FaGithub />

                <span>
                  View on GitHub
                </span>

                <FaExternalLinkAlt />
              </a>
            )}

          </div>
        </motion.div>
      </section>


      {/* =========================
          PROJECT DESCRIPTION
      ========================= */}
      <section className="mk-project-description-section">
        <motion.div
          className="mk-project-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mk-project-label">
            ABOUT THE PROJECT
          </p>

          <h2 className="mk-project-section-title">
            Project Overview
          </h2>

          <p className="mk-project-description">
            {project.description}
          </p>
        </motion.div>
      </section>

      {/* =========================
          TECHNOLOGIES
       ========================= */}

     <section className="mk-project-technologies-section">
       <motion.div
         className="mk-project-container"
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.7 }}
       >
         <p className="mk-project-label">
            TECHNOLOGIES
         </p>

        <h2 className="mk-project-section-title">
            Technologies Used
        </h2>

        <div className="mk-project-technologies-list">
           {project.technologies.map((technology) => (
            <div
              className="mk-project-technology"
              key={technology.name}
            >
              <h3>{technology.name}</h3>
            </div>
        ))}
    </div>
  </motion.div>
</section>


      {/* =========================
          PROJECT LINKS
      ========================= */}
      <section className="mk-project-links-section">
        <motion.div
          className="mk-project-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mk-project-label">
            PROJECT LINKS
          </p>

          <h2 className="mk-project-section-title">
            Explore the Project
          </h2>

          <div className="mk-project-links">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mk-project-link github-link"
              >
                <FaGithub />

                <span>
                  View on GitHub
                </span>

                <FaExternalLinkAlt />
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="mk-project-link live-link"
              >
                <span>
                  Visit Live Website
                </span>

                <FaExternalLinkAlt />
              </a>
            )}

          </div>
        </motion.div>
      </section>


      {/* =========================
          GALLERY
      ========================= */}
      <section className="mk-project-gallery-section">
        <motion.div
          className="mk-project-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mk-project-label">
            GALLERY
          </p>

          <h2 className="mk-project-section-title">
            Project Gallery
          </h2>

          <div className="mk-project-gallery">

            {project.images.map((image, index) => (
              <motion.div
                className="mk-project-gallery-item"
                key={image}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                />
              </motion.div>
            ))}

          </div>
        </motion.div>
      </section>

    </main>

        <Footer />
    </>
  );
}

export default MKWebStudio;




