import { yogurtTypes } from '../utils/yogurtData';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid'; // Install @heroicons/react

export default function YogurtSelection({ onSelect }) {
  return (
    <div className="text-center px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold text-rose-600 mb-8"
      >
        Choose Your Love Potion 💖
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {yogurtTypes.map((yogurt, index) => (
          <motion.div
            key={yogurt.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.15 }}
            whileHover={{ 
              y: -8,
              scale: 1.05
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(yogurt)}
            className="cursor-pointer group relative"
          >
            {/* Floating hearts on hover */}
            <motion.div 
              initial={{ scale: 0 }}
              whileHover={{
                scale: 1,
                transition: { staggerChildren: 0.1 }
              }}
              className="absolute -top-4 -right-4"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileHover={{
                    scale: [0, 1.2, 1],
                    y: [0, -15, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 1.5 }}
                  className="absolute"
                  style={{
                    left: `${i * 10}px`,
                    color: yogurt.color
                  }}
                >
                  <HeartIcon className="w-5 h-5" />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Yogurt selection card */}
            <div className="bg-white bg-opacity-80 p-6 rounded-2xl shadow-lg border-2 border-pink-100 group-hover:border-rose-200 transition-all">
              <div className="relative">
                <div 
                  className="w-28 h-28 mx-auto rounded-full shadow-inner"
                  style={{ 
                    backgroundColor: yogurt.color,
                    boxShadow: `inset 0 4px 12px ${shadeColor(yogurt.color, -20)}`
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute top-2 left-1/4 w-1/3 h-1/3 bg-white bg-opacity-40 rounded-full blur-sm" />
                </div>
                
                {/* Romantic decoration */}
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-3 -right-5 text-rose-400"
                >
                  <HeartIcon className="w-6 h-6" />
                </motion.div>
              </div>
              
              <h3 className="mt-4 font-semibold text-lg text-rose-800 group-hover:text-rose-600 transition-colors">
                {yogurt.name}
              </h3>
              
              <motion.p 
                whileHover={{ scale: 1.05 }}
                className="mt-2 text-sm text-rose-500"
              >
                {yogurt.probiotics.slice(0, 2).join(" • ")}
              </motion.p>
              
              {/* <p className="mt-3 text-xs text-pink-400 italic">
                {getRomanticDescription(yogurt.name)}
              </p> */}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-10 text-pink-500 italic"
      >
        "Each flavor holds a special memory of us..."
      </motion.p>
    </div>
  );
}

// Helper functions
function shadeColor(color, percent) {
  // Implement color shading logic
  return color; 
}

// function getRomanticDescription(flavor) {
//   const descriptions = {
//     "Mixed Berry Yogurt": "Sweet like our first kiss",
//     "Mango Yogurt": "Tropical like our beach dreams",
//     "Passionfruit Yogurt": "Exciting like our adventures"
//   };
//   return descriptions[flavor] || "Made with love";
// }