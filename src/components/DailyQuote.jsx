import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import verses from "../assets/VerseOfDay";
import hadiths from "../assets/HadithOfDay";

const DailyQuote = () => {
  const [dailyVerse, setDailyVerse] = useState(null);
  const [dailyHadith, setDailyHadith] = useState(null);

  useEffect(() => {
    const today = new Date();
    const dayNumber = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
    const verseIndex = dayNumber % verses.length;
    const hadithIndex = dayNumber % hadiths.length;

    setDailyVerse(verses[verseIndex]);
    setDailyHadith(hadiths[hadithIndex]);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-br from-[#0f2e23] via-[#0b241c] to-[#061612] text-white px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-yellow-500 text-sm mb-3">✦ حكمة اليوم ✦</p>

        <h2 className="text-3xl sm:text-4xl font-serif font-semibold">
          Verse of <span className="text-yellow-500">Reflection</span>
        </h2>

        {dailyVerse && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 border border-yellow-500/30 rounded-2xl p-8 bg-[#0e2a21]"
          >
            <p className="text-2xl sm:text-3xl leading-loose mb-6">
              {dailyVerse.arabic}
            </p>

            <p className="text-gray-300 italic text-base sm:text-lg">
              {dailyVerse.english}
            </p>

            <p className="text-sm text-yellow-500 mt-2">
              ⸺ {dailyVerse.reference} ⸺
            </p>
          </motion.div>
        )}

        {dailyHadith && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 border border-yellow-500/20 rounded-2xl p-8 bg-[#0e2a21]"
          >
            <p className="text-yellow-500 font-medium mb-4">
              Hadeeth of the Day
            </p>

            <p className="text-2xl sm:text-3xl leading-loose mb-6">
              {dailyHadith.arabic}
            </p>

            <p className="text-gray-300 italic text-base sm:text-lg">
              {dailyHadith.english}
            </p>

            <p className="text-sm text-yellow-500 mt-2">
              ⸺ Sahih Al-Bukhari ⸺
            </p>
          </motion.div>
        )}

        <p className="mt-16 -mb-16 text-sm sm:text-base text-yellow-500 text-center">
          [Come back tomorrow for new verses and hadeeth]
        </p>
      </div>
    </motion.div>
  );
};

export default DailyQuote;