import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.info')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Phone className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('contact.phone')}</h4>
                    <p className="text-gray-600">{t('header.phone')}</p>
                    <p className="text-gray-600">0532 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Mail className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('contact.email')}</h4>
                    <p className="text-gray-600">{t('header.email')}</p>
                    <p className="text-gray-600">siparis@agakuruyemis.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <MapPin className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('contact.address')}</h4>
                    <p className="text-gray-600 whitespace-pre-line">
                      {t('contact.addressText')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Clock className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('contact.hours')}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{t('contact.hoursText')}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">{t('contact.socialMedia')}</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors">
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.sendMessage')}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder={t('contact.name')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder={t('contact.email')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder={t('contact.phone')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.subject')} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    >
                      <option value="">{t('contact.subject')}</option>
                      <option value="siparis">Sipariş</option>
                      <option value="urun">Ürün Bilgisi</option>
                      <option value="sikayet">Şikayet</option>
                      <option value="oneri">Öneri</option>
                      <option value="toptan">Toptan Satış</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                    placeholder={t('contact.message')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  {t('contact.send')}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-100 p-4 border-b">
              <h3 className="text-xl font-bold text-gray-800">{t('contact.location')}</h3>
            </div>
            <div className="h-96 bg-gray-300 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg font-semibold">Harita Yükleniyor...</p>
                <p className="text-sm">Eminönü, Fatih / İSTANBUL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;