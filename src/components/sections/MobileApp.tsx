// src/components/sections/MobileApp.tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Receipt, LineChart } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
    title: "Tableau de Bord Personnalisé",
    details: [
      "Vue d'ensemble de votre consommation",
      "Suivi des derniers relevés de compteur",
      "Visualisation claire des tendances d'utilisation",
      "Notifications importantes en temps réel"
    ],
    image: "/img/dashboard-mobile.jpg"
  },
  {
    icon: <Receipt className="w-8 h-8 text-primary" />,
    title: "Gestion Simplifiée des Factures",
    details: [
      "Historique complet de vos factures",
      "Filtrage par statut (payées/en attente)",
      "Détails de consommation par période",
      "Options de paiement accessibles"
    ],
    image: "/img/invoices-mobile.jpg"
  },
  {
    icon: <LineChart className="w-8 h-8 text-primary" />,
    title: "Suivi de la Consommation et Économies",
    details: [
      "Historique détaillé des consommations",
      "Comparaison entre différentes périodes",
      "Conseils pour optimiser votre consommation",
      "Estimation des économies réalisées"
    ],
    image: "/img/consumption-mobile.jpg"
  }
];

const MobileApp = () => {
  return (
    <section id="mobile-app" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Application Mobile
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Une application dédiée qui accompagne les usagers dans le suivi de leur consommation d&apos;eau 
            et la gestion de leurs paiements. Elle offre un accès simplifié aux informations essentielles 
            et permet de réduire les problèmes de communication entre les différents acteurs.
          </p>
        </motion.div>

        {/* Features */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Text Content */}
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  {feature.icon}
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <ul className="space-y-4">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-gray-800">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="md:w-1/2">
                <div className="bg-white p-4 rounded-3xl shadow-lg">
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileApp;