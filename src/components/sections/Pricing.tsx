// src/components/sections/Pricing.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const pricingPlans = [
  {
    name: "Starter",
    price: "25 000",
    description: "Idéal pour les petites collectivités",
    features: [
      "Jusqu&apos;à 500 compteurs",
      "Gestion complète des relevés",
      "Facturation automatisée",
      "Support technique standard",
      "Accès à toutes les fonctionnalités de base"
    ],
  },
  {
    name: "Business",
    price: "50 000",
    description: "Pour les moyennes structures",
    popular: true,
    features: [
      "Jusqu&apos;à 800 compteurs",
      "Gestion complète des relevés",
      "Facturation automatisée",
      "Support prioritaire",
      "Analyses avancées",
      "Formation incluse"
    ],
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    description: "Pour les grandes structures",
    features: [
      "Nombre illimité de compteurs",
      "Fonctionnalités personnalisées",
      "Support dédié 24/7",
      "Formation approfondie",
      "API disponible"
     
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Tarification transparente
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Choisissez le plan qui correspond à vos besoins
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`relative h-full ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-primary text-white text-sm py-1 text-center">
                    Plus populaire
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Sur mesure" && (
                      <span className="text-gray-600 ml-2">FCFA/mois</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3" />
                        <span 
                          className="text-gray-600"
                          dangerouslySetInnerHTML={{ __html: feature }}
                        />
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.price === "Sur mesure" ? "Contactez-nous" : "Commencer"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;