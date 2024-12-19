"use client"
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', href: '/', isPage: true },
    { label: 'À propos', href: '/about', isPage: true },
    { label: 'Fonctionnalités', href: '#features', isPage: false },
    { label: 'Tarifs', href: '#pricing', isPage: false },
    { label: 'Contact', href: '#contact', isPage: false },
  ];

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Placeholder */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              GesVillage
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a 
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
            <a 
              href="https://app.gesvillage.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90">
                Démarrer
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                item.isPage ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a 
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <div className="px-4">
                <a 
                  href="https://app.gesvillage.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary hover:bg-primary/90 w-full">
                    Démarrer
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;