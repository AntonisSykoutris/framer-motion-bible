'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent, useState } from 'react';

type Props = {};

export default function Gradient({}: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // const [mouseX] = useState(0);
  // const [mouseY, setMouseY] = useState(0);
  console.log('render');

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    // setMouseX(clientX - left);
    // setMouseY(clientY - top);
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className='mt-2 w-full isolate overflow-hidden'>
      <div
        onMouseMove={handleMouseMove}
        className='w-full h-60 border rounded-lg bg-neutral-950 group relative mx-auto p-2'
      >
        <motion.div
          className='pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100'
          style={{
            background: useMotionTemplate`
                 radial-gradient(
                 250px circle at ${mouseX}px ${mouseY}px,
                  rgba(250, 203, 17, 1),
                   transparent 50%)`,
          }}
        />
      </div>
    </div>
  );
}
