'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

type Props = {};

const boxVariants = {
  initial: { opacity: 0.5 },
  animate: {
    x: 250,
    opacity: 1,
    rotate: 360,
    transition: {
      type: 'spring',
      stiffness: 60,
    },
  },
};

export default function Box2({}: Props) {
  // const [isAnimated, setIsAnimated] = useState(false);

  return (
    <div className=''>
      <motion.div
        className='mt-2 w-32 h-32 bg-green-500 flex flex-col align-middle justify-center'
        variants={boxVariants}
        initial='initial'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        drag
        dragConstraints={{ left: -20, right: 20, top: 5, bottom: 5 }}
      ></motion.div>
    </div>
  );
}
