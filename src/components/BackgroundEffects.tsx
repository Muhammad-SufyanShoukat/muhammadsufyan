'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
}

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const BackgroundEffects = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate stars
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          duration: Math.random() * 3 + 2,
        });
      }
      setStars(newStars);
    };

    // Generate bubbles
    const generateBubbles = () => {
      const newBubbles: Bubble[] = [];
      for (let i = 0; i < 20; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 80 + 30,
          duration: Math.random() * 15 + 20,
          delay: Math.random() * 8,
        });
      }
      setBubbles(newBubbles);
    };

    generateStars();
    generateBubbles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      
      {/* Mouse Follow Effect */}
      <div 
        className="absolute inset-0 transition-all duration-500 ease-out opacity-30"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, transparent 100%)`,
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-blue-300"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.08), transparent 70%)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            backdropFilter: 'blur(1px)',
          }}
          animate={{
            y: [0, -50, -20, 0],
            x: [0, 25, -20, 15, 0],
            scale: [1, 1.15, 0.95, 1.05, 1],
            opacity: [0.05, 0.25, 0.15, 0.3, 0.05],
            rotate: [0, 5, -3, 2, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: bubble.delay,
          }}
        />
      ))}

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(147, 51, 234, 0.08) 50%, transparent 100%)',
        }}
        animate={{
          scale: [1, 1.3, 0.9, 1.1, 1],
          opacity: [0.2, 0.4, 0.25, 0.35, 0.2],
          x: [0, 20, -15, 10, 0],
          y: [0, -10, 15, -5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, rgba(236, 72, 153, 0.08) 50%, transparent 100%)',
        }}
        animate={{
          scale: [1.1, 0.8, 1.2, 0.95, 1.1],
          opacity: [0.15, 0.35, 0.2, 0.3, 0.15],
          x: [0, -25, 15, -10, 0],
          y: [0, 20, -15, 5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-1/3 right-1/5 w-4 h-4 rotate-45"
        style={{
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.15))',
          borderRadius: '2px',
        }}
        animate={{
          rotate: [45, 135, 225, 315, 45],
          scale: [1, 1.4, 0.8, 1.2, 1],
          opacity: [0.3, 0.6, 0.2, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-6 h-6 rounded-full"
        style={{
          border: '2px solid rgba(147, 51, 234, 0.2)',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1), transparent 70%)',
        }}
        animate={{
          scale: [1, 1.5, 0.7, 1.2, 1],
          opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </div>
  );
};

export default BackgroundEffects;