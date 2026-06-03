import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ShieldCheck, Gem, Users, Settings, Calendar, Award, Wrench } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import MISSION_IMG from "../../imports/close-up-black-car-parked-front-building-generative-ai-2.jpg";
import IMG_1 from "../../imports/black-convertible-with-license-plate-that-says-gw-1.jpg";
import IMG_2 from "../../imports/black-convertible-with-license-plate-that-says-gw.jpg";
import IMG_3 from "../../imports/automobile-model-is-sports-car-that-has-hood-that-says-it-is-black-color.jpg";
import IMG_4 from "../../imports/black-luxury-sports-car-parked-front-ornate-building.jpg";

const lines = [
  "At Luxe-Line Auto, our mission is to deliver",
  "a seamless, effortless, and elevated service",
  "journey for luxury vehicle owners.",
];

const commitments = [
  { icon: Settings, text: "Upholding and surpassing dealership-level standards" },
  { icon: Gem, text: "Using only genuine parts with uncompromised quality" },
  { icon: Users, text: "Providing transparent, reliable, and customer-focused service" },
  { icon: ShieldCheck, text: "Creating a hassle-free experience built on trust, precision, and attention to detail" },
];

const visionLines = [
  "To redefine the automotive service experience",
  "in the luxury segment by setting new benchmarks",
  "in quality, trust, and customer satisfaction.",
];

const aboutPoints = [
  { icon: Calendar, text: "Founded in 2025 with a vision to transform the traditional service experience" },
  { icon: Award, text: "Combining advanced diagnostics with highly skilled technicians and dealership-standard processes" },
  { icon: Wrench, text: "Working exclusively with 100% genuine parts, with no reliance on third-party suppliers" },
];

export function AboutSection() {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const ref2 = useRef<HTMLDivElement>(null);
  const inView2 = useInView(ref2, { once: true, margin: "-100px" });

  const ref3 = useRef<HTMLDivElement>(null);
  const inView3 = useInView(ref3, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-gray-50 dark:bg-[#0a0a0a] relative transition-colors duration-500">
      {/* Divider */}
      <div className="flex justify-center py-10 sm:py-16">
        <motion.div
          className="w-[1px] h-14 sm:h-20 bg-gradient-to-b from-transparent via-[#c9a96e]/40 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      {/* Mission block */}
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-32">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 md:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <motion.div
              className="overflow-hidden aspect-[4/3] sm:aspect-[4/5] relative bg-black/5 dark:bg-black/20"
              initial={{ opacity: 0, scale: 1.1, x: -50 }}
              animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={MISSION_IMG}
                alt="Luxe-Line Auto Service"
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              {/* Deep Blending Gradients */}
              <div 
                className="absolute inset-0 transition-all duration-700" 
                style={{ 
                  boxShadow: theme === "dark" 
                    ? "inset 0 0 100px rgba(10,10,10,1)" 
                    : "inset 0 0 100px rgba(249,250,251,1)"
                }} 
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-[#0a0a0a] to-[#0a0a0a]/40' : 'from-gray-50 to-gray-50/40'} via-transparent transition-colors duration-700`} />
              <div className={`absolute inset-0 bg-gradient-to-r ${theme === 'dark' ? 'from-[#0a0a0a]/60 to-[#0a0a0a]/60' : 'from-gray-50/60 to-gray-50/60'} via-transparent transition-colors duration-700`} />
            </motion.div>
          </div>

          {/* Text */}
          <div className="md:pl-8 pt-8 sm:pt-16 md:pt-0">
            <motion.p
              className="text-[#c9a96e] tracking-[0.4em] uppercase mb-6"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem" }}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ letterSpacing: "0.5em", transition: { duration: 0.3 } }}
            >
              Our Mission
            </motion.p>

            <div className="mb-8">
              {lines.map((line, i) => (
                <motion.p
                  key={i}
                  className="mb-1 transition-colors duration-500"
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
                    lineHeight: 1.8,
                    color: theme === "dark" ? "rgba(255, 255, 255, 0.9)" : "rgba(17, 24, 39, 0.9)"
                  }}
                  initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                  animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
                  whileHover={{ x: 5, transition: { duration: 0.3 } }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="w-12 h-[1px] bg-[#c9a96e]/40 mb-8"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              className="text-[#c9a96e]/70 tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.6rem" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              We are committed to
            </motion.p>

            <div className="space-y-3 sm:space-y-4">
              {commitments.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 sm:gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + i * 0.15 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="mt-0.5 sm:mt-1 w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center border border-[#c9a96e]/20 rounded-sm group-hover:border-[#c9a96e]/50 transition-colors duration-500"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#c9a96e]/60 group-hover:text-[#c9a96e] transition-colors duration-500" />
                  </motion.div>
                  <p
                    className="text-gray-500 dark:text-white/50 group-hover:text-gray-900 dark:group-hover:text-white/80 transition-colors duration-500 pt-0.5 sm:pt-1"
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(0.75rem, 2vw, 0.82rem)", lineHeight: 1.7 }}
                  >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vision block */}
      <div ref={ref2} className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-32">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 md:gap-24 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <motion.p
              className="text-[#c9a96e] tracking-[0.4em] uppercase mb-6"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem" }}
              initial={{ opacity: 0, x: -20 }}
              animate={inView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ letterSpacing: "0.5em", transition: { duration: 0.3 } }}
            >
              Our Vision
            </motion.p>

            <div className="mb-10">
              {visionLines.map((line, i) => (
                <motion.p
                  key={i}
                  className="mb-1 transition-colors duration-500"
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                    lineHeight: 1.8,
                    color: theme === "dark" ? "rgba(255, 255, 255, 0.9)" : "rgba(17, 24, 39, 0.9)"
                  }}
                  initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                  animate={inView2 ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
                  whileHover={{ x: 5, transition: { duration: 0.3 } }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="w-12 h-[1px] bg-[#c9a96e]/40 mb-8"
              initial={{ scaleX: 0 }}
              animate={inView2 ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              className="text-gray-500 dark:text-white/40 max-w-md transition-colors duration-500"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", lineHeight: 1.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ opacity: 0.8, transition: { duration: 0.3 } }}
            >
              Becoming the preferred destination for discerning car owners who expect nothing less
              than excellence.
            </motion.p>
          </div>

          {/* Image */}
          <motion.div
            className="order-1 md:order-2 overflow-hidden aspect-[4/3] sm:aspect-[4/5] relative bg-black/5 dark:bg-black/20"
            initial={{ opacity: 0, scale: 1.1, x: 50 }}
            animate={inView2 ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={IMG_3}
              alt="Automotive Workshop"
              className="w-full h-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            {/* Deep Blending Gradients */}
            <div 
              className="absolute inset-0 transition-all duration-700" 
              style={{ 
                boxShadow: theme === "dark" 
                  ? "inset 0 0 100px rgba(10,10,10,1)" 
                  : "inset 0 0 100px rgba(249,250,251,1)"
              }} 
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-[#0a0a0a] to-[#0a0a0a]/40' : 'from-gray-50 to-gray-50/40'} via-transparent transition-colors duration-700`} />
            <div className={`absolute inset-0 bg-gradient-to-l ${theme === 'dark' ? 'from-[#0a0a0a]/60 to-[#0a0a0a]/60' : 'from-gray-50/60 to-gray-50/60'} via-transparent transition-colors duration-700`} />
          </motion.div>
        </div>
      </div>

      {/* About Company block */}
      <div ref={ref3} className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-32">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 md:gap-24 items-center">
          {/* Images */}
          <div className="relative pb-8 sm:pb-0">
            <motion.div
              className="overflow-hidden aspect-[4/3] sm:aspect-[4/5] relative bg-black/5 dark:bg-black/20"
              initial={{ opacity: 0, scale: 1.1, x: -50 }}
              animate={inView3 ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={IMG_4}
                alt="Luxe-Line Auto Facility"
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              {/* Deep Blending Gradients */}
              <div 
                className="absolute inset-0 transition-all duration-700" 
                style={{ 
                  boxShadow: theme === "dark" 
                    ? "inset 0 0 100px rgba(10,10,10,1)" 
                    : "inset 0 0 100px rgba(249,250,251,1)"
                }} 
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-[#0a0a0a] to-[#0a0a0a]/40' : 'from-gray-50 to-gray-50/40'} via-transparent transition-colors duration-700`} />
              <div className={`absolute inset-0 bg-gradient-to-r ${theme === 'dark' ? 'from-[#0a0a0a]/60 to-[#0a0a0a]/60' : 'from-gray-50/60 to-gray-50/60'} via-transparent transition-colors duration-700`} />
            </motion.div>
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <motion.p
              className="text-[#c9a96e] tracking-[0.4em] uppercase mb-6"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem" }}
              initial={{ opacity: 0, x: -20 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ letterSpacing: "0.5em", transition: { duration: 0.3 } }}
            >
              About Us
            </motion.p>

            <motion.h2
              className="text-gray-900 dark:text-white mb-6 transition-colors duration-500"
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                lineHeight: 1.6,
              }}
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={inView3 ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Precision. Passion. Perfection.
            </motion.h2>

            <motion.p
              className="text-gray-600 dark:text-white/60 mb-8 transition-colors duration-500"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem", lineHeight: 1.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Located in the heart of Musaffah, Abu Dhabi, Luxe-Line Auto is a premium automotive service and maintenance center
              specializing in luxury vehicles. Your luxury vehicle deserves nothing less than our meticulous care and unmatched standards.
            </motion.p>

            <motion.p
              className="text-gray-600 dark:text-white/60 mb-10 transition-colors duration-500"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem", lineHeight: 1.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              At Luxe-Line Auto, we understand that luxury car owners expect more than just technical
              expertise—they expect an experience that reflects the value of their vehicle.
            </motion.p>

            <motion.div
              className="w-12 h-[1px] bg-[#c9a96e]/40 mb-8"
              initial={{ scaleX: 0 }}
              animate={inView3 ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ transformOrigin: "left" }}
            />

            <div className="space-y-4">
              {aboutPoints.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 sm:gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView3 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + i * 0.15 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="mt-0.5 sm:mt-1 w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center border border-[#c9a96e]/20 rounded-sm group-hover:border-[#c9a96e]/50 transition-colors duration-500"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#c9a96e]/60 group-hover:text-[#c9a96e] transition-colors duration-500" />
                  </motion.div>
                  <p
                    className="text-gray-500 dark:text-white/50 group-hover:text-gray-700 dark:group-hover:text-white/80 transition-colors duration-500 pt-0.5 sm:pt-1"
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(0.75rem, 2vw, 0.82rem)", lineHeight: 1.7 }}
                  >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}