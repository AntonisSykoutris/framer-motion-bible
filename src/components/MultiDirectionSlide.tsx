'use client';
import { motion } from 'framer-motion';

export function MultiDirectionSlide() {
  const multiDirectionSlideVariants = {
    initial: { opacity: 0, x: '-25vw' },
    animate: { opacity: 1, x: 0 },
    initialRight: { opacity: 0, x: '25vw' },
  };
  return (
    <div className='overflow-hidden'>
      <motion.h1
        variants={multiDirectionSlideVariants}
        initial='initial'
        whileInView='animate'
        transition={{ duration: 1 }}
        className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'
      >
        Multi Direction
      </motion.h1>

      <motion.h1
        variants={multiDirectionSlideVariants}
        initial='initialRight'
        whileInView='animate'
        transition={{ duration: 1 }}
        className='text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'
      >
        Slide
      </motion.h1>
    </div>
  );
}
