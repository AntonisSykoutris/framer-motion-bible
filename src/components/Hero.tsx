'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

type Props = {};

export default function Hero({}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 1.5,
      },
    },
  };

  const parallaxVariants = {
    initial: { opacity: 0, y: 1000 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial='initial'
      animate='animate'
      className='w-full h-screen overflow-hidden relative grid place-items-center'
    >
      <motion.h1
        variants={parallaxVariants}
        style={{ y: textY }}
        className='font-bold text-[#09394a] text-7xl md:text-9xl relative z-50'
      >
        PARALLAX
      </motion.h1>

      <div
        className='absolute inset-0  -bottom-5 z-0 bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url(/background.png)`,
        }}
      />

      <motion.div
        variants={parallaxVariants}
        className='absolute inset-0   -bottom-5 z-30 bg-contain xl:bg-cover bg-bottom bg-no-repeat'
        style={{
          backgroundImage: `url(/deers.png)`,
        }}
      />

      <motion.div
        variants={parallaxVariants}
        className='absolute inset-0 z-20 bg-contain xl:bg-cover bg-bottom bg-no-repeat'
        style={{
          backgroundImage: `url(/houses.png)`,
          y: backgroundY,
        }}
      />
    </motion.div>
  );
}
