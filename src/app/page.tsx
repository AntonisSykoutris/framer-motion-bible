import Features from '@/components/Features';

import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <Hero />
      <Features />
    </main>
  );
}
