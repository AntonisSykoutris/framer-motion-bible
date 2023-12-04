'use client';
import React from 'react';

type Props = {};

export default function Footer({}: Props) {
  return (
    <section className=' flex pt-2 justify-center flex-col items-center'>
      <small className='text-white mb-2 block text-xs'>
        &copy; {new Date().getFullYear()} Antonis Sykoutris. All rights
        reserved.
      </small>
      <p className='text-xs text-white'>
        <span className=' font-semibold'>About this website:</span> built with
        React & Next.js TypeScript, Tailwind CSS and Framer Motion.
      </p>
    </section>
  );
}
