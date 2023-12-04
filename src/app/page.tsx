import Box1 from '@/components/Boxes/Box1';
import Box2 from '@/components/Boxes/Box2';
import Box3 from '@/components/Boxes/Box3';
import Box4 from '@/components/Boxes/Box4';
import Box5 from '@/components/Boxes/Box5';
import Features from '@/components/Features';
import Gradient from '@/components/Gradient';

import Hero from '@/components/Hero';
import Lorem from '@/components/Lorem';
import ShowcaseCard from '@/components/ShowcaseCard';

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <Hero />
      <Lorem />
      <Features />
    </main>
  );
}
