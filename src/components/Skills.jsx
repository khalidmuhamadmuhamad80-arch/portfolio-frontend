import { motion } from "framer-motion";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      number: "01",
      title: "Backend Development",
      description: "Building reliable and scalable server-side applications.",
      skills: [
        "Python",
        "Django",
        "Flask",
        "REST APIs",
        "PostgreSQL",
        "SQLAlchemy",
      ],
    },
    {
      number: "02",
      title: "Frontend Development",
      description: "Creating modern, responsive, and interactive interfaces.",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Responsive Design",
        "UI Development",
      ],
    },
    {
      number: "03",
      title: "Soft Skills",
      description: "Personal skills that support effective and professional work.",
      skills: [
        "Problem Solving",
        "Communication",
        "Continuous Learning",
        "Attention to Detail",
        "Adaptability",
        "Teamwork",
      ],
    },
    {
      number: "04",
      title: "Business & Professional",
      description: "Skills that help turn ideas into useful digital solutions.",
      skills: [
        "Client Communication",
        "Requirement Analysis",
        "Project Planning",
        "Time Management",
        "Collaboration",
        "Understanding Business Needs",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Section Heading */}
        <div className="skills-heading">
          <p className="skills-label">MY SKILLS</p>

          <h2 className="skills-title">
            Explore My <span>Skills</span>
          </h2>

          <p className="skills-intro">
            A combination of technical knowledge, creative thinking, and
            professional skills I use to build meaningful digital experiences.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.number}
              className="skill-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="skill-card-top">
                <span className="skill-number">
                  {category.number}
                </span>
              </div>

              <h3 className="skill-card-title">
                {category.title}
              </h3>

              <p className="skill-card-description">
                {category.description}
              </p>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-item"
                  >
                    <span className="skill-dot"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;