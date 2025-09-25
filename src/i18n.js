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
  // ... (other 27 languages as provided earlier, omitted for brevity)
  // If you need the full i18n.js again, reply "Send full i18n.js".
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
