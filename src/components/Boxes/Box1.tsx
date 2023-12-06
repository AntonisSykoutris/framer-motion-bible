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
      type: 'spring', // tween, spring, inertia, where default is tween
      stiffness: 60,
    },
  },
};

export default function Box1({}: Props) {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <div className=''>
      <motion.div
        className='mt-2 w-32 h-32 bg-green-500 flex flex-col align-middle justify-center'
        variants={isAnimated ? boxVariants : undefined}
        initial={boxVariants.initial}
        animate='animate'
        onClick={() => setIsAnimated(!isAnimated)}
      ></motion.div>
    </div>
  );
}
