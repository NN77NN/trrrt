import React from 'react';
import { Users, Award, Truck, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { number: "40+", label: t('about.experience'), icon: Award },
    { number: "10K+", label: t('about.customers'), icon: Users },
    { number: "50+", label: t('about.products'), icon: Heart },
    { number: "24/7", label: t('about.delivery'), icon: Truck }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('about.title')}</h2>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('about.description2')}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">{t('about.feature1')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">{t('about.feature2')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">{t('about.feature3')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">{t('about.feature4')}</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt={t('about.title')}
              className="rounded-xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">40+</div>
              <div className="text-sm">{t('about.experience')}</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-red-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('about.mission')}</h3>
            <p className="text-gray-700 leading-relaxed">
              {t('about.missionText')}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('about.vision')}</h3>
            <p className="text-gray-700 leading-relaxed">
              {t('about.visionText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;