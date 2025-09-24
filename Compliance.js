import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Add react-router-dom dep

// Wrap App with <Router> in index.js

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4">
      <h2>{t('privacyPolicy')}</h2>
      <p>{t('privacyText')} {/* "This dApp does not store any user data. All calculations are performed client-side using public blockchain data. Wallet addresses are not logged or shared." */}</p>
      <Link to="/">{t('back')}</Link>
    </div>
  );
};

const Disclaimers = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4">
      <h2>{t('disclaimers')}</h2>
      <p>{t('disclaimerText')} {/* "This tool provides informational data only. It is not financial, tax, or investment advice. Consult professionals for accurate reporting. Data from blockchains may be incomplete or delayed." */}</p>
      <Link to="/">{t('back')}</Link>
    </div>
  );
};

// In App.js footer: <Link to="/privacy">{t('privacyPolicy')}</Link> | <Link to="/disclaimers">{t('disclaimer')}</Link>
// In App.js: Wrap content with <Routes><Route path="/" element={mainContent} /><Route path="/privacy" element={<PrivacyPolicy />} /><Route path="/disclaimers" element={<Disclaimers />} /></Routes>

export { PrivacyPolicy, Disclaimers };
