//components/sections/Hero.tsx
"use client"
import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Droplet, Receipt, LineChart, Smartphone } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Hero = () => { 

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: "/img/tableau.jpg", alt: "Dashboard Preview" },
    { src: "/img/tableau2.jpg", alt: "Gestion des relevés" },
    { src: "/img/tableau3.jpg", alt: "Suivi consommation" },
    { src: "/img/tableau4.jpg", alt: "Application mobile" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change d'image toutes les 5 secondes
  
    return () => clearInterval(timer);
  }, []);



  return (
    <div className="pt-16 bg-gradient-to-b from-blue-50 to-white">
    <div className="container mx-auto px-4">
       <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-0rem)]">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 m-0">
            Modernisons la gestion de l&apos;eau dans les zones rurales
          </h1>
          <p className="text-xl text-gray-800 mb-12 max-w-2xl">
            Dans un contexte de réforme de l&apos;hydraulique rurale, GesVillage propose une solution efficace pour digitaliser et optimiser la gestion des forages d&apos;eau. Notre plateforme facilite la transparence financière, réduit les coûts d&apos;exploitation grâce à l&apos;énergie solaire, et offre un suivi précis des consommations pour une gestion durable des ressources en eau.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">

            <a href="https://wa.me/+33775802267" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Essayer la démo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>

            <a href="https://expo.dev/artifacts/eas/aEamZNqaHapL5v9tuCNZrk.apk" download>
   <Button 
     size="lg" 
     variant="outline"
     className="border-primary text-primary hover:bg-primary/10"
   >
     Télécharger l&apos;app
     <Smartphone className="ml-2 h-5 w-5" />
   </Button>
 </a>

              
            </div>

             {/* Features Preview */}
             <div className="mt-12 grid grid-cols-2 gap-6">
              <motion.div
                className="flex items-center gap-3 text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="p-2 bg-blue-100 rounded-lg">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <span>Relevés numériques précis</span>
              </motion.div>
              
              <motion.div
                className="flex items-center gap-3 text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Receipt className="h-6 w-6 text-primary" />
                </div>
                <span>Facturation simplifiée</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Droplet className="h-6 w-6 text-primary" />
                </div>
                <span>Suivi de consommation</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <span>Application mobile accessible</span>
              </motion.div>
            </div>
          </motion.div>

            

          {/* Right Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
         
<div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
  <div className="relative aspect-[3/2] w-full">
    {images.map((image, index) => (
      <motion.div
        key={index}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: index === currentImage ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </motion.div>
    ))}
  </div>
  {/* Indicateurs de slide */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {images.map((_, index) => (
      <button
        key={index}
        className={`w-2 h-2 rounded-full transition-all ${
          index === currentImage ? 'bg-primary w-4' : 'bg-gray-300'
        }`}
        onClick={() => setCurrentImage(index)}
      />
    ))}
  </div>
</div>
            

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;