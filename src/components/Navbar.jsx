import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
function Navbar() {
   const [open, setOpen] = useState(false);
   const [dropdownOpen, setDropdownOpen] = useState(false);

   const dropdownRef = useRef(null);
   const burgerRef = useRef(null);

   useEffect(() => {
     const handleClickOutside = (event) => {
       if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
       )  {
           setDropdownOpen(false);
       }

       if (
          burgerRef.current &&
          !burgerRef.current.contains(event.target)
       )  {
           setOpen(false);
       }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

// Main navigation links
const navigationLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },

];

// Dropdown links
const quickLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },

];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <h2 className="navbar-logo">Muhamad Khalid</h2>

      {/* Center Navigation */}
      <div className="nav-links">
        {navigationLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="nav-link"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Right Dropdown */}
      <div className="nav-dropdown"
           ref={dropdownRef}
      >
      <button
        className="dropdown-button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-label="Open navigation menu"
      >
         <FaBars />


          <span
            className={
              dropdownOpen
                ? "chevron rotate"
                : "chevron"
            }
          >
            ▾
          </span>
        </button>

        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              className="dropdown-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="dropdown-section">
                <span className="dropdown-title">
                  Quick Links
                </span>

                {quickLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="dropdown-link"
                    onClick={() =>
                      setDropdownOpen(false)
                    }
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu Button + Menu */}
      <div className="mobile-nav-wrapper" ref={burgerRef}>
        <button
          className="burger-menu"
          onClick={() => setOpen(!open)}
          aria-label="Open navigation menu"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              {quickLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="mobile-link"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;