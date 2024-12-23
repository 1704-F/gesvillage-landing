// src/components/sections/MobileApp.tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Receipt, LineChart } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
    title: "Tableau de Bord Intuitif",
    details: [
      "Vue d'ensemble de tous vos compteurs",
      "Suivi des dernières consommations",
      "Accès rapide aux informations essentielles"
    ],
    image: "/img/dashboard-mobile.jpg" // À remplacer par votre image
  },
  {
    icon: <Receipt className="w-8 h-8 text-primary" />,
    title: "Gestion des Factures",
    details: [
      "Liste complète de vos factures",
      "Filtrage par statut (payées/en attente)",
      "Détails des montants et échéances",
      "Vue détaillée par facture"
    ],
    image: "/img/invoices-mobile.jpg" // À remplacer par votre image
  },
  {
    icon: <LineChart className="w-8 h-8 text-primary" />,
    title: "Suivi des Consommations",
    details: [
      "Historique des relevés",
      "Données en temps réel",
      "Visualisation par période"
    ],
    image: "/img/consumption-mobile.jpg" // À remplacer par votre image
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une application mobile qui facilite le suivi de votre consommation d&apos;eau 
            et la gestion de vos factures. Conçue pour être intuitive et efficace, 
            elle vous permet d&apos;avoir une vision claire de votre consommation d&apos;eau 
            et de vos paiements.
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
                      <span className="text-gray-600">{detail}</span>
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