// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import Footer from '@/components/sections/Footer';
import MobileApp from '@/components/sections/MobileApp';


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <MobileApp />
      <Footer />
    </main>
  );
}