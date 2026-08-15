
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./libary-managment.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
function LibraryManagement() {
  const project = {
    title: "Library Management System",

    shortDescription:
      "A modern system for managing books and library operations.",
    heroImage: "/c5.png",

    description:
      "Library Management System is a web application designed to make managing books, members, and library operations easier and more organized. The project provides a simple and practical experience for managing library data efficiently.",

    technologies: [
     { name: "Python" },
     { name: "Flask" },
     { name: "SQLAlchemy" },
     { name: "HTML" },
     { name: "CSS" },
     { name: "Bootstrap" },
],

    github:
      "https://github.com/your-username/library-management",


    images: [
      "/c1.png",
      "/c2.png",
      "/c3.png",
      "/c5.png",
    ],
  };

  return (
       <>
        <Navbar/>
    <main className="mk-web-studio">

      {/* =========================================
          Hero
      ========================================= */}

       <section className="mk-project-hero">

  <motion.div
    className="mk-project-hero-container"
    initial={{ opacity: 0, y: 35 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      ease: "easeOut",
    }}
  >

    {/* LEFT — CONTENT */}

    <div className="mk-project-hero-content">

      <p className="mk-project-label">
        PROJECT
      </p>

      <h1 className="mk-project-title">
        {project.title}
      </h1>

      <p className="mk-project-short-description">
        {project.shortDescription}
      </p>

      {/* Technologies */}

      <div className="mk-project-hero-technologies">
        {project.technologies.map((technology) => (
          <span key={technology.name}>
            {technology.name}
          </span>
        ))}
      </div>

      {/* Project Links */}

      <div className="mk-project-hero-links">


        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mk-project-link"
          >
            <FaGithub />

            <span>
              View on GitHub
            </span>

            <FaExternalLinkAlt />
          </a>
        )}

      </div>

    </div>


    {/* RIGHT — PROJECT IMAGE */}

    <div className="mk-project-hero-image">

      <img
        src={project.heroImage}
        alt={project.title}
      />

    </div>

  </motion.div>

</section>

      {/* =========================================
          Project Description
      ========================================= */}

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


      {/* =========================================
          Technologies
      ========================================= */}

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
                <h3>
                  {technology.name}
                </h3>

                <p>
                  {technology.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* =========================================
          Gallery
      ========================================= */}

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

export default LibraryManagement;

