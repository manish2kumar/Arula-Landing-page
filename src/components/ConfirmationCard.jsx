
import { motion } from "framer-motion";
import React from "react";

export default function ConfirmationCard({ message, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-xl p-8 max-w-sm w-full text-center shadow-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-green-600 mb-4">Success!</h3>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
