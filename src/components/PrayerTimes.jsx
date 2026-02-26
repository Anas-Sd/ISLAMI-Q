import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PrayerTimes = () => {
  const [timings, setTimings] = useState(null);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch(
          "https://api.aladhan.com/v1/timingsByCity?city=Vijayawada&country=India&method=2"
        );
        const data = await response.json();
        setTimings(data.data.timings);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    };

    fetchPrayerTimes();
  }, []);

  if (!timings) {
    return (
      <div className="py-20 text-center text-yellow-500 bg-[#061612]">
        Loading Prayer Times...
      </div>
    );
  }

  const prayers = [
    { name: "Suhoor Ends", time: timings.Imsak, icon: "🥗" },
    { name: "Iftar", time: timings.Maghrib, icon: "🍽️" },
    { name: "Fajr", time: timings.Fajr, icon: "🌙" },
    { name: "Dhuhr", time: timings.Dhuhr, icon: "☀️" },
    { name: "Asr", time: timings.Asr, icon: "🌤️" },
    { name: "Maghrib", time: timings.Maghrib, icon: "🌄" },
    { name: "Isha", time: timings.Isha, icon: "🌌" },
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
        <p className="text-yellow-500 text-sm mb-3">✦ أوقات الصلاة ✦</p>

        <h2 className="text-3xl sm:text-4xl font-serif font-semibold">
          Daily <span className="text-yellow-500">Prayer Times</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {prayers.map((prayer, index) => (
            <motion.div
              key={prayer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-xl p-6 transition border bg-[#0e2a21] border-yellow-500/20 hover:border-yellow-500"
            >
              <div className="text-3xl mb-3">{prayer.icon}</div>
              <h3 className="text-lg font-medium">{prayer.name}</h3>
              <p className="font-semibold mt-2">{prayer.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <p className="-mb-16 mt-16 text-sm sm:text-base text-center text-yellow-400">[Accurate Salah Timings with Live updates According to Al - Adhan]</p>
    </motion.div>
  );
};

export default PrayerTimes;