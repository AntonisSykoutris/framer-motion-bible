'use client';
import { Image } from '@nextui-org/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

type Props = {};

export default function Slider({}: Props) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['center end', 'end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  return (
    <section ref={targetRef} className='h-[30dvh] text-white w-full'>
      <div className='absolute  inset-0  flex items-center'>
        <motion.div style={{ x }} className='flex'>
          <Image width={200} alt='Santa Claus' src='/santa.svg' />
        </motion.div>
      </div>
    </section>
  );
}
