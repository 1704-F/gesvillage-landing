// src/components/sections/About.tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import {  Users, Droplet, Target, CheckCircle, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2081E2] to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            Innovons pour l&apos;accès à l&apos;eau au Sénégal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            &ldquo;Digitaliser la gestion de l&apos;eau pour un Sénégal durable.&rdquo;
          </motion.p>
        </div>
      </div>

      {/* Vision et Mission */}
      <div className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Notre Vision</h2>
            </div>
            <p className="text-gray-600">
              Contribuer à un Sénégal où l&apos;accès à l&apos;eau potable est sécurisé, 
              transparent et accessible à toutes les populations grâce à une gestion 
              intelligente des ressources.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <Globe className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Notre Mission</h2>
            </div>
            <p className="text-gray-600">
              Accompagner les communes et villages du Sénégal dans la modernisation 
              de la gestion de l&apos;eau à travers des solutions numériques adaptées.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pourquoi GesVillage */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Pourquoi GesVillage au Sénégal ?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-8 h-8 text-primary" />,
                title: "Adapté aux réalités locales",
                description: "Une solution pensée pour les besoins des communes rurales et urbaines du Sénégal."
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Simplicité d'utilisation",
                description: "Une plateforme intuitive, accessible aux utilisateurs de tout niveau technique."
              },
              {
                icon: <Droplet className="w-8 h-8 text-primary" />,
                title: "Impact social",
                description: "Améliorer la transparence financière et optimiser l'accès à une ressource essentielle : l'eau potable."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#2081E2] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Rejoignez GesVillage
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Vous êtes une commune, un village, ou un partenaire au Sénégal ?
            Découvrez comment GesVillage peut transformer la gestion de vos ressources en eau.
          </p>
          <button className="bg-white text-[#2081E2] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;