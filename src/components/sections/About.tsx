// src/components/sections/About.tsx
"use client" 

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Droplet, Target, CheckCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
 return (
   <section id="about" className="pt-20">
     {/* Hero Section */}
     <div className="bg-gradient-to-b from-primary to-blue-600 text-white py-20">
       <div className="container mx-auto px-4">
         <motion.h1 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-4xl md:text-5xl font-bold text-center mb-6"
         >
           Vers une gestion transparente et efficace
         </motion.h1>
         <motion.p 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="text-xl text-center max-w-3xl mx-auto"
         >
           
         </motion.p>
       </div>
     </div>

     {/* Vision et Mission */}
     <div className="py-20 bg-gray-50">
       <div className="container mx-auto px-4">
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
               Contribuer à l&apos;amélioration de la gestion de l&apos;eau dans les zones rurales, en proposant des outils numériques qui facilitent une gestion transparente et efficace des forages d&apos;eau, favorisant un meilleur accès à l&apos;eau pour tous.
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
               Accompagner les délégataires et les communautés locales dans la digitalisation de la gestion des forages d&apos;eau, en assurant un meilleur suivi des consommations et des paiements pour une gestion plus durable des ressources.
             </p>
           </motion.div>
         </div>
       </div>
     </div>

     {/* Pourquoi GesVillage */}
     <div className="py-20">
       <div className="container mx-auto px-4">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-3xl font-bold text-center mb-12"
         >
           Pourquoi GesVillage ?
         </motion.h2>
         
         <div className="grid md:grid-cols-3 gap-8">
           {[
             {
               icon: <CheckCircle className="w-8 h-8 text-primary" />,
               title: "Solution adaptée aux besoins locaux",
               description: "Une plateforme conçue spécifiquement pour répondre aux défis de gestion de l'eau dans les zones rurales."
             },
             {
               icon: <Users className="w-8 h-8 text-primary" />,
               title: "Double approche: numérique et solaire",
               description: "Réduction des coûts d'exploitation grâce à l'énergie solaire et meilleure transparence financière."
             },
             {
               icon: <Droplet className="w-8 h-8 text-primary" />,
               title: "Accompagnement complet",
               description: "Support technique, formation et suivi pour assurer une gestion efficace et durable des ressources en eau."
             }
           ].map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.2 }}
               className="text-center p-6 bg-white rounded-xl shadow-lg"
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
     <div className="bg-primary text-white py-20">
       <div className="container mx-auto px-4 text-center">
         <h2 className="text-3xl font-bold mb-6">
           Optimisez la gestion de vos forages d&apos;eau
         </h2>
         <p className="text-xl mb-8 max-w-2xl mx-auto">
         Que vous soyez un délégataire de service public ou une collectivité locale, découvrez comment GesVillage peut vous aider à réduire vos coûts d&apos;exploitation et améliorer la gestion de vos infrastructures hydrauliques.
         </p>
         <Button className="bg-white text-primary hover:bg-gray-100">
           Contactez-nous
         </Button>
       </div>
     </div>
   </section>
 );
};

export default About;