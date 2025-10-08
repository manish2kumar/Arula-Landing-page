import { motion } from "framer-motion";
import logo from "../assets/splash.png";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
    >
      <div className="flex flex-col items-center justify-center">
        <img src={logo} alt="Arula for Autism Logo" className="w-32 h-32 md:w-48 md:h-48" />
        <h1 className="text-2xl font-semibold mt-4 text-gray-700 text-center">
          Arula for Autism
        </h1>
      </div>
    </motion.div>
  );
}
