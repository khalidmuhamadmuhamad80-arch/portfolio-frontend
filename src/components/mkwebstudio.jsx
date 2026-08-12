
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./mkwebstudio.css";

function MKWebStudio() {
  const project = {
    title: "MK Web Studio — Digital Solutions for Modern Businesses",

    shortDescription:
      "Digital solutions built for modern businesses.",

    description:
      "MK Web Studio is a digital platform designed to help businesses build a professional online presence. It provides customers with an easy way to explore services, submit inquiries, and place orders, while offering high-quality visuals, a strong brand identity, and a modern responsive experience across all devices.",

    technologies: [
      {
        category: "Backend",
        items: [
          {
            name: "Django",
            description:
              "Used to build the backend, manage business logic, handle data, and provide the core functionality of the platform.",
          },
          {
            name: "Email Services",
            description:
              "Used to send inquiry notifications and important messages between the platform and its users.",
          },
          {
            name: "JWT",
            description:
              "Used to securely manage user authentication and access through token-based authentication.",
          },
          {
            name: "PythonAnywhere",
            description:
              "Used to host and run the Django backend in a production environment.",
          },
          {
            name: "GitHub",
            description:
              "Used for source code management, version control, and maintaining the project's development workflow.",
          },
        ],
      },

      {
        category: "Frontend",
        items: [
          {
            name: "React",
            description:
              "Used to build the interactive frontend and create a smooth, modern user experience.",
          },
          {
            name: "JavaScript",
            description:
              "Used to add dynamic functionality and interactive behavior throughout the website.",
          },
          {
            name: "HTML",
            description:
              "Used to structure the website content and build the foundation of the user interface.",
          },
          {
            name: "CSS",
            description:
              "Used to create the visual design, responsive layouts, animations, and overall appearance of the website.",
          },
          {
            name: "Vercel",
            description:
              "Used to deploy and host the frontend application with fast and reliable delivery.",
          },
        ],
      },
    ],

    github:
      "https://github.com/your-username/mk-web-studio",

    liveDemo:
      "https://mkwebstudio.vercel.app/",

    images: [
      "/gpt10.png",
      "/gpt11.jpg",
      "/get1.png",
    ],
  };

  return (
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

            {project.technologies.map((category) => (
              <div
                className="mk-project-technology-category"
                key={category.category}
              >
                <h3 className="mk-project-category-title">
                  {category.category}
                </h3>

                <div className="mk-project-technology-items">

                  {category.items.map((technology) => (
                    <div
                      className="mk-project-technology"
                      key={technology.name}
                    >
                      <h4>
                        {technology.name}
                      </h4>

                      <p>
                        {technology.description}
                      </p>
                    </div>
                  ))}

                </div>
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
  );
}

export default MKWebStudio;




