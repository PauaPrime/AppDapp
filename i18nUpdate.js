import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      appTitle: 'Crypto Cost Basis Tracker',
      welcomeMessage: 'Connect your wallet to track average purchase prices.',
      connectWallet: 'Connect Wallet',
      settings: 'Settings',
      disconnect: 'Disconnect',
      privacyPolicy: 'Privacy Policy',
      disclaimer: 'Not financial advice.',
      searchTokenChain: 'Search by Token or Chain',
      portfolioTable: 'Portfolio Table',
      portfolioSummary: 'Summary of your crypto holdings with average purchase prices',
      exportCSV: 'Export to CSV',
      back: 'Back',
      loading: 'Loading...',
      pay: 'Pay',
      upgradeTitle: 'Unlock Lifetime Access',
      upgradeBenefits: 'Full 40+ chains, unlimited exports, no restrictions.',
      specialOffer: 'Special Trial Offer: Purchase for $7.50 (save 25%) instead of $9.99!'
    }
  },
  zh: {
    translation: {
      appTitle: '加密货币成本基础追踪器',
      welcomeMessage: '连接您的钱包以追踪平均购买价格。',
      connectWallet: '连接钱包',
      settings: '设置',
      disconnect: '断开连接',
      privacyPolicy: '隐私政策',
      disclaimer: '非财务建议。',
      searchTokenChain: '按代币或链搜索',
      portfolioTable: '投资组合表',
      portfolioSummary: '您的加密资产持有量及平均购买价格摘要',
      exportCSV: '导出到CSV',
      back: '返回',
      loading: '加载中...',
      pay: '支付',
      upgradeTitle: '解锁终身访问',
      upgradeBenefits: '支持40+链，无限导出，无限制。',
      specialOffer: '特别试用优惠：仅需$7.50（节省25%）而不是$9.99！'
    }
  },
  hi: {
    translation: {
      appTitle: 'क्रिप्टो लागत आधार ट्रैकर',
      welcomeMessage: 'औसत खरीद मूल्य ट्रैक करने के लिए अपना वॉलेट कनेक्ट करें।',
      connectWallet: 'वॉलेट कनेक्ट करें',
      settings: 'सेटिंग्स',
      disconnect: 'डिस्कनेक्ट करें',
      privacyPolicy: 'गोपनीयता नीति',
      disclaimer: 'वित्तीय सलाह नहीं।',
      searchTokenChain: 'टोकन या चेन द्वारा खोजें',
      portfolioTable: 'पोर्टफोलियो तालिका',
      portfolioSummary: 'आपके क्रिप्टो होल्डिंग्स और औसत खरीद मूल्य का सारांश',
      exportCSV: 'CSV में निर्यात करें',
      back: 'वापस',
      loading: 'लोड हो रहा है...',
      pay: 'भुगतान करें',
      upgradeTitle: 'आजीवन पहुंच अनलॉक करें',
      upgradeBenefits: '40+ चेन, असीमित निर्यात, कोई प्रतिबंध नहीं।',
      specialOffer: 'विशेष परीक्षण ऑफर: केवल $7.50 में खरीदें (25% बचाएं) $9.99 के बजाय!'
    }
  },
  es: {
    translation: {
      appTitle: 'Rastreador de Base de Costos Crypto',
      welcomeMessage: 'Conecta tu billetera para rastrear precios promedio de compra.',
      connectWallet: 'Conectar Billetera',
      settings: 'Configuraciones',
      disconnect: 'Desconectar',
      privacyPolicy: 'Política de Privacidad',
      disclaimer: 'No es consejo financiero.',
      searchTokenChain: 'Buscar por Token o Cadena',
      portfolioTable: 'Tabla de Portafolio',
      portfolioSummary: 'Resumen de tus tenencias cripto con precios promedio de compra',
      exportCSV: 'Exportar a CSV',
      back: 'Volver',
      loading: 'Cargando...',
      pay: 'Pagar',
      upgradeTitle: 'Desbloquear Acceso de por Vida',
      upgradeBenefits: 'Soporte para 40+ cadenas, exportaciones ilimitadas, sin restricciones.',
      specialOffer: 'Oferta de Prueba Especial: Compra por $7.50 (ahorra 25%) en lugar de $9.99!'
    }
  },
  ar: {
    translation: {
      appTitle: 'متتبع تكلفة العملات الرقمية',
      welcomeMessage: 'قم بتوصيل محفظتك لتتبع متوسط أسعار الشراء.',
      connectWallet: 'توصيل المحفظة',
      settings: 'الإعدادات',
      disconnect: 'قطع الاتصال',
      privacyPolicy: 'سياسة الخصوصية',
      disclaimer: 'ليس نصيحة مالية.',
      searchTokenChain: 'البحث حسب الرمز أو السلسلة',
      portfolioTable: 'جدول المحفظة',
      portfolioSummary: 'ملخص ممتلكاتك الرقمية مع متوسط أسعار الشراء',
      exportCSV: 'تصدير إلى CSV',
      back: 'رجوع',
      loading: 'جار التحميل...',
      pay: 'الدفع',
      upgradeTitle: 'فتح الوصول مدى الحياة',
      upgradeBenefits: 'دعم أكثر من 40 سلسلة، تصدير غير محدود، بدون قيود.',
      specialOffer: 'عرض تجريبي خاص: اشترِ بـ $7.50 (وفر 25%) بدلاً من $9.99!'
    }
  },
  fr: {
    translation: {
      appTitle: 'Suivi de la Base de Coût Crypto',
      welcomeMessage: 'Connectez votre portefeuille pour suivre les prix d’achat moyens.',
      connectWallet: 'Connecter le Portefeuille',
      settings: 'Paramètres',
      disconnect: 'Déconnexion',
      privacyPolicy: 'Politique de Confidentialité',
      disclaimer: 'Pas un conseil financier.',
      searchTokenChain: 'Rechercher par Jeton ou Chaîne',
      portfolioTable: 'Tableau du Portefeuille',
      portfolioSummary: 'Résumé de vos avoirs crypto avec prix d’achat moyens',
      exportCSV: 'Exporter vers CSV',
      back: 'Retour',
      loading: 'Chargement...',
      pay: 'Payer',
      upgradeTitle: 'Débloquer un Accès à Vie',
      upgradeBenefits: 'Support pour plus de 40 chaînes, exportations illimitées, sans restrictions.',
      specialOffer: 'Offre d’Essai Spéciale : Achetez pour $7.50 (économisez 25%) au lieu de $9.99 !'
    }
  },
  bn: {
    translation: {
      appTitle: 'ক্রিপ্টো কস্ট বেসিস ট্র্যাকার',
      welcomeMessage: 'গড় ক্রয় মূল্য ট্র্যাক করতে আপনার ওয়ালেট সংযোগ করুন।',
      connectWallet: 'ওয়ালেট সংযোগ করুন',
      settings: 'সেটিংস',
      disconnect: 'সংযোগ বিচ্ছিন্ন করুন',
      privacyPolicy: 'গোপনীয়তা নীতি',
      disclaimer: 'আর্থিক পরামর্শ নয়।',
      searchTokenChain: 'টোকেন বা চেইন দ্বারা অনুসন্ধান করুন',
      portfolioTable: 'পোর্টফোলিও টেবিল',
      portfolioSummary: 'আপনার ক্রিপ্টো হোল্ডিংস এবং গড় ক্রয় মূল্যের সারাংশ',
      exportCSV: 'CSV-তে রপ্তানি করুন',
      back: 'ফিরে যান',
      loading: 'লোড হচ্ছে...',
      pay: 'প্রদান করুন',
      upgradeTitle: 'আজীবন অ্যাক্সেস আনলক করুন',
      upgradeBenefits: '৪০+ চেইন সমর্থন, সীমাহীন রপ্তানি, কোনো বাধা নেই।',
      specialOffer: 'বিশেষ ট্রায়াল অফার: $9.99 এর পরিবর্তে $7.50-এ কিনুন (২৫% সঞ্চয়)!'
    }
  },
  pt: {
    translation: {
      appTitle: 'Rastreador de Base de Custo Cripto',
      welcomeMessage: 'Conecte sua carteira para rastrear preços médios de compra.',
      connectWallet: 'Conectar Carteira',
      settings: 'Configurações',
      disconnect: 'Desconectar',
      privacyPolicy: 'Política de Privacidade',
      disclaimer: 'Não é conselho financeiro.',
      searchTokenChain: 'Pesquisar por Token ou Cadeia',
      portfolioTable: 'Tabela de Portfólio',
      portfolioSummary: 'Resumo de suas participações cripto com preços médios de compra',
      exportCSV: 'Exportar para CSV',
      back: 'Voltar',
      loading: 'Carregando...',
      pay: 'Pagar',
      upgradeTitle: 'Desbloquear Acesso Vitalício',
      upgradeBenefits: 'Suporte para mais de 40 cadeias, exportações ilimitadas, sem restrições.',
      specialOffer: 'Oferta de Teste Especial: Compre por $7.50 (economize 25%) em vez de $9.99!'
    }
  },
  ru: {
    translation: {
      appTitle: 'Трекер Стоимости Криптовалют',
      welcomeMessage: 'Подключите кошелек для отслеживания средних цен покупки.',
      connectWallet: 'Подключить Кошелек',
      settings: 'Настройки',
      disconnect: 'Отключить',
      privacyPolicy: 'Политика Конфиденциальности',
      disclaimer: 'Не финансовый совет.',
      searchTokenChain: 'Поиск по Токену или Цепи',
      portfolioTable: 'Таблица Портфеля',
      portfolioSummary: 'Сводка ваших криптоактивов со средними ценами покупки',
      exportCSV: 'Экспорт в CSV',
      back: 'Назад',
      loading: 'Загрузка...',
      pay: 'Оплатить',
      upgradeTitle: 'Разблокировать Пожизненный Доступ',
      upgradeBenefits: 'Поддержка более 40 цепей, неограниченный экспорт, без ограничений.',
      specialOffer: 'Специальное Пробное Предложение: Купите за $7.50 (сэкономьте 25%) вместо $9.99!'
    }
  },
  ur: {
    translation: {
      appTitle: 'کریپٹو لاگت بیسس ٹریکر',
      welcomeMessage: 'اوسط خریداری قیمتوں کو ٹریک کرنے کے لیے اپنا والٹ جوڑیں۔',
      connectWallet: 'والٹ جوڑیں',
      settings: 'ترتیبات',
      disconnect: 'منقطع کریں',
      privacyPolicy: 'رازداری کی پالیسی',
      disclaimer: 'مالی مشورہ نہیں۔',
      searchTokenChain: 'ٹوکن یا چین کے ذریعے تلاش کریں',
      portfolioTable: 'پورٹ فولیو ٹیبل',
      portfolioSummary: 'آپ کے کریپٹو ہولڈنگز اور اوسط خریداری قیمتوں کا خلاصہ',
      exportCSV: 'CSV میں برآمد کریں',
      back: 'واپس',
      loading: 'لوڈ ہو رہا ہے...',
      pay: 'ادائیگی کریں',
      upgradeTitle: 'تاحیات رسائی کھولیں',
      upgradeBenefits: '40+ چینز کی سپورٹ، لامحدود برآمدات، کوئی پابندیاں نہیں۔',
      specialOffer: 'خصوصی آزمائشی پیشکش: $9.99 کے بجائے $7.50 میں خریدیں (25% بچائیں)!'
    }
  },
  id: {
    translation: {
      appTitle: 'Pelacak Dasar Biaya Kripto',
      welcomeMessage: 'Hubungkan dompet Anda untuk melacak harga pembelian rata-rata.',
      connectWallet: 'Hubungkan Dompet',
      settings: 'Pengaturan',
      disconnect: 'Putuskan',
      privacyPolicy: 'Kebijakan Privasi',
      disclaimer: 'Bukan saran keuangan.',
      searchTokenChain: 'Cari berdasarkan Token atau Rantai',
      portfolioTable: 'Tabel Portofolio',
      portfolioSummary: 'Ringkasan kepemilikan kripto Anda dengan harga pembelian rata-rata',
      exportCSV: 'Ekspor ke CSV',
      back: 'Kembali',
      loading: 'Memuat...',
      pay: 'Bayar',
      upgradeTitle: 'Buka Akses Seumur Hidup',
      upgradeBenefits: 'Dukungan untuk 40+ rantai, ekspor tak terbatas, tanpa batasan.',
      specialOffer: 'Penawaran Uji Coba Spesial: Beli seharga $7.50 (hemat 25%) daripada $9.99!'
    }
  },
  de: {
    translation: {
      appTitle: 'Krypto-Kostenbasis-Tracker',
      welcomeMessage: 'Verbinden Sie Ihre Wallet, um durchschnittliche Kaufpreise zu verfolgen.',
      connectWallet: 'Wallet Verbinden',
      settings: 'Einstellungen',
      disconnect: 'Trennen',
      privacyPolicy: 'Datenschutzrichtlinie',
      disclaimer: 'Kein Finanzberatung.',
      searchTokenChain: 'Suche nach Token oder Kette',
      portfolioTable: 'Portfolio-Tabelle',
      portfolioSummary: 'Zusammenfassung Ihrer Krypto-Bestände mit durchschnittlichen Kaufpreisen',
      exportCSV: 'Exportieren nach CSV',
      back: 'Zurück',
      loading: 'Laden...',
      pay: 'Bezahlen',
      upgradeTitle: 'Lebenslangen Zugang Freischalten',
      upgradeBenefits: 'Unterstützung für über 40 Ketten, unbegrenzte Exporte, keine Einschränkungen.',
      specialOffer: 'Speziales Testangebot: Kaufen Sie für $7.50 (sparen Sie 25%) statt $9.99!'
    }
  },
  ja: {
    translation: {
      appTitle: 'クリプトコストベーストラッカー',
      welcomeMessage: '平均購入価格を追跡するためにウォレットを接続してください。',
      connectWallet: 'ウォレットを接続',
      settings: '設定',
      disconnect: '切断',
      privacyPolicy: 'プライバシーポリシー',
      disclaimer: '財務アドバイスではありません。',
      searchTokenChain: 'トークンまたはチェーンで検索',
      portfolioTable: 'ポートフォリオテーブル',
      portfolioSummary: 'あなたのクリプト保有と平均購入価格の概要',
      exportCSV: 'CSVにエクスポート',
      back: '戻る',
      loading: '読み込み中...',
      pay: '支払う',
      upgradeTitle: '生涯アクセスを解除',
      upgradeBenefits: '40以上のチェーン、無制限のエクスポート、制限なし。',
      specialOffer: '特別トライアルオファー：$9.99の代わりに$7.50で購入（25%節約）！'
    }
  },
  pcm: {
    translation: {
      appTitle: 'Crypto Cost Basis Traka',
      welcomeMessage: 'Connect ya wallet to track average buy price dem.',
      connectWallet: 'Connect Wallet',
      settings: 'Setin',
      disconnect: 'Cut Connection',
      privacyPolicy: 'Privacy Policy',
      disclaimer: 'No be financial advice o.',
      searchTokenChain: 'Search by Token or Chain',
      portfolioTable: 'Portfolio Table',
      portfolioSummary: 'Summary of ya crypto holdin wit average buy price dem',
      exportCSV: 'Export to CSV',
      back: 'Go Back',
      loading: 'Dey Load...',
      pay: 'Pay',
      upgradeTitle: 'Unlock Lifetime Access',
      upgradeBenefits: 'Support 40+ chain dem, unlimited export, no restriction.',
      specialOffer: 'Special Trial Offer: Buy for $7.50 (save 25%) instead of $9.99!'
    }
  },
  mr: {
    translation: {
      appTitle: 'क्रिप्टो खर्च आधार ट्रॅकर',
      welcomeMessage: 'सरासरी खरेदी किंमतींचा मागोवा ठेवण्यासाठी तुमचे वॉलेट जोडा.',
      connectWallet: 'वॉलेट जोडा',
      settings: 'सेटिंग्ज',
      disconnect: 'डिस्कनेक्ट करा',
      privacyPolicy: 'गोपनीयता धोरण',
      disclaimer: 'आर्थिक सल्ला नाही.',
      searchTokenChain: 'टोकन किंवा साखळीने शोधा',
      portfolioTable: 'पोर्टफोलिओ टेबल',
      portfolioSummary: 'तुमच्या क्रिप्टो होल्डिंग्ज आणि सरासरी खरेदी किंमतींचा सारांश',
      exportCSV: 'CSV मध्ये निर्यात करा',
      back: 'मागे जा',
      loading: 'लोड होत आहे...',
      pay: 'पैसे द्या',
      upgradeTitle: 'आजीवन प्रवेश अनलॉक करा',
      upgradeBenefits: '40+ साखळ्यांचे समर्थन, अमर्याद निर्यात, कोणतेही निर्बंध नाहीत.',
      specialOffer: 'विशेष चाचणी ऑफर: $9.99 ऐवजी $7.50 मध्ये खरेदी करा (25% वाचवा)!'
    }
  },
  te: {
    translation: {
      appTitle: 'క్రిప్టో కాస్ట్ బేసిస్ ట్రాకర్',
      welcomeMessage: 'సగటు కొనుగోలు ధరలను ట్రాక్ చేయడానికి మీ వాలెట్‌ను కనెక్ట్ చేయండి.',
      connectWallet: 'వాలెట్ కనెక్ట్ చేయండి',
      settings: 'సెట్టింగ్‌లు',
      disconnect: 'డిస్కనెక్ట్ చేయండి',
      privacyPolicy: 'గోప్యతా విధానం',
      disclaimer: 'ఆర్థిక సలహా కాదు.',
      searchTokenChain: 'టోకెన్ లేదా చైన్ ద్వారా శోధించండి',
      portfolioTable: 'పోర్ట్‌ఫోలియో టేబుల్',
      portfolioSummary: 'మీ క్రిప్టో హోల్డింగ్‌లు మరియు సగటు కొనుగోలు ధరల సారాంశం',
      exportCSV: 'CSVకి ఎగుమతి చేయండి',
      back: 'వెనక్కి',
      loading: 'లోడ్ అవుతోంది...',
      pay: 'చెల్లించండి',
      upgradeTitle: 'జీవితకాల యాక్సెస్ అన్‌లాక్ చేయండి',
      upgradeBenefits: '40+ చైన్‌లకు మద్దతు, అపరిమిత ఎగుమతులు, ఎటువంటి పరిమితులు లేవు.',
      specialOffer: 'ప్రత్యేక ట్రయల్ ఆఫర్: $9.99కి బదులుగా $7.50కి కొనండి (25% ఆదా)!'
    }
  },
  tr: {
    translation: {
      appTitle: 'Kripto Maliyet Tabanı Takipçisi',
      welcomeMessage: 'Ortalama satın alma fiyatlarını takip etmek için cüzdanınızı bağlayın.',
      connectWallet: 'Cüzdanı Bağla',
      settings: 'Ayarlar',
      disconnect: 'Bağlantıyı Kes',
      privacyPolicy: 'Gizlilik Politikası',
      disclaimer: 'Finansal tavsiye değildir.',
      searchTokenChain: 'Token veya Zincir ile Ara',
      portfolioTable: 'Portföy Tablosu',
      portfolioSummary: 'Kripto varlıklarınızın ve ortalama satın alma fiyatlarının özeti',
      exportCSV: 'CSV’ye Aktar',
      back: 'Geri',
      loading: 'Yükleniyor...',
      pay: 'Öde',
      upgradeTitle: 'Ömür Boyu Erişim Kilidini Aç',
      upgradeBenefits: '40+ zincir desteği, sınırsız dışa aktarma, kısıtlama yok.',
      specialOffer: 'Özel Deneme Teklifi: $9.99 yerine $7.50’ye satın alın (25% tasarruf)!'
    }
  },
  ta: {
    translation: {
      appTitle: 'கிரிப்டோ செலவு அடிப்படை டிராக்கர்',
      welcomeMessage: 'சராசரி வாங்குதல் விலைகளை கண்காணிக்க உங்கள் பணப்பையை இணைக்கவும்.',
      connectWallet: 'பணப்பையை இணைக்கவும்',
      settings: 'அமைப்புகள்',
      disconnect: 'துண்டிக்கவும்',
      privacyPolicy: 'தனியுரிமைக் கொள்கை',
      disclaimer: 'நிதி ஆலோசனை இல்லை.',
      searchTokenChain: 'டோக்கன் அல்லது சங்கிலி மூலம் தேடவும்',
      portfolioTable: 'போர்ட்ஃபோலியோ அட்டவணை',
      portfolioSummary: 'உங்கள் கிரிப்டோ உடைமைகள் மற்றும் சராசரி வாங்குதல் விலைகளின் சுருக்கம்',
      exportCSV: 'CSV-க்கு ஏற்றுமதி செய்யவும்',
      back: 'பின்னோக்கி',
      loading: 'ஏற்றப்படுகிறது...',
      pay: 'பணம் செலுத்தவும்',
      upgradeTitle: 'வாழ்நாள் அணுகலை திறக்கவும்',
      upgradeBenefits: '40+ சங்கிலிகளுக்கு ஆதரவு, வரம்பற்ற ஏற்றுமதிகள், எந்த கட்டுப்பாடுகளும் இல்லை.',
      specialOffer: 'சிறப்பு சோதனை வாய்ப்பு: $9.99-க்கு பதிலாக $7.50-க்கு வாங்கவும் (25% சேமிக்கவும்)!'
    }
  },
  yue: {
    translation: {
      appTitle: '加密貨幣成本基礎追蹤器',
      welcomeMessage: '連繫您嘅錢包去追蹤平均購買價格。',
      connectWallet: '連繫錢包',
      settings: '設定',
      disconnect: '斷開連繫',
      privacyPolicy: '私隱政策',
      disclaimer: '唔係財務建議。',
      searchTokenChain: '按代幣或鏈搜尋',
      portfolioTable: '投資組合表',
      portfolioSummary: '您嘅加密資產同平均購買價格嘅摘要',
      exportCSV: '導出到CSV',
      back: '返去',
      loading: '載入中...',
      pay: '付款',
      upgradeTitle: '解鎖終身訪問',
      upgradeBenefits: '支持40+鏈，無限導出，無限制。',
      specialOffer: '特別試用優惠：以$7.50（節省25%）代替$9.99購買！'
    }
  },
  vi: {
    translation: {
      appTitle: 'Trình Theo Dõi Cơ Sở Chi Phí Tiền Điện Tử',
      welcomeMessage: 'Kết nối ví của bạn để theo dõi giá mua trung bình.',
      connectWallet: 'Kết Nối Ví',
      settings: 'Cài Đặt',
      disconnect: 'Ngắt Kết Nối',
      privacyPolicy: 'Chính Sách Bảo Mật',
      disclaimer: 'Không phải lời khuyên tài chính.',
      searchTokenChain: 'Tìm kiếm theo Token hoặc Chuỗi',
      portfolioTable: 'Bảng Danh Mục Đầu Tư',
      portfolioSummary: 'Tóm tắt các khoản nắm giữ tiền điện tử của bạn với giá mua trung bình',
      exportCSV: 'Xuất ra CSV',
      back: 'Quay Lại',
      loading: 'Đang Tải...',
      pay: 'Thanh Toán',
      upgradeTitle: 'Mở Khóa Truy Cập Trọn Đời',
      upgradeBenefits: 'Hỗ trợ hơn 40 chuỗi, xuất không giới hạn, không hạn chế.',
      specialOffer: 'Ưu Đãi Thử Nghiệm Đặc Biệt: Mua với giá $7.50 (tiết kiệm 25%) thay vì $9.99!'
    }
  },
  ko: {
    translation: {
      appTitle: '크립토 비용 기준 추적기',
      welcomeMessage: '평균 구매 가격을 추적하려면 지갑을 연결하세요.',
      connectWallet: '지갑 연결',
      settings: '설정',
      disconnect: '연결 해제',
      privacyPolicy: '개인정보 보호정책',
      disclaimer: '재무 조언이 아닙니다.',
      searchTokenChain: '토큰 또는 체인으로 검색',
      portfolioTable: '포트폴리오 테이블',
      portfolioSummary: '귀하의 크립토 보유 및 평균 구매 가격 요약',
      exportCSV: 'CSV로 내보내기',
      back: '뒤로',
      loading: '로딩 중...',
      pay: '결제',
      upgradeTitle: '평생 액세스 잠금 해제',
      upgradeBenefits: '40개 이상의 체인 지원, 무제한 내보내기, 제한 없음.',
      specialOffer: '특별 체험 제안: $9.99 대신 $7.50에 구매 (25% 절약)!'
    }
  },
  tl: {
    translation: {
      appTitle: 'Crypto Cost Basis Tracker',
      welcomeMessage: 'Ikonekta ang iyong wallet upang subaybayan ang average na presyo ng pagbili.',
      connectWallet: 'Ikonekta ang Wallet',
      settings: 'Mga Setting',
      disconnect: 'Idiskonekta',
      privacyPolicy: 'Patakaran sa Privacy',
      disclaimer: 'Hindi payo sa pananalapi.',
      searchTokenChain: 'Maghanap ayon sa Token o Chain',
      portfolioTable: 'Talahanayan ng Portfolio',
      portfolioSummary: 'Buod ng iyong mga hawak na crypto at average na presyo ng pagbili',
      exportCSV: 'I-export sa CSV',
      back: 'Bumalik',
      loading: 'Naglo-load...',
      pay: 'Magbayad',
      upgradeTitle: 'I-unlock ang Panghabambuhay na Access',
      upgradeBenefits: 'Suporta para sa 40+ chains, walang limitasyong pag-export, walang restriksyon.',
      specialOffer: 'Espesyal na Alok sa Pagsubok: Bilhin sa $7.50 (makatipid ng 25%) sa halip na $9.99!'
    }
  },
  fa: {
    translation: {
      appTitle: 'ردیاب پایه هزینه کریپتو',
      welcomeMessage: 'کیف پول خود را متصل کنید تا قیمت‌های متوسط خرید را ردیابی کنید.',
      connectWallet: 'اتصال کیف پول',
      settings: 'تنظیمات',
      disconnect: 'قطع اتصال',
      privacyPolicy: 'سیاست حفظ حریم خصوصی',
      disclaimer: 'مشاوره مالی نیست.',
      searchTokenChain: 'جستجو بر اساس توکن یا زنجیره',
      portfolioTable: 'جدول پرتفوی',
      portfolioSummary: 'خلاصه دارایی‌های کریپتو شما با قیمت‌های متوسط خرید',
      exportCSV: 'صادر کردن به CSV',
      back: 'بازگشت',
      loading: 'در حال بارگذاری...',
      pay: 'پرداخت',
      upgradeTitle: 'باز کردن دسترسی مادام‌العمر',
      upgradeBenefits: 'پشتیبانی از بیش از 40 زنجیره، صادرات نامحدود، بدون محدودیت.',
      specialOffer: 'پیشنهاد آزمایشی ویژه: با $7.50 خرید کنید (25% صرفه‌جویی) به جای $9.99!'
    }
  },
  ha: {
    translation: {
      appTitle: 'Mai Ruwan Kuɗi na Crypto',
      welcomeMessage: 'Haɗa walat ɗinka don bin diddigin farashin sayan talakawa.',
      connectWallet: 'Haɗa Walat',
      settings: 'Saituna',
      disconnect: 'Cire Haɗi',
      privacyPolicy: 'Manufar Sirri',
      disclaimer: 'Ba shawara ta kuɗi ba.',
      searchTokenChain: 'Nema ta Alama ko Sarka',
      portfolioTable: 'Teburin Portfolio',
      portfolioSummary: 'Taƙaitaccen abubuwan da kake mallaka na crypto da farashin sayan talakawa',
      exportCSV: 'Fitar da CSV',
      back: 'Koma Baya',
      loading: 'Ana loda...',
      pay: 'Biya',
      upgradeTitle: 'Buɗe Samun Damar Rayuwa',
      upgradeBenefits: 'Goyon baya ga sarkar 40+, fitarwa mara iyaka, babu ƙuntatawa.',
      specialOffer: 'Tayin Gwaji na Musamman: Saya a $7.50 (ceci 25%) maimakon $9.99!'
    }
  },
  arz: {
    translation: {
      appTitle: 'متتبع تكلفة الكريبتو',
      welcomeMessage: 'وصّل المحفظة بتاعتك عشان تتبّع متوسط أسعار الشراء.',
      connectWallet: 'وصّل المحفظة',
      settings: 'الإعدادات',
      disconnect: 'فصل الاتصال',
      privacyPolicy: 'سياسة الخصوصية',
      disclaimer: 'مش نصيحة مالية.',
      searchTokenChain: 'ابحث بالتوكن أو السلسلة',
      portfolioTable: 'جدول المحفظة',
      portfolioSummary: 'ملخص الأصول الكريبتو بتاعتك مع متوسط أسعار الشراء',
      exportCSV: 'تصدير لـ CSV',
      back: 'ارجع',
      loading: 'بيحمل...',
      pay: 'ادفع',
      upgradeTitle: 'افتح الوصول مدى الحياة',
      upgradeBenefits: 'دعم أكتر من 40 سلسلة، تصدير غير محدود، من غير قيود.',
      specialOffer: 'عرض تجريبي خاص: اشتري بـ $7.50 (وفر 25%) بدل $9.99!'
    }
  },
  jv: {
    translation: {
      appTitle: 'Pelacak Biaya Basis Kripto',
      welcomeMessage: 'Sambungake dompetmu kanggo nglacak rega tuku rata-rata.',
      connectWallet: 'Sambungake Dompet',
      settings: 'Setelan',
      disconnect: 'Putusake',
      privacyPolicy: 'Kebijakan Privasi',
      disclaimer: 'Dudu saran finansial.',
      searchTokenChain: 'Telusuri miturut Token utawa Rantai',
      portfolioTable: 'Tabel Portofolio',
      portfolioSummary: 'Ringkasan kepemilikan kriptomu karo rega tuku rata-rata',
      exportCSV: 'Ekspor menyang CSV',
      back: 'Bali',
      loading: 'Lagi Dimuat...',
      pay: 'Bayar',
      upgradeTitle: 'Mbukak Akses Seumur Hidup',
      upgradeBenefits: 'Dukungan kanggo 40+ rantai, ekspor tanpa wates, tanpa watesan.',
      specialOffer: 'Penawaran Uji Coba Khusus: Tuku kanthi $7.50 (nyimpen 25%) tinimbang $9.99!'
    }
  },
  it: {
    translation: {
      appTitle: 'Tracker della Base di Costo Cripto',
      welcomeMessage: 'Collega il tuo portafoglio per monitorare i prezzi medi di acquisto.',
      connectWallet: 'Collega Portafoglio',
      settings: 'Impostazioni',
      disconnect: 'Disconnetti',
      privacyPolicy: 'Informativa sulla Privacy',
      disclaimer: 'Non è un consiglio finanziario.',
      searchTokenChain: 'Cerca per Token o Catena',
      portfolioTable: 'Tabella del Portafoglio',
      portfolioSummary: 'Riepilogo delle tue partecipazioni cripto con prezzi medi di acquisto',
      exportCSV: 'Esporta in CSV',
      back: 'Indietro',
      loading: 'Caricamento...',
      pay: 'Paga',
      upgradeTitle: 'Sblocca l’Accesso a Vita',
      upgradeBenefits: 'Supporto per oltre 40 catene, esportazioni illimitate, senza restrizioni.',
      specialOffer: 'Offerta di Prova Speciale: Acquista a $7.50 (risparmia il 25%) invece di $9.99!'
    }
  },
  th: {
    translation: {
      appTitle: 'ตัวติดตามฐานต้นทุนคริปโต',
      welcomeMessage: 'เชื่อมต่อกระเป๋าเงินของคุณเพื่อติดตามราคาซื้อเฉลี่ย',
      connectWallet: 'เชื่อมต่อกระเป๋าเงิน',
      settings: 'การตั้งค่า',
      disconnect: 'ตัดการเชื่อมต่อ',
      privacyPolicy: 'นโยบายความเป็นส่วนตัว',
      disclaimer: 'ไม่ใช่คำแนะนำทางการเงิน',
      searchTokenChain: 'ค้นหาด้วยโทเค็นหรือเชน',
      portfolioTable: 'ตารางพอร์ตโฟลิโอ',
      portfolioSummary: 'สรุปการถือครองคริปโตของคุณพร้อมราคาซื้อเฉลี่ย',
      exportCSV: 'ส่งออกเป็น CSV',
      back: 'ย้อนกลับ',
      loading: 'กำลังโหลด...',
      pay: 'ชำระเงิน',
      upgradeTitle: 'ปลดล็อกการเข้าถึงตลอดชีพ',
      upgradeBenefits: 'รองรับมากกว่า 40 เชน, ส่งออกไม่จำกัด, ไม่มีข้อจำกัด',
      specialOffer: 'ข้อเสนอทดลองพิเศษ: ซื้อในราคา $7.50 (ประหยัด 25%) แทน $9.99!'
    }
  },
  gu: {
    translation: {
      appTitle: 'ક્રિપ્ટો કોસ્ટ બેસિસ ટ્રેકર',
      welcomeMessage: 'સરેરાશ ખરીદી કિંમતો ટ્રેક કરવા માટે તમારું વૉલેટ કનેક્ટ કરો.',
      connectWallet: 'વૉલેટ કનેક્ટ કરો',
      settings: 'સેટિંગ્સ',
      disconnect: 'ડિસ્કનેક્ટ કરો',
      privacyPolicy: 'ગોપનીયતા નીતિ',
      disclaimer: 'નાણાકીય સલાહ નથી.',
      searchTokenChain: 'ટોકન અથવા ચેઇન દ્વારા શોધો',
      portfolioTable: 'પોર્ટફોલિયો ટેબલ',
      portfolioSummary: 'તમારા ક્રિપ્ટો હોલ્ડિંગ્સ અને સરેરાશ ખરીદી કિંમતોનો સારાંશ',
      exportCSV: 'CSVમાં નિકાસ કરો',
      back: 'પાછળ',
      loading: 'લોડ થઈ રહ્યું છે...',
      pay: 'ચૂકવણી કરો',
      upgradeTitle: 'આજીવન ઍક્સેસ અનલૉક કરો',
      upgradeBenefits: '40+ ચેઇન્સનું સમર્થન, અમર્યાદિત નિકાસ, કોઈ પ્રતિબંધ નહીં.',
      specialOffer: 'વિશેષ ટ્રાયલ ઑફર: $9.99 ને બદલે $7.50માં ખરીદો (25% બચત)!'
    }
  },
  pl: {
    translation: {
      appTitle: 'Śledzenie Bazy Kosztów Krypto',
      welcomeMessage: 'Podłącz swój portfel, aby śledzić średnie ceny zakupu.',
      connectWallet: 'Podłącz Portfel',
      settings: 'Ustawienia',
      disconnect: 'Odłącz',
      privacyPolicy: 'Polityka Prywatności',
      disclaimer: 'Nie jest poradą finansową.',
      searchTokenChain: 'Szukaj według Tokena lub Łańcucha',
      portfolioTable: 'Tabela Portfela',
      portfolioSummary: 'Podsumowanie twoich zasobów kryptograficznych z średnimi cenami zakupu',
      exportCSV: 'Eksportuj do CSV',
      back: 'Wstecz',
      loading: 'Ładowanie...',
      pay: 'Zapłać',
      upgradeTitle: 'Odblokuj Dożywotni Dostęp',
      upgradeBenefits: 'Wsparcie dla ponad 40 łańcuchów, nieograniczony eksport, bez ograniczeń.',
      specialOffer: 'Specjalna Oferta Próbna: Kup za $7.50 (oszczędzaj 25%) zamiast $9.99!'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
