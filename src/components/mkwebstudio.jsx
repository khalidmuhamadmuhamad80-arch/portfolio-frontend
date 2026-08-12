
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./mkwebstudio.css";

function MKWebStudio() {
  const project = {
    title: "MK Web Studio",

    shortDescription:
      "Modern digital solutions for businesses.",

    description:
      "MK Web Studio is a modern web project focused on creating professional digital experiences for businesses and individuals. The project combines a clean user interface with a powerful backend to provide a reliable and scalable web solution.",

    technologies: [
      {
        name: "Django",
        description:
          "Used to build the backend, manage application logic, handle data, and provide the required API functionality.",
      },
    ],

    github:
      "https://github.com/your-username/mk-web-studio",

    liveDemo:
      "https://your-domain.com",

    images: [
      "/projects/mk-web-studio.jpg",
      "/projects/mk-web-studio-2.jpg",
      "/projects/mk-web-studio-3.jpg",
    ],
  };

  return (
    <main className="mk-web-studio">

      {/* Hero Section */}
      <section className="mk-project-hero">
        <motion.div
          className="mk-project-container mk-project-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
        </motion.div>
      </section>

      {/* Project Description */}
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

      {/* Technologies Section */}
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

                <p>
                  {technology.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Project Links */}
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

      {/* Project Gallery */}
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

