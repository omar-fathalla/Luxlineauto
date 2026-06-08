import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import logo from "../../imports/logo.jpg";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? "bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
          onClick={() => scrollTo("hero")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={logo}
            alt="Luxe-Line Auto"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-[#c9a96e]/20"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
          />
          <motion.span
            className="text-gray-900 dark:text-white tracking-[0.2em] sm:tracking-[0.3em] uppercase transition-colors duration-500"
            style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(0.7rem, 2.5vw, 1rem)" }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Luxe-Line Auto
          </motion.span>
        </motion.div>

        {/* Desktop Navigation & Theme Toggle */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {[
              { label: "Home", id: "hero" },
              { label: "About", id: "about" },
              { label: "Services", id: "services" },
              { label: "Contact", id: "contact" },
            ].map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-600 dark:text-white/70 hover:text-[#c9a96e] dark:hover:text-[#c9a96e] transition-colors duration-500 tracking-[0.2em] uppercase bg-transparent border-none cursor-pointer relative group"
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem" }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[1px] bg-[#c9a96e]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#c9a96e]/20 text-[#c9a96e] bg-transparent cursor-pointer hover:bg-[#c9a96e]/10 transition-all duration-300"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ rotate: 180, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile menu toggle & Theme Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <motion.button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-[#c9a96e]/20 text-[#c9a96e] bg-transparent cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          <motion.button
            className="text-gray-900 dark:text-white bg-transparent border-none cursor-pointer p-2 relative z-50 transition-colors duration-500"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                className="block w-6 h-[1px] bg-current"
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-[1px] bg-current"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-[1px] bg-current"
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md relative z-50"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ pointerEvents: "auto" }}
          >
            {[
              { label: "Home", id: "hero" },
              { label: "About", id: "about" },
              { label: "Services", id: "services" },
              { label: "Contact", id: "contact" },
            ].map((item, index) => (
              <motion.button
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setMenuOpen(false);
                  const targetId = item.id;
                  setTimeout(() => {
                    const element = document.getElementById(targetId);
                    if (element) {
                      const offset = 80;
                      const top =
                        element.getBoundingClientRect().top +
                        window.pageYOffset -
                        offset;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }, 450);
                }}
                className="block w-full text-left px-6 py-4 text-gray-600 dark:text-white/70 hover:text-[#c9a96e] transition-colors tracking-[0.2em] uppercase bg-transparent border-none cursor-pointer relative group"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.75rem",
                  WebkitTapHighlightColor: "transparent"
                }}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileTap={{ x: 10, scale: 0.98 }}
                whileHover={{ x: 5 }}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-2 left-6 h-[1px] bg-[#c9a96e]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "calc(100% - 3rem)" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}