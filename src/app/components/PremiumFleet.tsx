import { useRef } from "react";
import { motion, useInView } from "motion/react";
import img1 from "../../imports/rolls-royce-front-palace.jpg";
import img2 from "../../imports/gold-car-with-word-honda-front.jpg";
import img3 from "../../imports/bmw-car-is-reflected-puddle-water.jpg";
import img4 from "../../imports/close-up-black-car-parked-front-building-generative-ai.jpg";
import img5 from "../../imports/black-sports-car-with-license-plate-number-8-front.jpg";
import img6 from "../../imports/black-convertible-with-license-plate-that-says-gw.jpg";
import img7 from "../../imports/black-luxury-sports-car-parked-front-ornate-building.jpg";
import img8 from "../../imports/automobile-model-is-sports-car-that-has-hood-that-says-it-is-black-color.jpg";

const cars = [
  { id: 1, img: img1, title: "Rolls-Royce", desc: "Ultimate Luxury" },
  { id: 2, img: img2, title: "Bentley", desc: "Handcrafted Excellence" },
  { id: 3, img: img3, title: "BMW", desc: "Precision Engineering" },
  { id: 4, img: img4, title: "Mercedes", desc: "Sophisticated Power" },
  { id: 5, img: img5, title: "Sports Elite", desc: "Performance Mastery" },
  { id: 6, img: img6, title: "Convertible", desc: "Open-Air Elegance" },
  { id: 7, img: img7, title: "Grand Tourer", desc: "Timeless Prestige" },
  { id: 8, img: img8, title: "Super Sport", desc: "Extreme Performance" },
];

export function PremiumFleet() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fleet" className="bg-[#0a0a0a] relative py-16 sm:py-24">
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
            Our Collection
          </motion.p>
          <motion.h2
            className="text-white tracking-[0.1em]"
            style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            Premium Fleet
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              className="relative group overflow-hidden aspect-[3/4] cursor-pointer"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Image */}
              <motion.div
                className="absolute inset-0 overflow-hidden bg-black/20"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={car.img}
                  alt={car.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.4 }}
              />

              {/* Gold Border */}
              <motion.div
                className="absolute inset-0 border border-[#c9a96e]/0 group-hover:border-[#c9a96e]/40 transition-all duration-500"
                whileHover={{ boxShadow: "inset 0 0 30px rgba(201,169,110,0.2)" }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <motion.div
                  className="w-8 h-[1px] bg-[#c9a96e] mb-3"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
                <motion.h3
                  className="text-white tracking-[0.15em] uppercase mb-1"
                  style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  whileHover={{ x: 5, transition: { duration: 0.3 } }}
                >
                  {car.title}
                </motion.h3>
                <motion.p
                  className="text-white/50 tracking-[0.2em] uppercase"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                >
                  {car.desc}
                </motion.p>
              </div>

              {/* Hover Effect - Shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.p
            className="text-white/30 tracking-[0.2em] uppercase max-w-2xl mx-auto"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", lineHeight: 1.8 }}
            whileHover={{ opacity: 0.6, transition: { duration: 0.3 } }}
          >
            Every vehicle in our collection receives meticulous care and attention,
            ensuring peak performance and pristine condition
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
