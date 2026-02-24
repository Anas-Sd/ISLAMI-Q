import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { motion } from "framer-motion";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSessionUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
    };

    getSessionUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const displayName =
    user?.user_metadata?.full_name ||
    user?.email;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-[#0f2e23] to-[#061612] text-white flex items-center px-6"
    >
      <motion.div
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16"
      >
        <div className="text-center md:text-left max-w-xl">
          {displayName && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-yellow-400 text-xl mb-6 text-base sm:text-4xl"
            >
              Assalamu Alaikum, {displayName}
            </motion.p>
          )}

          <p className="text-yellow-500 text-sm mb-4">
            بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight">
            <span className="block">Quran</span>
            <span className="text-yellow-500 block">Lookup</span>
          </h1>

          <p className="mt-6 text-gray-400 text-base sm:text-lg">
            Find any Surah, Aayah, Rukuh or Page instantly — just enter a number and explore the Holy Quran.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-yellow-500 text-black rounded-xl font-medium"
          >
            <a href="#api">Start Exploring</a>
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Header;