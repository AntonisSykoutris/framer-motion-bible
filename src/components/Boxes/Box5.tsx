'use client';
import { Button } from '@nextui-org/react';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';

type Props = {};

const boxVariants = {
  initial: { opacity: 0.5 },
  animate: {
    x: 250,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 5,
    },
  },
};

export default function Box5({}: Props) {
  const control = useAnimation();

  return (
    <div className='mt-2'>
      <div className='pb-5 flex gap-x-2'>
        <Button
          color='primary'
          onClick={() => {
            control.start('animate');
          }}
        >
          Move Right
        </Button>
        <Button
          color='primary'
          onClick={() => {
            control.start({
              ...boxVariants,
              x: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                stiffness: 20,
              },
            });
          }}
        >
          Move Left
        </Button>
        <Button
          color='primary'
          onClick={() => {
            control.start({
              borderRadius: '50%',
              transition: { duration: 1 },
            });
          }}
        >
          Circle
        </Button>
        <Button
          color='primary'
          onClick={() => {
            control.start({
              borderRadius: '0%',
              transition: { duration: 1 },
            });
          }}
        >
          Square
        </Button>
        <Button
          color='primary'
          onClick={() => {
            control.stop();
          }}
        >
          Stop
        </Button>
      </div>

      <motion.div
        className='w-32 h-32 bg-green-500 flex flex-col align-middle justify-center'
        variants={boxVariants}
        initial='initial'
        animate={control}
      ></motion.div>
    </div>
  );
}
