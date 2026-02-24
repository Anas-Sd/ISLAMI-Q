import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    { title: "Browse by Surah", desc: "Navigate all 114 surahs with ease", icon: "📖" },
    { title: "Search by Aayah", desc: "Find any verse by its number instantly", icon: "🔍" },
    { title: "Navigate by Page", desc: "Jump to any of the 604 pages", icon: "📄" },
    { title: "Find by Ruku", desc: "Locate content by ruku divisions", icon: "📚" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-br from-[#0f2e23] to-[#061612] text-white px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-yellow-500 text-sm mb-3">✦ المميزات ✦</p>

        <h2 className="text-3xl sm:text-4xl font-serif font-semibold">
          Powerful <span className="text-yellow-500">Features</span>
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0e2a21] border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-500 transition"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-400 text-sm mt-3">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Features;