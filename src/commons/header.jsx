import React from "react";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

// Función para hacer scroll suave
const handleScroll = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Header = () => {
  return (
    <motion.nav
      className="navbar bg-base-100 mb-20 px-5 py-3   w-full z-50"
      initial="hidden"
      animate="visible"
    >
      <div className="flex-1">
        <motion.a href="/" custom={0} variants={navVariants} className="block">
          <img
            className="w-30 md:w-38"
            src="/logo.svg"
            alt="logo mora studio"
          />
        </motion.a>
      </div>
      <div className="flex-none">
        <motion.ul
          className="menu menu-horizontal menu-compact px-1 text-lg md:text-xl font-semibold"
          initial="hidden"
          animate="visible"
        >
          <motion.li custom={1} variants={navVariants}>
            <button onClick={() => handleScroll("contacto")} className="hover:text-primary transition-colors">
              Contacto
            </button>
          </motion.li>
          <motion.li custom={2} variants={navVariants}>
            <button onClick={() => handleScroll("educacion")} className="hover:text-primary transition-colors">
              Educación
            </button>
          </motion.li>
          <motion.li custom={3} variants={navVariants}>
            <button onClick={() => handleScroll("trabajos")} className="hover:text-primary transition-colors">
              Trabajos
            </button>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Header;
