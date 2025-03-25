'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Background from '../components/Background';
import { name } from '../constants';

export default function Home() {
  const indexRef = useRef(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < name.length) {
        setText((prev) => prev + name[indexRef.current]);
        indexRef.current++;
      }
    }, 150); // Faster typing

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-0 bg-black w-screen h-screen overflow-hidden text-white">
      {/* Optional Background Effects */}
      <ul className="circles">
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i} className="bg-gray-800 rounded-full animate-pulse"></li>
        ))}
      </ul>

      {/* Hero Content */}
      <div className="h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm p-6 rounded-3xl bg-white/5"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold">
            Hi, I'm <span className="text-yellow-300">Swamy</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-xl mx-auto">
            I love to learn and build scalable and optimized backend systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
