import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Sample resources (expand for all 30 languages)
const resources = {
  en: { translation: { appTitle: 'Crypto Cost Basis Tracker', welcomeMessage: 'Connect your wallet to track average purchase prices.', connectWallet: 'Connect Wallet', settings: 'Settings', disconnect: 'Disconnect', privacyPolicy: 'Privacy Policy', disclaimer: 'Not financial advice.' } },
  es: { translation: { appTitle: 'Rastreador de Base de Costos Crypto', welcomeMessage: 'Conecta tu billetera para rastrear precios promedio de compra.', connectWallet: 'Conectar Billetera', settings: 'Configuraciones', disconnect: 'Desconectar', privacyPolicy: 'Política de Privacidad', disclaimer: 'No es consejo financiero.' } },
  // Add zh, hi, ar, fr, bn, pt, ru, ur, id, de, ja, pcm, mr, te, tr, ta, yue, vi, ko, tl, fa, ha, arz, jv, it, th, gu, pl ...
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
