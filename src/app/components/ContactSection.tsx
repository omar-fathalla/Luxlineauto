import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Send, MapPin, Phone, Instagram, Facebook, Mail, Linkedin } from "lucide-react";
// Since lucide-react doesn't have a TikTok icon, we can create a custom SVG component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="-3 -3 30 30" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.004.16 2.099 1.026 4.098 2.502 5.56 1.409 1.399 3.327 2.193 5.3 2.21v4.114c-1.849-.009-3.642-.516-5.184-1.45a8.775 8.775 0 0 1-2.42-2.31c-.01 3.737.03 7.476-.02 11.21-.29 3.527-2.345 6.602-5.467 8.163-3.21 1.6-7.062 1.25-9.972-.916-2.583-1.92-3.95-5.07-3.626-8.253.25-2.536 1.62-4.832 3.702-6.208 2.203-1.455 4.965-1.785 7.447-1.116v4.363c-1.282-.39-2.693-.242-3.864.408-1.25.68-2.11 1.93-2.32 3.33-.23 1.54.34 3.12 1.52 4.12 1.32 1.12 3.25 1.35 4.8.61 1.38-.65 2.28-2.02 2.36-3.55.08-3.41.05-6.82.05-10.23V.02z"/>
  </svg>
);

interface FieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
  delay: number;
  inView: boolean;
}

function Field({ label, type = "text", value, onChange, textarea, delay, inView }: FieldProps) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <motion.div
      className="relative mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.01 }}
    >
      <motion.label
        className={`absolute left-0 transition-all duration-500 pointer-events-none ${
          active
            ? "text-[#c9a96e] -top-5"
            : "text-gray-400 dark:text-white/30 top-2"
        }`}
        style={{ fontFamily: "Montserrat, sans-serif", fontSize: active ? "0.65rem" : "0.85rem", letterSpacing: "0.15em" }}
        animate={{
          y: active ? -5 : 0,
          scale: active ? 0.9 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {label}
      </motion.label>
      {textarea ? (
        <motion.textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={3}
          className="w-full bg-transparent text-gray-900 dark:text-white border-none outline-none resize-none pt-2 pb-1 transition-colors duration-500"
          style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
          whileFocus={{ scale: 1.01 }}
        />
      ) : (
        <motion.input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent text-gray-900 dark:text-white border-none outline-none pt-2 pb-1 transition-colors duration-500"
          style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
          whileFocus={{ scale: 1.01 }}
        />
      )}
      {/* Bottom line */}
      <div className="relative h-[1px] bg-gray-200 dark:bg-white/10 transition-colors duration-500">
        <motion.div
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 bg-[#c9a96e]"
          animate={{
            width: focused ? "100%" : "0%",
            boxShadow: focused ? "0 0 10px rgba(201,169,110,0.5)" : "none",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  const primaryInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Abu Dhabi",
      link: "https://maps.app.goo.gl/UTAjPBuS52Xbg7ps6"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0502120421",
      link: "tel:+971502120421"
    },
    {
      icon: Mail,
      label: "Info Email",
      value: "info@luxe-lineauto.com",
      link: "mailto:info@luxe-lineauto.com"
    },
    {
      icon: Mail,
      label: "Service Email",
      value: "service@luxe-lineauto.com",
      link: "mailto:service@luxe-lineauto.com"
    }
  ];

  const socialIcons = [
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/luxe.line.auto"
    },
    {
      icon: TikTokIcon,
      label: "TikTok",
      link: "https://www.tiktok.com/@luxelineauto8?_r=1&_t=ZS-96SnEX9BDJh"
    },
    {
      icon: Facebook,
      label: "Facebook",
      link: "https://www.facebook.com/LUXELINEAUTO"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/company/luxeline-auto/"
    }
  ];

  return (
    <section id="contact" className="bg-gray-50 dark:bg-[#0a0a0a] relative pb-12 transition-colors duration-500">
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

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Info */}
          <div>
            <motion.p
              className="text-[#c9a96e] tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem" }}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Get in Touch
            </motion.p>

            <motion.h2
              className="text-gray-900 dark:text-white mb-10 tracking-[0.1em] transition-colors duration-500"
              style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
              initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
              animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact Us
            </motion.h2>

            <div className="space-y-8 mt-12">
              {primaryInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-6 group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-[#c9a96e]/20 rounded-full group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e]/5 transition-all duration-500">
                    <info.icon className="w-5 h-5 text-[#c9a96e]" />
                  </div>
                  <div>
                    <p className="text-[#c9a96e]/50 uppercase tracking-widest mb-1" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.6rem" }}>
                      {info.label}
                    </p>
                    <p className="text-gray-900 dark:text-white text-lg transition-colors duration-500" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-4">
                {socialIcons.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-[#c9a96e]/20 rounded-full group hover:border-[#c9a96e] hover:bg-[#c9a96e]/5 transition-all duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    title={item.label}
                  >
                    <item.icon className="w-5 h-5 text-[#c9a96e]" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative">
            <motion.div
              className="absolute -inset-4 bg-[#c9a96e]/5 blur-2xl rounded-full"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 2 }}
            />
            <form onSubmit={handleSubmit} className="relative">
              <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} delay={0.3} inView={inView} />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} delay={0.4} inView={inView} />
              <Field label="Message" value={form.message} onChange={(v) => setForm({ ...form, message: v })} textarea delay={0.5} inView={inView} />

              <motion.div
                className="flex justify-start mt-8 sm:mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.button
                  type="submit"
                  className="relative overflow-hidden border border-[#c9a96e]/40 text-[#c9a96e] px-8 sm:px-12 py-3 sm:py-3.5 tracking-[0.2em] sm:tracking-[0.3em] uppercase bg-transparent cursor-pointer group flex items-center gap-3"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem" }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(201,169,110,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c9a96e]/15 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.span
                    className="relative z-10"
                    animate={submitted ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {submitted ? "Sent Successfully" : "Send Message"}
                  </motion.span>
                  {!submitted && (
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Send className="relative z-10 w-3.5 h-3.5" />
                    </motion.div>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="border-t border-gray-200 dark:border-white/5 pt-6 sm:pt-8 pb-4 sm:pb-6 text-center px-4 transition-colors duration-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-2"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <motion.p
            className="text-gray-400 dark:text-white/20 tracking-[0.2em] uppercase"
            style={{ fontSize: "0.6rem" }}
          >
            &copy; 2026 Luxe-Line Auto. All rights reserved.
          </motion.p>
          <motion.div
            className="flex items-center gap-1.5 text-gray-400/60 dark:text-white/10"
            style={{ fontSize: "0.55rem" }}
            whileHover={{ opacity: 1 }}
          >
            <span className="tracking-widest uppercase">Designed & Developed by</span>
            <a 
              href="https://www.sw-point.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#c9a96e]/60 hover:text-[#c9a96e] transition-colors duration-300 font-medium tracking-widest uppercase"
            >
              SW-Point
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}