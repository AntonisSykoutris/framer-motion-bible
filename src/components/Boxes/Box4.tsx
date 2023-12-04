'use client';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const boxVariants = {
  initial: {},
  animate: {
    scale: [1, 1.1, 1.1, 1, 1],
    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    rotate: [0, 0, 270, 270, 0],
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export default function Box4({}: Props) {
  return (
    <div className=''>
      <motion.div
        className='mt-2 w-32 h-32 bg-green-500 flex flex-col align-middle justify-center'
        variants={boxVariants}
        initial='initial'
        whileInView='animate'
      ></motion.div>
    </div>
  );
}
