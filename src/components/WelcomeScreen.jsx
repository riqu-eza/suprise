import { motion } from "framer-motion";

export default function WelcomeScreen({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center"
    >
      <h1 className="text-4xl font-bold text-rose-600 mb-6">Surprise! 🎁</h1>
      <p className="text-lg text-violet-500 mb-6">
        "Because every day with you is sweeter than yogurt ❤️"
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg shadow-lg"
      >
        Redeem Your Yogurt Date{" "}
      </motion.button>
    </motion.div>
  );
}
