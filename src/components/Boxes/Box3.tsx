'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

type Props = {};

const boxVariants = {
  initial: { opacity: 0.5, x: -1000 },
  animate: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 1,
    },
  },
};

const listVariants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    x: 0,
    opacity: 1,
  },
};

export default function Box3({}: Props) {
  // const [isAnimated, setIsAnimated] = useState(false);
  return (
    <div className=''>
      <motion.div
        className='mt-2 w-32 h-32 bg-green-500 flex flex-col items-center gap-4 py-2 justify-center'
        variants={boxVariants}
        initial='initial'
        animate='animate'
      >
        {[1, 2, 3].map((_, index) => {
          return <motion.li key={index} className='w-10 h-10 bg-white  list-none' variants={listVariants}></motion.li>;
        })}
      </motion.div>
    </div>
  );
}
