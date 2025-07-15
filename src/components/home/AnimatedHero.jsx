import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHero = () => {
  const circles = [
    { size: '150px', top: '10%', left: '15%', opacity: 0.1, color: 'bg-blue-400', duration: 15 },
    { size: '250px', top: '60%', left: '5%', opacity: 0.15, color: 'bg-emerald-400', duration: 20 },
    { size: '80px', top: '20%', left: '80%', opacity: 0.08, color: 'bg-purple-400', duration: 12 },
    { size: '200px', top: '75%', left: '70%', opacity: 0.12, color: 'bg-blue-500', duration: 18 },
    { size: '120px', top: '40%', left: '50%', opacity: 0.1, color: 'bg-emerald-300', duration: 16 },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-emerald-100/30" />
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full filter blur-3xl ${circle.color}`}
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            opacity: circle.opacity,
          }}
          animate={{
            x: [0, 20, -20, 20, 0],
            y: [0, -30, 30, -30, 0],
            scale: [1, 1.1, 1, 0.9, 1],
            rotate: [0, 10, -10, 10, 0],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedHero;
