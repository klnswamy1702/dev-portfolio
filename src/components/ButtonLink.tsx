'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface ButtonLinkProps {
  url: string;
  text: string;
  padding?: string; // optional padding class
}

export default function ButtonLink({ url, text, padding = 'p-3' }: ButtonLinkProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`inline-block border-2 rounded-md text-white hover:bg-white hover:text-black transition duration-300 ease-in-out ${padding}`}
    >
      {text}
    </motion.a>
  );
}
