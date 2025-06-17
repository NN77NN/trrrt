import React from 'react';
import { ArrowRight, Truck, Shield, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative">
      {/* Main Hero */}
      <div className="relative bg-gradient-to-r from-red-800 to-red-600 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="relative min-h-[600px] flex items-center bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-red-900 opacity-75"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {t('hero.title1')}
                <span className="block text-yellow-300">{t('hero.title2')}</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 flex items-center justify-center">
                  {t('hero.viewProducts')}
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-red-800 font-bold py-4 px-8 rounded-lg text-lg transition-all">
                  {t('hero.orderNow')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Strip */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-red-100 p-3 rounded-full">
                <Truck className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">{t('hero.freeShipping')}</h3>
                <p className="text-gray-600">{t('hero.freeShippingDesc')}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-red-100 p-3 rounded-full">
                <Shield className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">{t('hero.secureShop')}</h3>
                <p className="text-gray-600">{t('hero.secureShopDesc')}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-red-100 p-3 rounded-full">
                <Award className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">{t('hero.qualityGuarantee')}</h3>
                <p className="text-gray-600">{t('hero.qualityGuaranteeDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;