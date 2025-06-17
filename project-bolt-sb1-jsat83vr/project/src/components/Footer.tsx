import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" 
                alt="Aga Kuruyemiş" 
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">{t('header.companyName')}</h3>
                <p className="text-gray-400 text-sm">{t('header.tagline')}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">{t('nav.home')}</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">{t('nav.products')}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="#wholesale" className="text-gray-300 hover:text-white transition-colors">{t('nav.wholesale')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">{t('nav.contact')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kampanyalar</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.categories')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('products.hazelnut')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('products.walnut')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('products.pistachio')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('products.driedFruit')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Karışık Kuruyemiş</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Badem</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Çam Fıstığı</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('contact.info')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-red-400 mt-1" />
                <div>
                  <p className="text-gray-300">{t('header.phone')}</p>
                  <p className="text-gray-300">0532 123 45 67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-red-400 mt-1" />
                <div>
                  <p className="text-gray-300">{t('header.email')}</p>
                  <p className="text-gray-300">siparis@agakuruyemis.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-red-400 mt-1" />
                <div>
                  <p className="text-gray-300 whitespace-pre-line">
                    {t('contact.addressText')}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-600 rounded-lg">
              <h5 className="font-bold mb-2">{t('hero.freeShipping')}</h5>
              <p className="text-sm">{t('hero.freeShippingDesc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold mb-2">{t('footer.newsletter')}</h4>
              <p className="text-gray-300">{t('footer.newsletterDesc')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder={t('contact.email')}
                className="px-4 py-3 rounded-lg text-gray-900 w-full md:w-80"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                {t('footer.subscribe')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                {t('footer.rights')}
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.privacy')}</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.terms')}</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.returns')}</a>
              </div>
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors mt-4 md:mt-0"
              aria-label="Sayfa başına dön"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;