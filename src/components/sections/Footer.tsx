"use client"
// src/components/Footer.tsx
import React from 'react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-primary mb-4">GesVillage</h3>
            <p className="text-gray-600">
              Solution innovante de gestion des forages d&apos;eau pour les collectivités locales.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-600 hover:text-primary">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-primary">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Conditions d&apos;utilisation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contactez-nous</h4>
            <p className="text-gray-600">
              Email: contact@gesvillage.com
              <br />
              WhatsApp: +33775802267
            </p>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} GesVillage. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;