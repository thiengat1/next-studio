import React from 'react';
import { motion } from 'framer-motion';

interface IAnimationProps {
  children: any;
}

function Animation({ children }: IAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default Animation;