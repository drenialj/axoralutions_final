'use client';

import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
    >
      <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-6 h-10 border-2 border-gray-400 rounded-full p-1"
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-1.5 h-1.5 bg-gray-400 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
} 