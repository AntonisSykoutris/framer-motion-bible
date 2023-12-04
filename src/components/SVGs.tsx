'use client';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function Presents({}: Props) {
  return (
    <section className='flex justify-center items-center place-content-center'>
      <motion.svg
        width='600'
        height='300'
        viewBox='100 0 350 300'
        initial='hidden'
        whileInView='visible'
      >
        <motion.circle
          strokeWidth='10px'
          strokeLinecap='round'
          fill='transparent'
          cx='100'
          cy='100'
          r='80'
          stroke='#ff0055'
          variants={draw}
          custom={1}
        />
        <motion.line
          x1='220'
          strokeWidth='10px'
          y1='30'
          x2='360'
          y2='170'
          stroke='#00cc88'
          strokeLinecap='round'
          fill='transparent'
          variants={draw}
          custom={2}
        />
        <motion.line
          x1='220'
          strokeWidth='10px'
          strokeLinecap='round'
          fill='transparent'
          y1='170'
          x2='360'
          y2='30'
          stroke='#00cc88'
          variants={draw}
          custom={2.5}
        />
        <motion.rect
          width='140'
          strokeWidth='10px'
          strokeLinecap='round'
          fill='transparent'
          height='140'
          x='410'
          y='30'
          rx='20'
          stroke='#0099ff'
          variants={draw}
          custom={3}
        />
      </motion.svg>
    </section>
  );
}
