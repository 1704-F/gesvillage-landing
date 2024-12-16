// src/components/sections/Features.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Bell, Settings2, Users2, Wallet, LineChart } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const featuresList = [
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: "Gestion des Compteurs",
    description: "Suivez la consommation de chaque compteurs et analysez avec précision",
    image: "/img/compteur.jpg"
  },
  {
    icon: <Bell className="w-8 h-8 text-primary" />,
    title: "Alertes Intelligentes",
    description: "Recevez des notifications instantanées en cas d'anomalies ou de consommation excessive",
    image: "/img/alerte.jpg"
  },
  {
    icon: <Wallet className="w-8 h-8 text-primary" />,
    title: "Facturation Automatisée",
    description: "Générez et gérez automatiquement vos factures selon votre grille tarifaire",
    image: "/img/facture.jpg"
  },
  {
    icon: <Users2 className="w-8 h-8 text-primary" />,
    title: "Gestion des Consommateurs",
    description: "Gérez efficacement vos abonnés et leur historique de consommation",
    image: "/img/conso.jpg"
  },
  {
    icon: <LineChart className="w-8 h-8 text-primary" />,
    title: "Tableaux de Bord",
    description: "Visualisez vos données clés et prenez des décisions éclairées",
    image: "/img/dashF.jpg"
  },
  {
    icon: <Settings2 className="w-8 h-8 text-primary" />,
    title: "Paramétrage Flexible",
    description: "Configurez votre système selon vos besoins spécifiques",
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
            Découvrez comment notre plateforme simplifie la gestion de vos forages d&apos;eau
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