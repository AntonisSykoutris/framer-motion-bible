'use client';
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from '@nextui-org/react';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Box1 from './Boxes/Box1';

type ShowcaseCardProps = {
  title: string;
  component: React.JSX.Element;
};

export default function ShowcaseCard({ title, component }: ShowcaseCardProps) {
  return (
    <Card className='overflow-hidden' shadow='lg'>
      <CardHeader className='flex gap-3'>
        <Image
          alt='nextui logo'
          height={40}
          radius='sm'
          src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
          width={40}
        />
        <div className='flex flex-col'>
          <p className='text-md'>{title}</p>
        </div>
      </CardHeader>
      <CardBody className='overflow-hidden'>{component}</CardBody>
      <Divider />
    </Card>
  );
}
