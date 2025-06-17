import React from 'react';
import { Star, Plus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Products: React.FC = () => {
  const { t } = useLanguage();

  const categories = [
    {
      name: t('products.hazelnut'),
      image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: t('products.hazelnutDesc')
    },
    {
      name: t('products.walnut'),
      image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: t('products.walnutDesc')
    },
    {
      name: t('products.pistachio'),
      image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: t('products.pistachioDesc')
    },
    {
      name: t('products.driedFruit'),
      image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: t('products.driedFruitDesc')
    }
  ];

  const featuredProducts = [
    {
      name: "Kavrulmuş Fındık",
      price: "45.00",
      oldPrice: "55.00",
      image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 156
    },
    {
      name: "Antep Fıstığı İçi",
      price: "180.00",
      oldPrice: "200.00",
      image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 89
    },
    {
      name: "Ceviz İçi",
      price: "65.00",
      oldPrice: "75.00",
      image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 203
    },
    {
      name: "Karışık Kuruyemiş",
      price: "85.00",
      oldPrice: "95.00",
      image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 124
    }
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('products.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-200">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">{t('products.featured')}</h3>
            <p className="text-lg text-gray-600">{t('products.featuredDesc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-sm font-bold">
                    %{Math.round(((parseFloat(product.oldPrice) - parseFloat(product.price)) / parseFloat(product.oldPrice)) * 100)} {t('products.discount')}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h4>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-red-600">{product.price} ₺</span>
                      <span className="text-lg text-gray-500 line-through">{product.oldPrice} ₺</span>
                    </div>
                  </div>

                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                    <Plus size={18} className="mr-2" />
                    {t('products.addToCart')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;