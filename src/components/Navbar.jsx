import { useState } from "react";
import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      {/* Logo */}
      <h2 className="navbar-logo">MyPortfolio</h2>

      {/* Desktop Menu */}
      <div className="nav-links">
        {["home", "about", "projects", "contact"].map((item) => (
          <a key={item} href={`#${item}`} className="nav-link">
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>

      {/* Burger Menu Button (Mobile) */}
      <div
        className="burger-menu"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            {["home", "about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="mobile-link"
                onClick={() => setOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;