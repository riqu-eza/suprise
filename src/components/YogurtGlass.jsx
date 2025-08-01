"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const YogurtGlass = ({ yogurt, toppings }) => {
  const glassRef = useRef(null);

  // Image paths for each yogurt type
  const yogurtImages = {
    "Mixed Berry Yogurt": "/mixed-berry-glass-removebg-preview.png",
    "Strawberry Yogurt": "/strawberry-glass-removebg-preview.png",
    "Passionfruit Yogurt": "/passionfruit-glass-removebg-preview.png",
  };

  // Sweet messages for each yogurt
  const sweetMessages = {
    "Mixed Berry Yogurt": "Berry sweet just like you!",
    "Strawberry Yogurt": "You're the strawberry to my yogurt!",
    "Passionfruit Yogurt": "My passion for you is fruity!",
  };

  return (
    <div className="relative w-72 h-80 mx-auto" ref={glassRef}>
      {/* Romantic Background Elements */}
      <AnimatePresence>
        {/* Floating Hearts */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            initial={{
              y: 50 + Math.random() * 50,
              x: Math.random() * 100,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: -50,
              x: i % 2 === 0 ? 100 : -100,
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.8],
            }}
            transition={{
              delay: i * 0.3,
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
            className="absolute text-pink-400 text-2xl"
            style={{
              bottom: 0,
              zIndex: 0,
            }}
          >
            ❤️
          </motion.div>
        ))}

        {/* Blowing Kisses */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`kiss-${i}`}
            initial={{
              y: 50 + Math.random() * 50,
              x: Math.random() * 100,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: -50,
              x: i % 2 === 0 ? 100 : -100,
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.8],
            }}
            transition={{
              delay: i * 1.5,
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute text-3xl"
            style={{
              left: `${20 + i * 15}%`,
              bottom: "20%",
            }}
          >
            😘
          </motion.div>
        ))}

        {/* Floating Love Letters */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`letter-${i}`}
            initial={{
              y: 150,
              x: `${10 + i * 30}%`,
              opacity: 0,
              rotate: -10 + i * 10,
            }}
            animate={{
              y: -50,
              opacity: [0, 0.8, 0],
              rotate: 10 + i * 5,
            }}
            transition={{
              delay: i * 2,
              duration: 12,
              repeat: Infinity,
              repeatDelay: 5,
            }}
            className="absolute text-xs font-loveletter text-gray-900 bg-white bg-opacity-70 px-2 py-1 rounded"
            style={{
              bottom: 0,
              zIndex: 1,
              fontFamily: "cursive",
            }}
          >
            {i === 0
              ? "Sweet like you"
              : i === 1
              ? "Yogurt love💗"
              : "Made with ❤️"}
          </motion.div>
        ))}

        {/* Couple Hearts Meeting */}
        <motion.div
          initial={{ x: -50, y: 30, opacity: 0 }}
          animate={{
            x: 0,
            y: 0,
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            delay: 1,
            duration: 4,
            repeat: Infinity,
            repeatDelay: 8,
          }}
          className="absolute text-2xl text-red-400"
          style={{ left: "20%", top: "30%" }}
        >
          💗
        </motion.div>
        <motion.div
          initial={{ x: 50, y: 30, opacity: 0 }}
          animate={{
            x: 0,
            y: 0,
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            delay: 1.2,
            duration: 4,
            repeat: Infinity,
            repeatDelay: 8,
          }}
          className="absolute text-2xl text-red-400"
          style={{ right: "20%", top: "30%" }}
        >
          💓
        </motion.div>
      </AnimatePresence>

      {/* Yogurt Glass Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="relative w-full h-full"
      >
        <Image
          src={yogurtImages[yogurt?.name] || "/images/default-glass.png"}
          alt={yogurt?.name || "Yogurt glass"}
          fill
          className="object-contain drop-shadow-lg"
          priority
        />
      </motion.div>

      {/* Sweet Message Bubble */}
      {yogurt?.name && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 rounded-full px-4 py-2 shadow-lg"
        >
          <motion.p
            className="text-pink-600 font-bold text-sm"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {sweetMessages[yogurt.name]}
          </motion.p>
          <motion.div
            className="absolute -bottom-2 left-1/2 w-4 h-4 bg-white bg-opacity-90 transform -translate-x-1/2 rotate-45"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
          />
        </motion.div>
      )}

      {/* Romantic Sparkles */}
      <AnimatePresence>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{
              x: Math.random() * 10,
              y: Math.random() * 20,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
              rotate: 360,
            }}
            transition={{
              delay: i * 0.4,
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 5,
            }}
            className="absolute left-20 text-yellow-300 text-xl"
            style={{
              zIndex: 2,
            }}
          >
            {i % 3 === 0 ? "💦" : "🍑"}
          </motion.div>
        ))}
      </AnimatePresence>
      <AnimatePresence>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 80,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
              rotate: 360,
            }}
            transition={{
              delay: i * 0.4,
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 5,
            }}
            className="absolute text-yellow-300 text-xl"
            style={{
              zIndex: 2,
            }}
          >
            {i % 3 === 0 ? "✨" : "🌟"}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default YogurtGlass;
