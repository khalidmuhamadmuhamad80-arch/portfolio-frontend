
import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  const project = {
    id: 1,
    title: "MK Web Studio",
    technologies: ["Django"],
    image: "get1.png",
    link: "/projects/1",
  };

  return (
    <section className="projects" id="projects">
      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Section Heading */}
        <div className="projects-heading">
          <p className="projects-label">MY WORK</p>

          <h2 className="projects-title">
            Selected <span>Projects</span>
          </h2>

          <p className="projects-intro">
            A selection of projects I have built and worked on.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          <motion.article
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
          >
            {/* Project Image */}
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              {/* Hover Overlay */}
              <div className="project-overlay">
                <div className="project-overlay-content">
                  <h3>{project.title}</h3>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="project-button"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
