import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'tr' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    // Header
    'header.phone': '0212 543 65 67',
    'header.email': 'info@agakuruyemis.com',
    'header.freeShipping': 'Ücretsiz Kargo - 150 TL ve Üzeri',
    'header.companyName': 'AGA KURUYEMİŞ',
    'header.tagline': 'En Kaliteli Kuruyemiş',
    'nav.home': 'ANASAYFA',
    'nav.products': 'ÜRÜNLER',
    'nav.about': 'KURUMSAL',
    'nav.wholesale': 'TOPTAN',
    'nav.contact': 'İLETİŞİM',
    'header.cart': 'SEPET',

    // Hero
    'hero.title1': 'EN KALİTELİ',
    'hero.title2': 'KURUYEMİŞ',
    'hero.subtitle': '40 yıldan fazla deneyimimizle, doğanın en taze ürünlerini sofralarınıza getiriyoruz. Kalite ve lezzette asla taviz vermiyoruz.',
    'hero.viewProducts': 'ÜRÜNLER İNCELE',
    'hero.orderNow': 'HEMEN SİPARİŞ VER',
    'hero.freeShipping': 'ÜCRETSİZ KARGO',
    'hero.freeShippingDesc': '150 TL ve üzeri alışverişlerde',
    'hero.secureShop': 'GÜVENLİ ALIŞVERİŞ',
    'hero.secureShopDesc': 'SSL sertifikası ile korunmuş',
    'hero.qualityGuarantee': 'KALİTE GARANTİSİ',
    'hero.qualityGuaranteeDesc': '%100 memnuniyet garantisi',

    // Products
    'products.title': 'ÜRÜN KATEGORİLERİ',
    'products.subtitle': 'En taze ve kaliteli kuruyemişlerimizi keşfedin. Doğanın lezzetlerini sofralarınıza getiriyoruz.',
    'products.hazelnut': 'FINDIK',
    'products.hazelnutDesc': 'Ordu\'nun en kaliteli fındıkları',
    'products.walnut': 'CEVIZ',
    'products.walnutDesc': 'Taze ve besleyici cevizler',
    'products.pistachio': 'ANTEP FISTIĞI',
    'products.pistachioDesc': 'Antep\'in nefis fıstıkları',
    'products.driedFruit': 'KURU MEYVE',
    'products.driedFruitDesc': 'Doğal kurutulmuş meyveler',
    'products.featured': 'ÖNE ÇIKAN ÜRÜNLER',
    'products.featuredDesc': 'En çok tercih edilen ürünlerimizi inceleyin',
    'products.addToCart': 'SEPETE EKLE',
    'products.discount': 'İNDİRİM',

    // About
    'about.title': 'HAKKIMIZDA',
    'about.description1': 'Aga Kuruyemiş olarak 40 yıldan fazla süredir, en kaliteli kuruyemişleri müşterilerimizle buluşturuyoruz. Kurulduğumuz günden bu yana, doğanın en taze ürünlerini sofralarınıza getirme misyonuyla çalışıyoruz.',
    'about.description2': 'Geleneksel yöntemlerle modern teknolojini harmanlayarak, fındık, ceviz, antep fıstığı, kuru meyve ve daha birçok ürünü en taze haliyle sizlere sunuyoruz. Kalite kontrol süreçlerimizde hiçbir zaman taviz vermiyoruz.',
    'about.feature1': '%100 Doğal ve Taze Ürünler',
    'about.feature2': 'Hijyenik Ambalajlama',
    'about.feature3': 'Hızlı ve Güvenilir Teslimat',
    'about.feature4': 'Müşteri Memnuniyeti Garantisi',
    'about.experience': 'Yıllık Deneyim',
    'about.customers': 'Mutlu Müşteri',
    'about.products': 'Ürün Çeşidi',
    'about.delivery': 'Hızlı Teslimat',
    'about.mission': 'MİSYONUMUZ',
    'about.missionText': 'En kaliteli kuruyemişleri, en uygun fiyatlarla müşterilerimize sunarak, sağlıklı beslenme alışkanlıklarına katkıda bulunmak ve geleneksel Türk kuruyemiş kültürünü gelecek nesillere aktarmaktır.',
    'about.vision': 'VİZYONUMUZ',
    'about.visionText': 'Türkiye\'nin en güvenilir kuruyemiş markası olmak ve uluslararası pazarlarda Türk kuruyemiş kalitesini temsil ederek, dünya çapında tanınan bir marka haline gelmektir.',

    // Contact
    'contact.title': 'İLETİŞİM',
    'contact.subtitle': 'Sorularınız için bize ulaşın. Size en iyi hizmeti vermek için buradayız.',
    'contact.info': 'İLETİŞİM BİLGİLERİ',
    'contact.phone': 'TELEFON',
    'contact.email': 'E-POSTA',
    'contact.address': 'ADRES',
    'contact.addressText': 'Eminönü Mahallesi\nKuruyemiş Sokak No: 25\nFatih / İSTANBUL',
    'contact.hours': 'ÇALIŞMA SAATLERİ',
    'contact.hoursText': 'Pazartesi - Cumartesi: 08:00 - 19:00\nPazar: 10:00 - 17:00',
    'contact.socialMedia': 'SOSYAL MEDYA',
    'contact.sendMessage': 'MESAJ GÖNDERİN',
    'contact.name': 'AD SOYAD',
    'contact.subject': 'KONU',
    'contact.message': 'MESAJ',
    'contact.send': 'MESAJ GÖNDER',
    'contact.location': 'MAĞAZA LOKASYONİMİZ',

    // Wholesale
    'wholesale.title': 'TOPTAN SATIŞ',
    'wholesale.subtitle': 'Restoranlar, otel zincirleri, market zincirleri ve kurumsal müşteriler için özel toptan satış hizmeti sunuyoruz.',
    'wholesale.corporateTitle': 'KURUMSAL MÜŞTERİLERE ÖZEL',
    'wholesale.corporateDesc': '%30\'a varan indirimlerle, en kaliteli kuruyemişleri toptan fiyatlarla alabilirsiniz',
    'wholesale.priceList': 'FİYAT LİSTESİ İSTE',
    'wholesale.callNow': 'HEMEN ARA',
    'wholesale.bigQuantity': 'BÜYÜK MİKTAR',
    'wholesale.bigQuantityDesc': '10 kg\'dan başlayan toptan satış seçenekleri',
    'wholesale.specialPrices': 'ÖZEL FİYATLAR',
    'wholesale.specialPricesDesc': 'Miktara göre özel indirimli fiyatlar',
    'wholesale.fastDelivery': 'HIZLI TESLİMAT',
    'wholesale.fastDeliveryDesc': 'İstanbul\'da aynı gün, Türkiye\'de 1-2 gün teslimat',
    'wholesale.specialSupport': 'ÖZEL DESTEK',
    'wholesale.specialSupportDesc': 'Toptan müşterilerimize özel destek hattı',

    // Footer
    'footer.quickLinks': 'HIZLI ERİŞİM',
    'footer.categories': 'ÜRÜN KATEGORİLERİ',
    'footer.newsletter': 'KAMPANYALARDAN HABERDAR OLUN',
    'footer.newsletterDesc': 'E-posta adresinizi girin, özel fırsatları kaçırmayın!',
    'footer.subscribe': 'ABONE OL',
    'footer.rights': '© 2024 Aga Kuruyemiş. Tüm hakları saklıdır.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Şartları',
    'footer.returns': 'İade ve Değişim'
  },
  en: {
    // Header
    'header.phone': '+90 212 543 65 67',
    'header.email': 'info@agakuruyemis.com',
    'header.freeShipping': 'Free Shipping - Orders Over 150 TL',
    'header.companyName': 'AGA NUTS & DRIED FRUITS',
    'header.tagline': 'Premium Quality Nuts',
    'nav.home': 'HOME',
    'nav.products': 'PRODUCTS',
    'nav.about': 'ABOUT',
    'nav.wholesale': 'WHOLESALE',
    'nav.contact': 'CONTACT',
    'header.cart': 'CART',

    // Hero
    'hero.title1': 'PREMIUM QUALITY',
    'hero.title2': 'NUTS & DRIED FRUITS',
    'hero.subtitle': 'With over 40 years of experience, we bring nature\'s freshest products to your table. We never compromise on quality and taste.',
    'hero.viewProducts': 'VIEW PRODUCTS',
    'hero.orderNow': 'ORDER NOW',
    'hero.freeShipping': 'FREE SHIPPING',
    'hero.freeShippingDesc': 'On orders over 150 TL',
    'hero.secureShop': 'SECURE SHOPPING',
    'hero.secureShopDesc': 'Protected with SSL certificate',
    'hero.qualityGuarantee': 'QUALITY GUARANTEE',
    'hero.qualityGuaranteeDesc': '100% satisfaction guarantee',

    // Products
    'products.title': 'PRODUCT CATEGORIES',
    'products.subtitle': 'Discover our freshest and highest quality nuts and dried fruits. We bring nature\'s flavors to your table.',
    'products.hazelnut': 'HAZELNUTS',
    'products.hazelnutDesc': 'Premium quality hazelnuts from Ordu',
    'products.walnut': 'WALNUTS',
    'products.walnutDesc': 'Fresh and nutritious walnuts',
    'products.pistachio': 'PISTACHIOS',
    'products.pistachioDesc': 'Delicious pistachios from Antep',
    'products.driedFruit': 'DRIED FRUITS',
    'products.driedFruitDesc': 'Naturally dried fruits',
    'products.featured': 'FEATURED PRODUCTS',
    'products.featuredDesc': 'Check out our most preferred products',
    'products.addToCart': 'ADD TO CART',
    'products.discount': 'DISCOUNT',

    // About
    'about.title': 'ABOUT US',
    'about.description1': 'As Aga Nuts & Dried Fruits, we have been bringing the highest quality nuts and dried fruits to our customers for over 40 years. Since our establishment, we have been working with the mission of bringing nature\'s freshest products to your tables.',
    'about.description2': 'By combining traditional methods with modern technology, we offer hazelnuts, walnuts, pistachios, dried fruits and many other products in their freshest form. We never compromise on our quality control processes.',
    'about.feature1': '100% Natural and Fresh Products',
    'about.feature2': 'Hygienic Packaging',
    'about.feature3': 'Fast and Reliable Delivery',
    'about.feature4': 'Customer Satisfaction Guarantee',
    'about.experience': 'Years of Experience',
    'about.customers': 'Happy Customers',
    'about.products': 'Product Varieties',
    'about.delivery': 'Fast Delivery',
    'about.mission': 'OUR MISSION',
    'about.missionText': 'To contribute to healthy eating habits by offering the highest quality nuts and dried fruits to our customers at the most affordable prices and to pass on the traditional Turkish nuts and dried fruits culture to future generations.',
    'about.vision': 'OUR VISION',
    'about.visionText': 'To become Turkey\'s most reliable nuts and dried fruits brand and to become a globally recognized brand by representing Turkish nuts and dried fruits quality in international markets.',

    // Contact
    'contact.title': 'CONTACT',
    'contact.subtitle': 'Contact us for your questions. We are here to provide you with the best service.',
    'contact.info': 'CONTACT INFORMATION',
    'contact.phone': 'PHONE',
    'contact.email': 'EMAIL',
    'contact.address': 'ADDRESS',
    'contact.addressText': 'Eminönü District\nKuruyemiş Street No: 25\nFatih / ISTANBUL',
    'contact.hours': 'WORKING HOURS',
    'contact.hoursText': 'Monday - Saturday: 08:00 - 19:00\nSunday: 10:00 - 17:00',
    'contact.socialMedia': 'SOCIAL MEDIA',
    'contact.sendMessage': 'SEND MESSAGE',
    'contact.name': 'FULL NAME',
    'contact.subject': 'SUBJECT',
    'contact.message': 'MESSAGE',
    'contact.send': 'SEND MESSAGE',
    'contact.location': 'OUR STORE LOCATION',

    // Wholesale
    'wholesale.title': 'WHOLESALE',
    'wholesale.subtitle': 'We offer special wholesale services for restaurants, hotel chains, supermarket chains and corporate customers.',
    'wholesale.corporateTitle': 'SPECIAL FOR CORPORATE CUSTOMERS',
    'wholesale.corporateDesc': 'You can buy the highest quality nuts and dried fruits at wholesale prices with discounts up to 30%',
    'wholesale.priceList': 'REQUEST PRICE LIST',
    'wholesale.callNow': 'CALL NOW',
    'wholesale.bigQuantity': 'LARGE QUANTITY',
    'wholesale.bigQuantityDesc': 'Wholesale options starting from 10 kg',
    'wholesale.specialPrices': 'SPECIAL PRICES',
    'wholesale.specialPricesDesc': 'Special discounted prices according to quantity',
    'wholesale.fastDelivery': 'FAST DELIVERY',
    'wholesale.fastDeliveryDesc': 'Same day in Istanbul, 1-2 days in Turkey',
    'wholesale.specialSupport': 'SPECIAL SUPPORT',
    'wholesale.specialSupportDesc': 'Special support line for wholesale customers',

    // Footer
    'footer.quickLinks': 'QUICK LINKS',
    'footer.categories': 'PRODUCT CATEGORIES',
    'footer.newsletter': 'STAY UPDATED WITH CAMPAIGNS',
    'footer.newsletterDesc': 'Enter your email address, don\'t miss special offers!',
    'footer.subscribe': 'SUBSCRIBE',
    'footer.rights': '© 2024 Aga Nuts & Dried Fruits. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.returns': 'Returns & Exchanges'
  },
  ar: {
    // Header
    'header.phone': '67 65 543 212 90+',
    'header.email': 'info@agakuruyemis.com',
    'header.freeShipping': 'شحن مجاني - للطلبات فوق 150 ليرة تركية',
    'header.companyName': 'آغا للمكسرات والفواكه المجففة',
    'header.tagline': 'أجود أنواع المكسرات',
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
    'nav.wholesale': 'الجملة',
    'nav.contact': 'اتصل بنا',
    'header.cart': 'السلة',

    // Hero
    'hero.title1': 'أجود أنواع',
    'hero.title2': 'المكسرات والفواكه المجففة',
    'hero.subtitle': 'بخبرة تزيد عن 40 عاماً، نقدم لكم أطيب منتجات الطبيعة إلى موائدكم. لا نتنازل أبداً عن الجودة والطعم.',
    'hero.viewProducts': 'تصفح المنتجات',
    'hero.orderNow': 'اطلب الآن',
    'hero.freeShipping': 'شحن مجاني',
    'hero.freeShippingDesc': 'للطلبات فوق 150 ليرة تركية',
    'hero.secureShop': 'تسوق آمن',
    'hero.secureShopDesc': 'محمي بشهادة SSL',
    'hero.qualityGuarantee': 'ضمان الجودة',
    'hero.qualityGuaranteeDesc': 'ضمان الرضا 100%',

    // Products
    'products.title': 'فئات المنتجات',
    'products.subtitle': 'اكتشف أطيب وأجود أنواع المكسرات والفواكه المجففة. نقدم لكم نكهات الطبيعة إلى موائدكم.',
    'products.hazelnut': 'البندق',
    'products.hazelnutDesc': 'أجود أنواع البندق من أوردو',
    'products.walnut': 'الجوز',
    'products.walnutDesc': 'جوز طازج ومغذي',
    'products.pistachio': 'الفستق الحلبي',
    'products.pistachioDesc': 'فستق حلبي لذيذ من عنتاب',
    'products.driedFruit': 'الفواكه المجففة',
    'products.driedFruitDesc': 'فواكه مجففة طبيعياً',
    'products.featured': 'المنتجات المميزة',
    'products.featuredDesc': 'تصفح منتجاتنا الأكثر تفضيلاً',
    'products.addToCart': 'أضف للسلة',
    'products.discount': 'خصم',

    // About
    'about.title': 'من نحن',
    'about.description1': 'كشركة آغا للمكسرات والفواكه المجففة، نقدم أجود أنواع المكسرات والفواكه المجففة لعملائنا منذ أكثر من 40 عاماً. منذ تأسيسنا، نعمل برسالة تقديم أطيب منتجات الطبيعة إلى موائدكم.',
    'about.description2': 'من خلال دمج الطرق التقليدية مع التكنولوجيا الحديثة، نقدم البندق والجوز والفستق الحلبي والفواكه المجففة والعديد من المنتجات الأخرى في أطيب حالاتها. لا نتنازل أبداً عن عمليات مراقبة الجودة.',
    'about.feature1': 'منتجات طبيعية وطازجة 100%',
    'about.feature2': 'تعبئة صحية',
    'about.feature3': 'توصيل سريع وموثوق',
    'about.feature4': 'ضمان رضا العملاء',
    'about.experience': 'سنوات من الخبرة',
    'about.customers': 'عميل سعيد',
    'about.products': 'تنوع المنتجات',
    'about.delivery': 'توصيل سريع',
    'about.mission': 'رسالتنا',
    'about.missionText': 'المساهمة في عادات الأكل الصحي من خلال تقديم أجود أنواع المكسرات والفواكه المجففة لعملائنا بأفضل الأسعار ونقل ثقافة المكسرات والفواكه المجففة التركية التقليدية للأجيال القادمة.',
    'about.vision': 'رؤيتنا',
    'about.visionText': 'أن نصبح العلامة التجارية الأكثر موثوقية للمكسرات والفواكه المجففة في تركيا وأن نصبح علامة تجارية معترف بها عالمياً من خلال تمثيل جودة المكسرات والفواكه المجففة التركية في الأسواق الدولية.',

    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل معنا لأسئلتك. نحن هنا لتقديم أفضل خدمة لك.',
    'contact.info': 'معلومات الاتصال',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'العنوان',
    'contact.addressText': 'حي أمين أونو\nشارع المكسرات رقم: 25\nفاتح / إسطنبول',
    'contact.hours': 'ساعات العمل',
    'contact.hoursText': 'الاثنين - السبت: 08:00 - 19:00\nالأحد: 10:00 - 17:00',
    'contact.socialMedia': 'وسائل التواصل الاجتماعي',
    'contact.sendMessage': 'إرسال رسالة',
    'contact.name': 'الاسم الكامل',
    'contact.subject': 'الموضوع',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.location': 'موقع متجرنا',

    // Wholesale
    'wholesale.title': 'البيع بالجملة',
    'wholesale.subtitle': 'نقدم خدمات جملة خاصة للمطاعم وسلاسل الفنادق وسلاسل السوبر ماركت والعملاء المؤسسيين.',
    'wholesale.corporateTitle': 'خاص للعملاء المؤسسيين',
    'wholesale.corporateDesc': 'يمكنكم شراء أجود أنواع المكسرات والفواكه المجففة بأسعار الجملة مع خصومات تصل إلى 30%',
    'wholesale.priceList': 'طلب قائمة الأسعار',
    'wholesale.callNow': 'اتصل الآن',
    'wholesale.bigQuantity': 'كميات كبيرة',
    'wholesale.bigQuantityDesc': 'خيارات جملة تبدأ من 10 كيلو',
    'wholesale.specialPrices': 'أسعار خاصة',
    'wholesale.specialPricesDesc': 'أسعار مخفضة خاصة حسب الكمية',
    'wholesale.fastDelivery': 'توصيل سريع',
    'wholesale.fastDeliveryDesc': 'نفس اليوم في إسطنبول، 1-2 أيام في تركيا',
    'wholesale.specialSupport': 'دعم خاص',
    'wholesale.specialSupportDesc': 'خط دعم خاص لعملاء الجملة',

    // Footer
    'footer.quickLinks': 'روابط سريعة',
    'footer.categories': 'فئات المنتجات',
    'footer.newsletter': 'ابق على اطلاع بالحملات',
    'footer.newsletterDesc': 'أدخل عنوان بريدك الإلكتروني، لا تفوت العروض الخاصة!',
    'footer.subscribe': 'اشترك',
    'footer.rights': '© 2024 آغا للمكسرات والفواكه المجففة. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الاستخدام',
    'footer.returns': 'الإرجاع والاستبدال'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};