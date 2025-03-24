'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Cursor Glow */}
      <motion.div
        className="fixed w-[500px] h-[500px] bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/20 rounded-full pointer-events-none mix-blend-screen blur-3xl"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200
        }}
      />
      
      {/* Cursor Dot */}
      <motion.div
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200
        }}
      />
    </>
  );
} 