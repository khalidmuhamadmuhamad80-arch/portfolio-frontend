import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/khalidmuhamadmuhamad",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/khalidmuhamadmuhamad80-arch",
      label: "GitHub",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/201027243191",
      label: "WhatsApp",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:your@email.com",
      label: "Email",
    },
  ];

  return (
    <footer className="footer">

      {/* Left Side */}
      <div className="footer-social">

        <span className="footer-label">
          SEE ME ALSO
        </span>

        <FaArrowRight className="footer-arrow" />

        <div className="footer-icons">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>


      {/* Right Side */}
      <a
        href="#contact"
        className="footer-contact"
      >
        DON'T BE SHY — LET'S TALK
      </a>

    </footer>
  );
}

export default Footer;