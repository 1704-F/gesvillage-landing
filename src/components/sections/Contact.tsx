// src/components/sections/Contact.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactInfo = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Localisation",
    description: "Dakar, Sénégal",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    description: "contact@gesvillage.com",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "WhatsApp",
    description: "Disponible 24/7",
  },
];

const Contact = () => {
  const handleWhatsAppClick = () => {
    // Remplacez ce numéro par votre numéro WhatsApp
    window.open('https://wa.me/+221XXXXXXXX', '_blank');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Contactez-nous
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Notre équipe est là pour répondre à toutes vos questions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {ContactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 inline-flex mb-4">
                    <div className="text-primary">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#20BD5B] text-white px-8"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Discuter sur WhatsApp
          </Button>
          
          <p className="mt-4 text-sm text-gray-500">
            Temps de réponse moyen : moins de 2 heures
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;