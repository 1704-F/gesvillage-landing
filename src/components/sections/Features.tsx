// src/components/sections/Features.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Bell, Settings2, Users2, Wallet, LineChart } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const featuresList = [
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: "Gestion Numérique des Forages",
    description: "Digitalisation complète du suivi des forages avec des relevés précis et une maintenance préventive",
    image: "/img/compteur.jpg"
  },
  {
    icon: <Users2 className="w-8 h-8 text-primary" />,
    title: "Gestion des ASUFOR",
    description: "Facilitez la transition des ASUFOR vers une gestion moderne avec un suivi transparent des activités",
    image: "/img/conso.jpg"
  },
  {
    icon: <Wallet className="w-8 h-8 text-primary" />,
    title: "Facturation et Recouvrement",
    description: "Réduisez les impayés grâce à un système de facturation clair et un suivi rigoureux des paiements",
    image: "/img/facture.jpg"
  },
  {
    icon: <LineChart className="w-8 h-8 text-primary" />,
    title: "Rapports et Analyses",
    description: "Générez des rapports détaillés sur la performance des forages et les taux de recouvrement",
    image: "/img/dashF.jpg"
  },
  {
    icon: <Bell className="w-8 h-8 text-primary" />,
    title: "Supervision en Temps Réel",
    description: "Suivez l'état des infrastructures et anticipez les besoins de maintenance",
    image: "/img/alerte.jpg"
  },
  {
    icon: <Settings2 className="w-8 h-8 text-primary" />,
    title: "Gestion Multi-sites",
    description: "Gérez efficacement plusieurs forages avec une vision consolidée des performances",
    image: "/img/setting.jpg"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Fonctionnalités Principales
          </motion.h2>

          <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="text-xl text-gray-600 max-w-2xl mx-auto"
>
  Une solution complète pour accompagner la réforme de l&apos;hydraulique rurale et améliorer 
  la gestion des forages au Sénégal
</motion.p>
         
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10"></div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 p-2 bg-primary/10 rounded-lg inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;