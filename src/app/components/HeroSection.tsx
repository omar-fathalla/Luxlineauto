import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import logo from "../../imports/WhatsApp_Image_2026-04-16_at_15.04.58.jpeg";
import heroImage from "../../imports/black-sports-car-with-license-plate-number-8-front.jpg";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background image with parallax */}
      <motion.div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Deep Blending Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6">
        <motion.img
          src={logo}
          alt="Luxe-Line Auto"
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full object-cover mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ boxShadow: "0 0 60px rgba(201, 169, 110, 0.2)" }}
        />

          <motion.h1
            className="text-gray-900 dark:text-white tracking-[0.1em] sm:tracking-[0.15em] uppercase mb-3 sm:mb-4 transition-colors duration-500"
            style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(1.4rem, 5vw, 3.5rem)" }}
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 30px rgba(201,169,110,0.5)",
              transition: { duration: 0.3 }
            }}
          >
            Luxe-Line Auto
          </motion.h1>

          <motion.div
            className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent mb-4 sm:mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />

          <motion.p
            className="text-gray-600 dark:text-white/60 tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 transition-colors duration-500"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(0.6rem, 2vw, 0.8rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            whileHover={{
              letterSpacing: "0.4em",
              transition: { duration: 0.3 }
            }}
          >
            A New Destination for Luxury
          </motion.p>

        <motion.div
          className="bg-[#c9a96e]/10 border border-[#c9a96e]/30 px-6 py-2 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.p
            className="text-[#c9a96e] tracking-[0.3em] uppercase"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Opening Very Soon • Musaffah, Abu Dhabi
          </motion.p>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          className="border border-[#c9a96e]/40 text-[#c9a96e] px-8 sm:px-10 py-2.5 sm:py-3 tracking-[0.2em] sm:tracking-[0.3em] uppercase bg-transparent cursor-pointer relative overflow-hidden group"
          style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(0.6rem, 1.5vw, 0.7rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201,169,110,0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.7 }}
          />
          <span className="relative z-10">Stay Tuned</span>
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={scrollToAbout}
        whileHover={{ scale: 1.2 }}
      >
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-[#c9a96e]/60 to-transparent"
          animate={{
            scaleY: [1, 0.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-1 h-1 rounded-full bg-[#c9a96e]"
          animate={{
            y: [0, 10, 0],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}