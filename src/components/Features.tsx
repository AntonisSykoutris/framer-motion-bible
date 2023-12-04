'use client';
import React, { useRef } from 'react';
import Box1 from './Boxes/Box1';
import Box2 from './Boxes/Box2';
import Box3 from './Boxes/Box3';
import Box4 from './Boxes/Box4';
import Box5 from './Boxes/Box5';
import Gradient from './Gradient';
import ShowcaseCard from './ShowcaseCard';
import SVGs from './SVGs';
import Slider from './Slider';
import { motion } from 'framer-motion';
import RotateText from './RotateText';
import { MultiDirectionSlide } from './MultiDirectionSlide';

type Props = {};

export default function Features({}: Props) {
  const targetRef = useRef<HTMLDivElement | null>(null);

  return (
    <motion.section
      ref={targetRef}
      className='grid place-content-center mx-auto grid-cols-1 md:grid-cols-2 gap-5'
    >
      <ShowcaseCard title='onClick Complex Animation' component={<Box1 />} />
      <ShowcaseCard title='Drag and Drop' component={<Box2 />} />
      <ShowcaseCard title='Stagger Animation' component={<Box3 />} />
      <ShowcaseCard title='Keyframe Animation' component={<Box4 />} />
      <ShowcaseCard title='Combining Animations' component={<Box5 />} />
      <ShowcaseCard title='Gradient Mouse Animation' component={<Gradient />} />
      <ShowcaseCard title='SVG Animation' component={<SVGs />} />
      <ShowcaseCard
        title='Horizontal Scroll Animation'
        component={<Slider />}
      />
      <ShowcaseCard title='Rotate Text Animation' component={<RotateText />} />
      <ShowcaseCard
        title='Multi Direction Slide Text Animation'
        component={<MultiDirectionSlide />}
      />
    </motion.section>
  );
}
