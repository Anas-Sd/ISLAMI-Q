import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const firstName =
    user?.user_metadata?.full_name || "User";

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };


  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#0f2e23] border-b border-yellow-500/20 px-4 sm:px-6 py-4 flex justify-between items-center"
    >
      <Link to={"/"}><motion.h1
        whileHover={{ scale: 1.05 }}
        className="text-2xl sm:text-3xl font-serif text-white cursor-pointer relative inline-block"
      >
        Islami
        <span className="relative text-yellow-500 sm:text-[0.8cm] text-[0.6cm] font-bold text-4xl">
          Q
          <span className="absolute -top-2 sm:left-2 left-1 text-xs">••</span>
        </span>
      </motion.h1>
      </Link>

      {!user ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogin}
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium"
        >
          Login
        </motion.button>
      ) : (
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col text-sm text-gray-300">
            <span className="text-yellow-400 text-center">
              {firstName}
            </span>
            <span className="text-xs text-gray-400 truncate">
              {user?.email}
            </span>
          </div>
        <div className="flex flex-col -mb-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="bg-red-500/80 hover:bg-red-500 text-white px-3 py-2 rounded-lg text-sm"
          >
            Sign Out
          </motion.button>
          {/* <div className="sm:hidden block sm:flex flex-col text-sm text-gray-300"> */}
            <span className="sm:hidden text-yellow-400 text-center">
              {firstName}
            </span>
            {/* <span className="text-xs text-gray-400 truncate">
              {user?.email}
            </span> */}
          {/* </div> */}
        </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;