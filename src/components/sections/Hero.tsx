"use client"
import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Droplet, Receipt, LineChart, Smartphone } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Gérez votre eau intelligemment
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Optimisez la gestion de vos forages d&apos;eau grâce à notre plateforme innovante.
              Suivez, analysez et facturez éfficassement les consommateurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Essayer la démo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
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
    <span>Gestion pour les Relevés</span>
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
    <span>Suivi consommation</span>
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
    <span>Application mobile</span>
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
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
  <Image
    src="/img/dashboard.jpg" // L'image doit être dans le dossier public
    alt="Dashboard Preview"
    width={1200}
    height={800}
    priority
    className="w-full h-auto"
  />
</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;