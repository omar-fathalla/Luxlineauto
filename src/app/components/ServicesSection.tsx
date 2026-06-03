import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Users, Activity, Award, Star, Sparkles, Shield } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Expert Technicians",
    desc: "Highly skilled professionals with extensive experience in luxury automotive care",
  },
  {
    icon: Activity,
    title: "Advanced Diagnostics",
    desc: "State-of-the-art diagnostic equipment for precise problem identification",
  },
  {
    icon: Award,
    title: "Trusted Quality",
    desc: "Uncompromising standards ensuring excellence in every service",
  },
  {
    icon: Star,
    title: "Luxury Brand Specialist",
    desc: "Expert knowledge across all premium manufacturers including Bentley and Rolls-Royce",
  },
  {
    icon: Sparkles,
    title: "Premium Service",
    desc: "An elite treatment designed for the most discerning vehicle owners",
  },
  {
    icon: Shield,
    title: "Luxe Maintenance",
    desc: "Meticulous attention to detail in every aspect of your vehicle's upkeep",
  },
];

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-gray-50 dark:bg-[#0a0a0a] relative py-16 sm:py-24 transition-colors duration-500">
      {/* Divider */}
      <div className="flex justify-center pb-10 sm:pb-16">
        <motion.div
          className="w-[1px] h-14 sm:h-20 bg-gradient-to-b from-transparent via-[#c9a96e]/40 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.p
            className="text-[#c9a96e] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem" }}
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            whileHover={{ letterSpacing: "0.5em", transition: { duration: 0.3 } }}
          >
            Our Services
          </motion.p>
          <motion.h2
            className="text-gray-900 dark:text-white tracking-[0.1em] transition-colors duration-500"
            style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            Excellence in Every Detail
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Card */}
              <div className="relative p-8 sm:p-10 h-full bg-white dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:to-[#1a1a1a] border border-gray-200 dark:border-[#c9a96e]/10 group-hover:border-[#c9a96e]/30 transition-all duration-500 overflow-hidden shadow-xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/10 via-transparent to-transparent" />
                </div>

                {/* Icon */}
                <motion.div
                  className="relative mb-6 w-14 h-14 flex items-center justify-center border border-[#c9a96e]/20 rounded-sm group-hover:border-[#c9a96e]/50 transition-all duration-500"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-7 h-7 text-[#c9a96e]/60 group-hover:text-[#c9a96e] transition-colors duration-500" />
                  <motion.div
                    className="absolute inset-0 bg-[#c9a96e]/5 rounded-sm"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-gray-900 dark:text-white mb-4 tracking-[0.1em] uppercase transition-colors duration-500"
                  style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
                  whileHover={{ x: 5, transition: { duration: 0.3 } }}
                >
                  {service.title}
                </motion.h3>

                {/* Divider */}
                <motion.div
                  className="w-8 h-[1px] bg-[#c9a96e]/30 mb-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  style={{ transformOrigin: "left" }}
                />

                {/* Description */}
                <p
                  className="text-gray-500 dark:text-white/40 group-hover:text-gray-700 dark:group-hover:text-white/60 transition-colors duration-500"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", lineHeight: 1.8 }}
                >
                  {service.desc}
                </p>

                {/* Hover Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c9a96e]/5 to-transparent -translate-x-full"
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Shadow Effect */}
              <motion.div
                className="absolute inset-0 -z-10 bg-[#c9a96e]/5 blur-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.p
            className="text-gray-400 dark:text-white/30 tracking-[0.2em] uppercase max-w-2xl mx-auto mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", lineHeight: 1.8 }}
            whileHover={{ opacity: 0.6, transition: { duration: 0.3 } }}
          >
            "We don’t just service cars, we elevate the experience."
          </motion.p>
          <motion.p
            className="text-[#c9a96e]/40 tracking-[0.1em] uppercase"
            style={{ fontFamily: "Cinzel, serif", fontSize: "0.85rem" }}
          >
            Luxe Care. Unmatched Standards.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
