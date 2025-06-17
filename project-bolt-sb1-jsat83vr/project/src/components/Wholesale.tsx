import React from 'react';
import { Package, Users, Truck, Calculator, CheckCircle, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Wholesale: React.FC = () => {
  const { t } = useLanguage();

  const wholesaleFeatures = [
    {
      icon: Package,
      title: t('wholesale.bigQuantity'),
      description: t('wholesale.bigQuantityDesc')
    },
    {
      icon: Calculator,
      title: t('wholesale.specialPrices'),
      description: t('wholesale.specialPricesDesc')
    },
    {
      icon: Truck,
      title: t('wholesale.fastDelivery'),
      description: t('wholesale.fastDeliveryDesc')
    },
    {
      icon: Users,
      title: t('wholesale.specialSupport'),
      description: t('wholesale.specialSupportDesc')
    }
  ];

  const priceRanges = [
    { weight: "10-25 kg", discount: "%15" },
    { weight: "25-50 kg", discount: "%20" },
    { weight: "50-100 kg", discount: "%25" },
    { weight: "100+ kg", discount: "%30" }
  ];

  return (
    <section id="wholesale" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('wholesale.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('wholesale.subtitle')}
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative bg-gradient-to-r from-red-800 to-red-600 rounded-2xl overflow-hidden mb-16">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
            }}
          ></div>
          <div className="relative px-8 py-16 text-white text-center">
            <h3 className="text-4xl font-bold mb-4">{t('wholesale.corporateTitle')}</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('wholesale.corporateDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                {t('wholesale.priceList')}
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center">
                <Phone className="mr-2" size={20} />
                {t('wholesale.callNow')}
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {wholesaleFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Price Ranges */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">İNDİRİM ORANLARI</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {priceRanges.map((range, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-red-600 mb-2">{range.discount}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">İNDİRİM</div>
                <div className="text-gray-600">{range.weight}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Not:</strong> İndirim oranları toplam sipariş miktarına göre hesaplanır.
            </p>
            <p className="text-gray-600">
              Özel projeler ve büyük siparişler için daha avantajlı fiyatlar sunabiliriz.
            </p>
          </div>
        </div>

        {/* Target Customers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">KİMLER TOPTAN ALIŞVERİŞ YAPABİLİR?</h3>
            <div className="space-y-4">
              {[
                "Restoran ve Kafe İşletmeleri",
                "Otel ve Konaklama Tesisleri",
                "Market ve Süpermarket Zincirleri",
                "Gıda Distribütörleri",
                "Kurumsal Yemek Şirketleri",
                "Düğün ve Organizasyon Firmaları",
                "Okul ve Hastane Kantinleri",
                "İhracat Firmaları"
              ].map((customer, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{customer}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Toptan Satış"
              className="rounded-xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm">Kurumsal Müşteri</div>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">NASIL BAŞVURABILIRIM?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">BAŞVURU YAPIN</h4>
              <p className="text-gray-600">
                Telefon, e-posta veya form aracılığıyla toptan satış başvurunuzu yapın.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">GÖRÜŞME YAPIN</h4>
              <p className="text-gray-600">
                Uzmanlarımızla görüşerek ihtiyaçlarınızı belirleyin ve özel fiyat teklifi alın.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">SİPARİŞ VERİN</h4>
              <p className="text-gray-600">
                Anlaşma tamamlandıktan sonra düzenli siparişlerinizi verebilirsiniz.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-800 mb-4">TOPTAN SATIŞ İLETİŞİM</h4>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <Phone className="text-red-600" size={20} />
                  <span className="font-semibold">{t('header.phone')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">toptan@agakuruyemis.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wholesale;