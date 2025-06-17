import React, { useState } from 'react';
import { Menu, X, Phone, Mail, ShoppingCart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-red-700 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>{t('header.phone')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>{t('header.email')}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-1 md:mt-0">
            <span>{t('header.freeShipping')}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" alt="Aga Kuruyemiş" className="w-16 h-16 rounded-full object-cover" />
              <div className="ml-3">
                <h1 className="text-3xl font-bold text-red-700">{t('header.companyName')}</h1>
                <p className="text-sm text-gray-600 font-medium">{t('header.tagline')}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 font-semibold transition-colors py-2">{t('nav.home')}</a>
              <a href="#products" className="text-gray-700 hover:text-red-600 font-semibold transition-colors py-2">{t('nav.products')}</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-semibold transition-colors py-2">{t('nav.about')}</a>
              <a href="#wholesale" className="text-gray-700 hover:text-red-600 font-semibold transition-colors py-2">{t('nav.wholesale')}</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-semibold transition-colors py-2">{t('nav.contact')}</a>
            </nav>

            {/* Cart, Language Switcher and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              
              <button className="hidden md:flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                <ShoppingCart size={20} />
                <span>{t('header.cart')}</span>
              </button>
              
              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">{t('nav.home')}</a>
                <a href="#products" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">{t('nav.products')}</a>
                <a href="#about" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">{t('nav.about')}</a>
                <a href="#wholesale" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">{t('nav.wholesale')}</a>
                <a href="#contact" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">{t('nav.contact')}</a>
                <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors w-fit">
                  <ShoppingCart size={20} />
                  <span>{t('header.cart')}</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;