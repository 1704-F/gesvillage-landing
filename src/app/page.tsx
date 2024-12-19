// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';
import Footer from '@/components/sections/Footer';


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}