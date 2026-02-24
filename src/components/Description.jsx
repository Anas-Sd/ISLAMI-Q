import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  React.useEffect(() => {
    const controls = animate(count, value, {
      duration: 8,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
};

const Description = () => {
  const stats = [
    { number: 6236, label: "Aayaat" },
    { number: 114, label: "Surahs" },
    { number: 558, label: "Ruk'u" },
    { number: 604, label: "Pages" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen bg-gradient-to-br from-[#0f2e23] via-[#0b241c] to-[#061612] text-white flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ y: 40 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl text-center"
      >
        <p className="text-yellow-500 text-medium mb-4 tracking-wide">
          ✦ الوصف ✦
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight">
          Your Gateway to the{" "}
          <span className="text-yellow-500">Holy Quran</span>
        </h1>

        <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed">
          This tool provides an effortless way to navigate the Quran.
          Simply enter a page number, aayah number, surah number, or ruku —
          and instantly access the content you're looking for.
        </p>

        <div className="mt-10 grid sm:grid-cols-4 grid-cols-2 gap-6 sm:gap-12">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-500">
                <Counter value={item.number} />
              </h2>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Description;