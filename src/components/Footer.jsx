import React from "react";
import { motion } from "framer-motion";
import ScrollToTop from "./ScrollToTop";
const Footer = () => {
const handleScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gradient-to-br from-[#0f2e23] to-[#061612] text-white px-6 border-t border-yellow-500/10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-yellow-500 text-sm mb-3">
          السلام عليكم ورحمة الله وبركاته
        </p>
        <div  onClick={handleScrollTop} className="cursor-pointer">
        <h1 className="text-2xl sm:text-3xl font-serif text-white relative inline-block">
          Islami
          <span className="relative text-yellow-500 sm:text-[0.8cm] text-[0.6cm] font-bold text-4xl">
            Q
            <span className="absolute -top-2 sm:left-2 left-1 text-xs">
              ••
            </span>
          </span>
        </h1>
        </div>  

        <p className="text-gray-400 mt-3 text-sm">
          A tool to explore the Holy Quran — by aayah, surah, ruku or page.
        </p>

        <div className="flex justify-center gap-6 mt-6 text-gray-400 text-sm">
          <a href="#">Home</a>
          <a href="#description">About</a>
          <a href="#prayer">Prayer</a>
          <a href="#features">Features</a>
          <a href="#quote">Hadeeth</a>
        </div>

        <div className="mt-8 border-t border-yellow-500/10 pt-6 text-gray-500 text-sm">
          Made with ❤️ for the Ummah • 2026
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;