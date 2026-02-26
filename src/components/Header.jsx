import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { motion } from "framer-motion";
import bg from "../assets/bg.png"

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let logoutTimer;

    const startLogoutTimer = () => {
      if (logoutTimer) clearTimeout(logoutTimer);

      logoutTimer = setTimeout(async () => {
        await supabase.auth.signOut();
        setUser(null);
        alert("Session expired. Please login again.");
      }, 45 * 60 * 1000);
    };

    const getSessionUser = async () => {
      const { data } = await supabase.auth.getSession();
      const currentUser = data.session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        startLogoutTimer();
      }
    };

    getSessionUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const currentUser = session?.user ?? null;
        setUser(currentUser);

        if (currentUser) {
          startLogoutTimer();
        } else {
          if (logoutTimer) clearTimeout(logoutTimer);
        }
      }
    );

    return () => {
      if (logoutTimer) clearTimeout(logoutTimer);
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
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 3, ease: "easeInOut" }}
  className="sm:hidden block items-center justify-center -mt-20"
>
  <h1 className="text-7xl lg:text-9xl font-bold flex items-end bgtext">
    <span>ISLAMI</span>

    <span className="relative inline-block ml-1">
      <span className="bgtext">Q</span>

      <span className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
        <span className="w-3 h-3 bg-white rounded-full"></span>
        <span className="w-3 h-3 bg-white rounded-full"></span>
      </span>
    </span>
  </h1>
</motion.div>
        <div className="text-center md:text-left max-w-xl">
          {displayName && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-yellow-400 mb-6 font-bold text-base sm:text-4xl"
            >
              Assalamu Alaikum, <span className="text-white font-bold">{displayName}</span>
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
          <a href="#api">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-yellow-500 text-black rounded-xl font-medium"
            >
              Start Exploring
            </motion.button>
          </a>

        </div>
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 5, ease: "easeInOut" }}
  className="hidden md:flex items-center justify-center -mt-20"
>
  <h1 className="text-7xl lg:text-9xl font-bold flex items-end bgtext bg-clip-text text-transparent"
  // style={{
  //   backgroundImage: `url(${bg})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // }}
  >
    <span>ISLAMI</span>

    <span className="relative inline-block ml-1">
      <span className="bgtext">Q</span>

      <span className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
        <span className="w-3 h-3 bg-white rounded-full"></span>
        <span className="w-3 h-3 bg-white rounded-full"></span>
      </span>
    </span>
  </h1>
</motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Header;